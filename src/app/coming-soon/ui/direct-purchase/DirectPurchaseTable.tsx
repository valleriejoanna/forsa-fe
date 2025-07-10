import { Fragment, useState } from 'react'
import { KTCard, KTCardBody, KTSVG } from '../../../../_metronic';

const DirectPurchaseTable = () => {
	const [rows] = useState<any>({
    'January 2023': [
      { id: 1, dp_no: 'DP2305-001', trans_date: '31-Jan-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABC', amount: '15,000,000', discount: '1,500,000', total: '13,500,000' },
      { id: 2, dp_no: 'DP2305-002', trans_date: '31-Jan-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABCDE', amount: '75,000,000', discount: '7,500,000', total: '67,500,000' },
    ],
    'February 2023': [
      { id: 1, dp_no: 'DP2305-003', trans_date: '31-Feb-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABC', amount: '5,000,000', discount: '500,000', total: '4,500,000' },
      { id: 2, dp_no: 'DP2305-004', trans_date: '31-Feb-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABCDE', amount: '7,500,000', discount: '750,000', total: '6,750,000' },
    ],
    'March 2023': [
      { id: 1, dp_no: 'DP2305-005', trans_date: '31-Mar-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABC', amount: '10,000,000', discount: '1,000,000', total: '9,000,000' },
      { id: 2, dp_no: 'DP2305-006', trans_date: '31-Mar-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABCDE', amount: '15,000,000', discount: '1,500,000', total: '13,500,000' },
    ],
    'April 2023': [
      { id: 1, dp_no: 'DP2305-007', trans_date: '31-Apr-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABC', amount: '3,500,000', discount: '350,000', total: '3,150,000' },
      { id: 2, dp_no: 'DP2305-008', trans_date: '31-Apr-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABCDE', amount: '4,000,000', discount: '400,000', total: '3,600,000' },
      { id: 3, dp_no: 'DP2305-009', trans_date: '31-Apr-22', purchaser: 'Langley Johanes', supplier: 'Supplier ABCDE', amount: '15,000,000', discount: '1,500,000', total: '13,500,000' },
    ],
  })
	
	return (
		<KTCard>
			<div className='card-header border-0 pt-6'>
				<div className="card-title">
					<div className="d-flex align-items-center position-relative my-1">
						<KTSVG
							path="/media/icons/duotune/general/gen021.svg"
							className="svg-icon-1 position-absolute ms-6"
						/>
						<input
							type="text"
							data-kt-user-table-filter="search"
							className="form-control form-control-solid w-250px ps-14"
							placeholder={"Search..."}
						/>
					</div>
				</div>
				<div className="card-toolbar">
					<div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
						<button
							type="button"
							className="btn btn-primary"
						>
							<KTSVG
								path="/media/icons/duotune/arrows/arr075.svg"
								className="svg-icon-2"
							/>
							Create DP
						</button>
					</div>
				</div>
			</div>

			<KTCardBody className='py-4'>
				<div className='table-responsive'>
					<table className='table align-middle table-hover table-row-dashed fs-6 gy-0 dataTable no-footer'>
						<thead>
							<tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
								<th className='min-w-25px'>No</th>
								<th className='min-w-100px'>DP No</th>
								<th className='min-w-125px'>Trans Date</th>
								<th className='min-w-125px'>Purchaser</th>
								<th className='min-w-125px'>Supplier</th>
								<th className='min-w-125px'>Amount</th>
								<th className='min-w-125px'>Discount (10%)</th>
								<th className='min-w-100px'>Total</th>
								<th className='min-w-100px text-end'>Actions</th>
							</tr>
						</thead>
						<tbody className='text-gray-600'>
							{
								Object.keys(rows).map((key: string | any, i: number) => (
									<Fragment key={i}>
										<tr>
											<td colSpan={12} className='bg-light fw-bold'>
												<span className='min-w-100px'>{key}</span>
											</td>
										</tr>
										{
											rows[key].map((row: any, index: number) => (
												<tr key={index}>
													<td>
														<span className='min-w-100px'>{index + 1}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.dp_no}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.trans_date}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.purchaser}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.supplier}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.amount}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.discount}</span>
													</td>
													<td>
														<span className='min-w-100px'>{row.total}</span>
													</td>
													<td className='text-end'>
														<button
															type='button'
															title='View'
															className='btn btn-link btn-color-gray-500 btn-active-color-primary me-1'
														>
															<KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
														</button>
													</td>
												</tr>
											))
										}
									</Fragment>
								))
							}
						</tbody>
					</table>
				</div>
			</KTCardBody>
		</KTCard>
  );
}

export default DirectPurchaseTable