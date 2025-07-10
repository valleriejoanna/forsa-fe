import { useState } from 'react'
import api from 'axios'
import * as Yup from 'yup'
import clsx from 'clsx'
import {useFormik} from 'formik'
import {checkingExistingAdmin, login} from '../core/_requests'
import {useAuth} from '../core/Auth'
import { fullUrlServer } from '../../../functions/base_url'
import {Link} from 'react-router-dom'
import { UseReactQuery } from '../../../functions'
import { cache_check_existing_admin } from '../../../constans'

api.defaults.baseURL = `${fullUrlServer}/api`;

const loginSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 char')
    .max(50, 'Maximum 50 char')
    .required('Username is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  name: '',
  password: '',
}

export function Login() {
  const { data } = UseReactQuery({ func: checkingExistingAdmin, cacheName: cache_check_existing_admin });

  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const { data } = await login(values.name, values.password)
        saveAuth(data)
        const objData=Object.values(data)
        setCurrentUser(objData[1])
      } catch (error: any) {
        saveAuth(undefined)
        setStatus(error.response.data.message)
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
       
       {/* <button type='button' onClick={getDummyUserSession}>
          testing temp token
        </button> */}

      <header className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to FORSA</h1>
      </header>

      {formik.status ? (
        <p className='mb-lg-15 alert alert-danger'>
          <span className='alert-text font-weight-bold'>{formik.status}</span>
        </p>
      ) : (
        <section className='mb-10 bg-light-info p-8 rounded'>
          <p className='text-info'>
            Use UserName <strong>vernon</strong> and password <strong>1234</strong> to
            continue.
          </p>
        </section>
      )}

      <section className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Username</label>
        <input
          placeholder='Username'
          {...formik.getFieldProps('name')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.name && formik.errors.name},
            {
              'is-valid': formik.touched.name && !formik.errors.name,
            }
          )}
          name='name'
          autoComplete='off'
        />
        {formik.touched.name && formik.errors.name && (
          <p className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.name}</span>
          </p>
        )}
      </section>

      <section className='fv-row mb-10'>
        <section className='d-flex justify-content-between mt-n5'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
        </section>
        <input
          placeholder="Password"
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <section className='fv-plugins-message-container'>
            <article className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </article>
          </section>
        )}
      </section>

      <section className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </section>
      {
        data && 
        data === 200 &&
        <Link to='/auth/registration' className='link-primary fw-bolder' style={{marginLeft: '5px'}}> Create an Administrator Account</Link>
      }
    </form>
  )
}
