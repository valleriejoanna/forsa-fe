import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { KTCard, KTCardBody, KTSVG } from '../../../../_metronic';
import { DataNotFound, DeleteAlert } from '../../../components';
const PaymentTransactionTable = () => {
  const [currentMonthRows] = useState<any | {}>({
    'May 2023': [
      { id: 1, trans_no: 'PV2306-001', trans_date: '04-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 254875, amount: '1,000,000.00', remarks: 'Pembayaran Uang Transportasi', submit: "Yes" },
      { id: 2, trans_no: 'PV2306-002', trans_date: '09-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 231234, amount: '2,500,000.00', remarks: 'Pembayaran Gaji May 23, etc', submit: "Yes" },
    ],
  })
  
  const [historyRows] = useState<any>({
    'March 2023': [
      { id: 1, trans_no: 'PV2306-001', trans_date: '04-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 254875, amount: '1,000,000.00', remarks: 'Pembayaran Uang Transportasi', submit: "Yes" },
      { id: 2, trans_no: 'PV2306-002', trans_date: '09-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 231234, amount: '2,500,000.00', remarks: 'Pembayaran Gaji May 23, etc', submit: "Yes" },
    ],
    'April 2023': [
      { id: 1, trans_no: 'PV2306-001', trans_date: '04-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 254875, amount: '1,000,000.00', remarks: 'Pembayaran Uang Transportasi', submit: "Yes" },
      { id: 2, trans_no: 'PV2306-002', trans_date: '09-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 231234, amount: '2,500,000.00', remarks: 'Pembayaran Gaji May 23, etc', submit: "Yes" },
    ],
    'May 2023': [
      { id: 1, trans_no: 'PV2306-001', trans_date: '04-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 254875, amount: '1,000,000.00', remarks: 'Pembayaran Uang Transportasi', submit: "Yes" },
      { id: 2, trans_no: 'PV2306-002', trans_date: '09-May-23', account_no: '1110201', account_description: 'Kas Kecil Branch Jakarta', journal_group: '100-Cash', branch: 'Jakarta', paid_to: 231234, amount: '2,500,000.00', remarks: 'Pembayaran Gaji May 23, etc', submit: "Yes" },
    ],
  })
  
  return (
    <KTCard>
      <header className='card-header border-0 pt-6'>
        <section className="card-title">
          <span className="text-dark pt-1 fw-bold fs-2">Payment Transaction</span>
        </section>
        <div className="card-toolbar">
          <div className='d-flex justify-content-end'>
            <Link to='' type='button' className='btn btn-primary'>
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              New Payment
            </Link>
          </div>
        </div>
      </header>
      <header className='card-header border-0 pt-6'>
        <section className="card-title">
          <ul className="nav nav-tabs nav-line-tabs nav-stretch mb-5 fs-6 border-0">
            <li className="nav-item">
              <a
                className="nav-link btn btn-sm btn-color-muted btn-hover-light btn-active-light active fw-bold px-4 me-1"
                data-bs-toggle="tab"
                href="#kt_tab_pane_4"
              >
                Current Month
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-sm btn-color-muted btn-hover-light-warning btn-active-light-warning fw-bold px-4 me-1"
                data-bs-toggle="tab"
                href="#kt_tab_pane_5"
              >
                History
              </a>
            </li>
          </ul>
        </section>
        <div className="card-toolbar">
          <div className='d-flex justify-content-end' >
          </div>
        </div>
      </header>

      <KTCardBody className='py-4'>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="kt_tab_pane_4"
            role="tabpanel"
          >
            <div className='table-responsive'>
              <table className='table align-middle table-hover table-row-dashed fs-6 gy-0 dataTable no-footer'>
                <thead>
                  <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                    <th className='min-w-125px' colSpan={2}>Trans No</th>
                    <th className='min-w-125px'>Trans Date</th>
                    <th className='min-w-125px'>Account No</th>
                    <th className='min-w-200px'>Account Description</th>
                    <th className='min-w-125px'>Journal Group</th>
                    <th className='min-w-125px'>Branch</th>
                    <th className='min-w-50px'>Paid To</th>
                    <th className='min-w-100px'>Amount</th>
                    <th className='min-w-200px'>Remarks</th>
                    <th className='min-w-100px'>Submit</th>
                    <th className='min-w-100px text-end'>Actions</th>
                  </tr>
                </thead>
                <tbody className='text-gray-600'>
                {
                  Object.keys(currentMonthRows).length !== 0 ?
                  Object.keys(currentMonthRows).map((key:any, i: any) =>{
                    return(
                      <Fragment key={i}>
                      <tr>
                        <td colSpan={11} className='bg-light fw-bold'>
                        <span className='min-w-100px'>{key}</span>
                        </td>
                      </tr>
                        {
                          currentMonthRows[key].map((row: any, i2:any) => {
                            return (
                            <tr key={row.id}>
                              <td>
                                <span className='min-w-25px'>{i2 + 1}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.trans_no}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.trans_date}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.account_no}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.account_description}</span>
                              </td>
                              <td>
                                <span className='min-w-150px'>{row.journal_group}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.branch}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.paid_to}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.amount}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.remarks}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.submit}</span>
                              </td>
                              <td className='text-end'>
                                <Link
                                  to={`/`}
                                  type='button'
                                  state={row}
                                  className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
                                >
                                  <KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
                                </Link>
                                <Link
                                  state={row}
                                  to='/'
                                  type='button'
                                  className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
                                >
                                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                </Link>
                                <DeleteAlert action={() => ''} />
                              </td>
                            </tr>
                          )
                          })
                          }
                      </Fragment>
                    )
                  }) : <DataNotFound colSpan={12} />
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
            <div className='table-responsive'>
              <table className='table align-middle table-hover table-row-dashed fs-6 gy-0 dataTable no-footer'>
                <thead>
                  <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                    <th className='min-w-125px' colSpan={2}>Trans No</th>
                    <th className='min-w-125px'>Trans Date</th>
                    <th className='min-w-125px'>Account No</th>
                    <th className='min-w-200px'>Account Description</th>
                    <th className='min-w-125px'>Journal Group</th>
                    <th className='min-w-125px'>Branch</th>
                    <th className='min-w-50px'>Paid To</th>
                    <th className='min-w-100px'>Amount</th>
                    <th className='min-w-200px'>Remarks</th>
                    <th className='min-w-100px'>Submit</th>
                    <th className='min-w-100px text-end'>Actions</th>
                  </tr>
                </thead>
                <tbody className='text-gray-600'>
                {
                  Object.keys(historyRows).length !== 0 ?
                  Object.keys(historyRows).map((key:any, i: any) =>{
                    return(
                      <Fragment key={i}>
                      <tr>
                        <td colSpan={11} className='bg-light fw-bold'>
                        <span className='min-w-100px'>{key}</span>
                        </td>
                      </tr>
                        {
                          historyRows[key].map((row: any, i2:any) => {
                            return (
                            <tr key={row.id}>
                              <td>
                                <span className='min-w-25px'>{i2 + 1}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.trans_no}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.trans_date}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.account_no}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.account_description}</span>
                              </td>
                              <td>
                                <span className='min-w-150px'>{row.journal_group}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.branch}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.paid_to}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.amount}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.remarks}</span>
                              </td>
                              <td>
                                <span className='min-w-100px'>{row.submit}</span>
                              </td>
                              <td className='text-end'>
                                <Link
                                  to={`/`}
                                  type='button'
                                  state={row}
                                  className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
                                >
                                  <KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
                                </Link>
                                <Link
                                  state={row}
                                  to='/'
                                  type='button'
                                  className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
                                >
                                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                </Link>
                                <DeleteAlert action={() => ''} />
                              </td>
                            </tr>
                          )
                          })
                          }
                      </Fragment>
                    )
                  }) : <DataNotFound colSpan={12} />
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </KTCardBody>
    </KTCard>
  );
}

export default PaymentTransactionTable