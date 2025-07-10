import { Link } from "react-router-dom"
import { ViewModal, ViewModalBottom, ViewModalBottomText } from "../../../components"

type Props = {
	show: boolean
	handleClose: () => void
}

const OnlineRequestModal = ({show, handleClose}: Props) => {
	return (
		<ViewModal title={'Online Request'} modalSize="700px" show={show} handleClose={handleClose}>
			<ViewModalBottom>
				<div className="row">
					<div className="col-md-6 fv-row">
            <h4 className='mb-5'>Operation</h4>
						<ViewModalBottomText
              title={
                <Link
                  to={`/apps/operations/work-job-order/job-request`}
                  type='button'
                >
                  JR
                </Link>
              }
              body='Job Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/apps/operations/work-job-order`}
                  type='button'
                >
                  WO
                </Link>
              }
              body='Work Order'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  FR
                </Link>
              }
              body='Fuel Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  PC
                </Link>
              }
              body='Pre Checklist'
            />
            <h4 className='mb-5'>Finance</h4>
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  AS
                </Link>
              }
              body='Asset Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  CR
                </Link>
              }
              body='Cash Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  CE
                </Link>
              }
              body='Capital Expenditure'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/apps/finance/invoice-admin`}
                  type='button'
                >
                  INV
                </Link>
              }
              body='Invoice'
            />
            <h4 className='mb-5'>Material</h4>
						<ViewModalBottomText
              title={
                <Link
                  to={`/apps/supply/issues-request/material-request`}
                  type='button'
                >
                  MR
                </Link>
              }
              body='Material Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/apps/supply/replenish-pr/view`}
                  type='button'
                >
                  PR
                </Link>
              }
              body='Purchase Requisition'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/apps/supply/purchase-management/purchase-order`}
                  type='button'
                >
                  PO
                </Link>
              }
              body='Purchase Order'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  SO
                </Link>
              }
              body='Sales Order'
            />
					</div>
					<div className="col-md-6 fv-row">
            <h4 className='mb-5'>Employee</h4>
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  ER
                </Link>
              }
              body='Employee Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  TR
                </Link>
              }
              body='Travel Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  TN
                </Link>
              }
              body='Training Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  PA
                </Link>
              }
              body='Performance Appraisal'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  WFT
                </Link>
              }
              body='Workforce Transfer'
            />
            <h4 className='mb-5'>Admin</h4>
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  AC
                </Link>
              }
              body='Accomodation Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  TP
                </Link>
              }
              body='Transportation Request'
            />
						<ViewModalBottomText
              title={
                <Link
                  to={`/dashboard/overview`}
                  type='button'
                >
                  VR
                </Link>
              }
              body='Visitor Request'
            />
					</div>
				</div>
			</ViewModalBottom>
		</ViewModal>
	)
}

export {OnlineRequestModal}