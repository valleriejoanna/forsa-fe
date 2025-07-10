import {FC} from 'react'
import {useLayout} from '../core'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className='text-dark order-2 order-md-1'>
          <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
          <a href='http://abase.id/' className='text-gray-800 text-hover-primary' target="_blank" rel="noreferrer">
            PT. Andalan Banua Sejahtera
          </a>
        </div>
      </div>
    </div>
  )
}

export {Footer}
