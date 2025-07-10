import { Search, toAbsoluteUrl } from "../../../../_metronic"
import { ViewModal, ViewModalBottom, ViewModalBottomText } from "../../../components"

type Props = {
	show: boolean
	handleClose: () => void
}

const PhonebookModal = ({show, handleClose}: Props) => {
  return (
		<ViewModal title={'Phonebook'} modalSize="75" show={show} handleClose={handleClose}>
      <section className='d-flex align-items-center justify-content-between position-relative px-15'>
        <h1>Full Name</h1>
        <Search />
      </section>
			<ViewModalBottom>
				<div className="row">
					<div className="col-md-2 fv-row me-10">
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='Blank Profile Logo' />
            </div>
					</div>
					<div className="col-md-4 fv-row">
            <h4 className='mb-5'>General Info</h4>
            <ViewModalBottomText title='Employee ID' body='' />
						<ViewModalBottomText title='Full Name' body='' />
						<ViewModalBottomText title='Gender' body='' />
						<ViewModalBottomText title='Marital' body='' />
					</div>
					<div className="col-md-5 fv-row">
            <h4 className='mb-5'>Job Information</h4>
            <ViewModalBottomText title='Employee Type' body='' />
						<ViewModalBottomText title='Position ID - Title' body='' />
						<ViewModalBottomText title='E-mail Address' body='' />
						<ViewModalBottomText title='Workphone' body='' />
						<ViewModalBottomText title='Mobile Phone' body='' />
            <ViewModalBottomText title='Home Phone' body='' />
					</div>
				</div>
				<div className="row">
          <h4 className='mb-5'>Organization</h4>
					<div className="col-md-4 fv-row">
            <ViewModalBottomText title='Company' body='' />
						<ViewModalBottomText title='Employee Company' body='' />
						<ViewModalBottomText title='Site | Branch' body='' />
						<ViewModalBottomText title='Division' body='' />
					</div>
					<div className="col-md-4 fv-row">
            <ViewModalBottomText title='Business Unit' body='' />
						<ViewModalBottomText title='Department' body='' />
						<ViewModalBottomText title='Cost Center | Section' body='' />
						<ViewModalBottomText title='OnSite Location' body='' />
					</div>
					<div className="col-md-4 fv-row">
            <ViewModalBottomText title='Work Location' body='' />
						<ViewModalBottomText title='Supervisor' body='' />
						<ViewModalBottomText title='Office' body='' />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 fv-row">
            <h4 className='mb-5'>Address Details</h4>
            <table className="table table-row-dashed table-row-gray-300 gy-0">
              <thead>
                <tr className="fw-bold text-muted">
                  <th>Address</th>
                  <th>Sub District</th>
                  <th>District</th>
                  <th>Region</th>
                  <th>Province</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
					</div>
				</div>
				<div className="row mt-10">
					<div className="col-md-12 fv-row">
            <h4 className='mb-5'>Onsite Address</h4>
            <table className="table table-row-dashed table-row-gray-300 gy-0">
              <thead>
                <tr className="fw-bold text-muted">
                  <th>Address</th>
                  <th>Sub District</th>
                  <th>District</th>
                  <th>Region</th>
                  <th>Province</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
					</div>
				</div>
			</ViewModalBottom>
		</ViewModal>
	)
}

export {PhonebookModal}