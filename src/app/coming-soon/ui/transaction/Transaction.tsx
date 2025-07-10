import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dropdown1, KTSVG, toAbsoluteUrl } from '../../../../_metronic';
import { FilterDropdown } from '../FilterDropdown';
import { ReportModal } from '../../../components';

const TransactionWrapper = () => {
  const [showReportModal, setShowReportModal] = useState<boolean>(false)

  const location = useLocation()

	return (
		<div className="card mb-5 mb-xl-5">
      <div className="card-body pt-9 pb-9">
        <div className='d-flex flex-wrap flex-sm-nowrap'>
          <Link
            className='btn btn-flush me-7'
            to='/apps/operations/work-job-order/overview'
          >
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/module-profile/fl-light.png')} className='theme-light-show' alt='Work Order' />
              <img src={toAbsoluteUrl('/media/module-profile/fl-dark.png')} className='theme-dark-show' alt='Work Order' />
            </div>
          </Link>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Payment Voucher
                  </span>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <span className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                    Payment Transaction Details
                  </span>
                </div>
              </div>

              <div className='d-flex my-4'>
                <button
                  className='btn btn-sm btn-light-primary me-2'
                  id='kt_user_follow_button'
                  data-kt-menu-trigger="click"
                >
                  <KTSVG
                    path="/media/icons/duotune/general/gen031.svg"
                    className="svg-icon-2 svg-icon-6"
                  />
                  Filter
                </button>
                <FilterDropdown />

                <button
                  className='btn btn-sm btn-primary me-3'
                  onClick={() => setShowReportModal(true)}
                >
                  REPORT
                </button>
                
                <div className='me-0'>
                  <button
                    className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <i className='bi bi-three-dots fs-3'></i>
                  </button>
                  <Dropdown1 />
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <Link
                    to='/apps/finance/transactions'
                    className={
                      `btn btn-flush btn-active-light-primary border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3
                      ${location.pathname === '/apps/finance/transactions' && 'active'}`
                    }
                  >
                    <div className='d-flex align-items-center'>
                      <div className='fs-2 fw-bolder'>15</div>
                    </div>
                    
                    <div className="d-flex align-items-start">
                      <div className='fw-bold fs-6 text-gray-400'>Payment Voucher</div>
                    </div>
                  </Link>

                  <Link
                    to=''
                    className={
                      `btn btn-flush btn-active-light-primary border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3
                      ${location.pathname === '' && 'active'}`
                    }
                  >
                    <div className='d-flex align-items-center'>
                      <div className='fs-2 fw-bolder'>250</div>
                    </div>

                    <div className="d-flex align-items-start">
                      <div className='fw-bold fs-6 text-gray-400'>Receipt Voucher</div>
                    </div>
                  </Link>

                  <Link
                    to=''
                    className={
                      `btn btn-flush btn-active-light-primary border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3
                      ${location.pathname === '' && 'active'}`
                    }
                  >
                    <div className='d-flex align-items-center'>
                      <div className='fs-2 fw-bolder'>15</div>
                    </div>

                    <div className="d-flex align-items-start">
                      <div className='fw-bold fs-6 text-gray-400'>General Journal</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className='d-flex align-items-end w-300px w-xl-400px w-lg-400px w-md-300px w-sm-300px w-xs-300px flex-column'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <Link
                    className={
                      `btn btn-flush btn-active-light-info border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 me-6 mb-3
                      ${location.pathname === '' && 'active'}`
                    }
                    to=''
                    >
                    <div className="d-flex align-items-start">
                      <div className='text-info fs-6'>Overbook Voucher</div>
                    </div>
                  </Link>

                  <Link
                    className={
                      `btn btn-flush btn-active-light-info border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 me-6 mb-3
                      ${location.pathname === '' && 'active'}`
                    }
                    to=''
                  >
                    <div className="d-flex align-items-start">
                      <div className='text-info fs-6'>Correction | Adjust</div>
                    </div>
                  </Link>

                  
                  <button className='btn btn-flush btn-active-light-info border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 mb-3'>
                    <div className="d-flex align-items-start">
                      <div className='text-info fs-6'>Posting</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportModal show={showReportModal} handleClose={() => setShowReportModal(false)} />
    </div>
  );
}

export default TransactionWrapper