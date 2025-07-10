import { KTCard, KTCardBody, KTSVG } from '../../../../_metronic';
import { Link } from 'react-router-dom'

const MeterReadingTable = () => {
	return (
		<>
			<div className="row g-5 g-xl-10">
				<div className="col-sm-7 col-md-7 col-lg-9 col-xl-9 col-xxl-9">
					<KTCard className='card-xl-stretch mb-10'>
						<div className="card-header">
              <div className="card-title">
							  <span className="text-dark pt-1 fw-bold fs-2">Performance Summary</span>
          			<span className="badge badge-warning ms-3">Current Month</span>
              </div>
              <div className="card-toolbar">
                <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
                  <span className='text-gray-600 fw-bold me-3 mt-4'>Filter by:</span>
                  <select
                    name='status'
                    data-control='select2'
                    data-hide-search='true'
                    className='form-select form-select-solid form-select-sm w-125px me-3'
                    defaultValue='active'
                  >
                    <option value='active'>Fleet</option>
                    <option value='inactive'>Date</option>
                  </select>
                </div>
              </div>
						</div>
						<KTCardBody className='card-scroll pt-0'>
              <div className='table-responsive mt-5'>
                <table className='table align-middle table-hover table-row-dashed fs-6 gy-0 dataTable no-footer'>
                  <thead className='border-bottom border-gray-500'>
                    <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0 bg-light'>
                      <th className='min-w-150px text-center' rowSpan={2}>Operation Performance</th>
                      <th className='min-w-125px text-center' colSpan={8}>MONTH</th>
                      <th className='min-w-125px text-center' colSpan={8}>YEAR TO DATE</th>
                    </tr>
                    <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0 bg-light'>
                      <th className='min-w-50px text-center' colSpan={2}>DRILL</th>
                      <th className='min-w-50px text-center' colSpan={2}>SHOVEL</th>
                      <th className='min-w-50px text-center' colSpan={2}>HAUL</th>
                      <th className='min-w-50px text-center' colSpan={2}>SUPPORT</th>
                      <th className='min-w-50px text-center' colSpan={2}>DRILL</th>
                      <th className='min-w-50px text-center' colSpan={2}>SHOVEL</th>
                      <th className='min-w-50px text-center' colSpan={2}>HAUL</th>
                      <th className='min-w-50px text-center' colSpan={2}>SUPPORT</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600'>
                    <tr>
                      <td colSpan={17} className='bg-light fw-bold'>
                        <span className='min-w-100px'>OPERATION PERFORMANCE</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='min-w-100px'>Fleet Availability</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='min-w-100px'>Fleet Utilization</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                      <td>
                        <span className='min-w-100px'>75%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
						</KTCardBody>
					</KTCard>
				</div>
				<div className="col-sm-5 col-md-5 col-lg-3 col-xl-3 col-xxl-3">
					<div className="card card-xl-stretch mb-10">
						<div className="card-header pt-5">
							<h3 className="card-title text-gray-800">Overview</h3>
						</div>
						<div className="card-body pt-5">
							<div className="d-flex flex-stack">
								<div className="d-flex align-items-start">
									<KTSVG
										path="/media/icons/duotune/ecommerce/ecm002.svg"
										className="svg-icon-2 svg-icon-muted"
									/>
									<div className="text-gray-700 fw-semibold fs-6 ms-2">Operation Modular</div>
								</div>
									<KTSVG
										path="/media/icons/duotune/general/gen052.svg"
										className="svg-icon-4 svg-icon-muted"
									/>
							</div>
							<div className="separator separator-dashed my-3"></div>
							<div className="d-flex flex-stack">
								<div className="d-flex align-items-start">
									<KTSVG
										path="/media/icons/duotune/layouts/lay009.svg"
										className="svg-icon-2 svg-icon-muted"
									/>
									<div className="text-gray-700 fw-semibold fs-6 ms-2">Fleet Register</div>
								</div>
								<KTSVG
									path="/media/icons/duotune/general/gen052.svg"
									className="svg-icon-4 svg-icon-muted"
								/>
							</div>
							<div className="separator separator-dashed my-3"></div>
							<div className="d-flex flex-stack">
								<div className="d-flex align-items-start">
									<KTSVG
										path="/media/icons/duotune/general/gen032.svg"
										className="svg-icon-2 svg-icon-muted"
									/>
									<div className="text-gray-700 fw-semibold fs-6 ms-2">Operator Management</div>
								</div>
								<KTSVG
									path="/media/icons/duotune/general/gen052.svg"
									className="svg-icon-4 svg-icon-muted"
								/>
							</div>
							<div className="separator separator-dashed my-3"></div>
							<div className="d-flex flex-stack">
								<div className="d-flex align-items-start">
									<KTSVG
										path="/media/icons/duotune/communication/com004.svg"
										className="svg-icon-2 svg-icon-muted"
									/>
									<div className="text-gray-700 fw-semibold fs-6 ms-2">Fleet Performance</div>
								</div>
								<KTSVG
									path="/media/icons/duotune/general/gen052.svg"
									className="svg-icon-4 svg-icon-muted"
								/>
							</div>
							<div className="separator separator-dashed my-3"></div>
							<div className="d-flex flex-stack">
								<div className="d-flex align-items-start">
									<KTSVG
										path="/media/icons/duotune/art/art007.svg"
										className="svg-icon-2 svg-icon-muted"
									/>
									<div className="text-gray-700 fw-semibold fs-6 ms-2">Related Modules</div>
								</div>
								<KTSVG
									path="/media/icons/duotune/general/gen052.svg"
									className="svg-icon-4 svg-icon-muted"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
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
							<span className='text-gray-600 fw-bold me-3 mt-4'>Sort by:</span>
							<select
								name='status'
								data-control='select2'
								data-hide-search='true'
								className='form-select form-select-solid form-select-sm w-125px me-3'
								defaultValue='active'
							>
								<option value='active'>Date Raised</option>
								<option value='inactive'>PO Number</option>
								<option value='all'>Supplier</option>
							</select>
							<span className='text-gray-600 fw-bold me-3 mt-4'>Filter by:</span>
							<select
								name='status'
								data-control='select2'
								data-hide-search='true'
								className='form-select form-select-solid form-select-sm w-125px me-3'
								defaultValue='active'
							>
								<option value='active'>Fleet</option>
								<option value='inactive'>Date</option>
							</select>
						</div>
					</div>
				</div>

				<KTCardBody className='py-4'>
					<div className='table-responsive'>
						<table className='table align-middle table-hover table-row-dashed fs-6 gy-0 dataTable no-footer'>
							<thead>
								<tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
									<th className='min-w-50px'>No</th>
									<th className='min-w-125px'>Asset Name</th>
									<th className='min-w-125px'>Location</th>
									<th className='min-w-125px'>Status</th>
									<th className='min-w-125px'>Type</th>
									<th className='min-w-125px'>Reason</th>
									<th className='min-w-100px'>Time</th>
									<th className='min-w-100px'>Duration</th>
									<th className='min-w-100px'>Comments</th>
									<th className='min-w-100px text-end'>Actions</th>
								</tr>
							</thead>
							<tbody className='text-gray-600'>
								<tr>
									<td colSpan={10} className='bg-light fw-bold'>
										<span className='min-w-100px'>Prime Mover Volvo FH16</span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='min-w-100px'>1</span>
									</td>
									<td>
										<span className='min-w-100px'>PM1603</span>
									</td>
									<td>
										<span className='min-w-100px'>Pushback #10</span>
									</td>
									<td>
										<span className='min-w-100px'>Ready</span>
									</td>
									<td>
										<span className='min-w-100px'>100</span>
									</td>
									<td>
										<span className='min-w-100px'>Operating</span>
									</td>
									<td>
										<span className='min-w-100px'>(2022-05-01) - 09:25:30</span>
									</td>
									<td>
										<span className='min-w-100px'>7162.7</span>
									</td>
									<td>
										<span className='min-w-100px'>Continue</span>
									</td>
									<td className='text-end'>
										<Link
											to={`/ops/operational/asset-mgt/view`}
											type='button'
											className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
										>
											<KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
										</Link>
									</td>
								</tr>
								<tr>
									<td>
										<span className='min-w-100px'>2</span>
									</td>
									<td>
										<span className='min-w-100px'>PM1603</span>
									</td>
									<td>
										<span className='min-w-100px'>Pushback #10</span>
									</td>
									<td>
										<span className='min-w-100px'>Down</span>
									</td>
									<td>
										<span className='min-w-100px'>302</span>
									</td>
									<td>
										<span className='min-w-100px'>Mechanical Vital</span>
									</td>
									<td>
										<span className='min-w-100px'>(2022-05-01) - 09:25:30</span>
									</td>
									<td>
										<span className='min-w-100px'>7162.7</span>
									</td>
									<td>
										<span className='min-w-100px'>Broken Propeller</span>
									</td>
									<td className='text-end'>
										<Link
											to={`/ops/operational/asset-mgt/view`}
											type='button'
											className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
										>
											<KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
										</Link>
									</td>
								</tr>
								<tr>
									<td colSpan={10} className='bg-light fw-bold'>
										<span className='min-w-100px'>Prime Mover Volvo FH16</span>
									</td>
								</tr>
								<tr>
									<td>
										<span className='min-w-100px'>1</span>
									</td>
									<td>
										<span className='min-w-100px'>PM1603</span>
									</td>
									<td>
										<span className='min-w-100px'>Pushback #10</span>
									</td>
									<td>
										<span className='min-w-100px'>Ready</span>
									</td>
									<td>
										<span className='min-w-100px'>100</span>
									</td>
									<td>
										<span className='min-w-100px'>Operating</span>
									</td>
									<td>
										<span className='min-w-100px'>(2022-05-01) - 09:25:30</span>
									</td>
									<td>
										<span className='min-w-100px'>7162.7</span>
									</td>
									<td>
										<span className='min-w-100px'>Continue</span>
									</td>
									<td className='text-end'>
										<Link
											to={`/ops/operational/asset-mgt/view`}
											type='button'
											className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
										>
											<KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
										</Link>
									</td>
								</tr>
								<tr>
									<td>
										<span className='min-w-100px'>2</span>
									</td>
									<td>
										<span className='min-w-100px'>PM1603</span>
									</td>
									<td>
										<span className='min-w-100px'>Pushback #10</span>
									</td>
									<td>
										<span className='min-w-100px'>Down</span>
									</td>
									<td>
										<span className='min-w-100px'>302</span>
									</td>
									<td>
										<span className='min-w-100px'>Mechanical Vital</span>
									</td>
									<td>
										<span className='min-w-100px'>(2022-05-01) - 09:25:30</span>
									</td>
									<td>
										<span className='min-w-100px'>7162.7</span>
									</td>
									<td>
										<span className='min-w-100px'>Broken Propeller</span>
									</td>
									<td className='text-end'>
										<Link
											to={`/ops/operational/asset-mgt/view`}
											type='button'
											className='btn btn-sm btn-link btn-color-gray-500 btn-active-color-primary me-1'
										>
											<KTSVG path='/media/icons/duotune/general/gen004.svg' className='svg-icon-3' />
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</KTCardBody>
			</KTCard>
		</>
  );
}
export {MeterReadingTable}