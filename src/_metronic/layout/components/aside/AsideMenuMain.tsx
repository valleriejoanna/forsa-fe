import {useContext} from 'react'
import {AsideMenuItem} from './AsideMenuItem'
import {useAuth} from '../../../../app/modules/auth'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import CompanySizeContext from '../header/CompanySizeContext'

export function AsideMenuMain() {
  const {currentUser} = useAuth()
  const { companySize } = useContext(CompanySizeContext);

  return (
    <>
      <AsideMenuItemWithSub
        to='/dashboard'
        title='Dashboard'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
        showSubmenu={true}
      >
        <AsideMenuItem
          to='/dashboard/overview'
          title='Overview'
          hasBullet={true}
        />
        {companySize === 'big' && <AsideMenuItem to='/dashboard/online-services' title='Online Services' hasBullet={true} />}
        <AsideMenuItem to='/dashboard/company-profile' title='Company Profile' hasBullet={true} />
        {(companySize === 'big' || companySize === 'medium') && <AsideMenuItem to='/dashboard/organization-chart' title='Organization Chart' hasBullet={true} />}
        {companySize === 'big' && <AsideMenuItem to='/dashboard/policy-procedures' title='Policy & Procedures' hasBullet={true} />}
        {companySize === 'big' && <AsideMenuItem to='/dashboard/branding-marketing' title='Branding & Marketing' hasBullet={true} />}
      </AsideMenuItemWithSub>
      
      {(companySize === 'big' || companySize === 'medium') && <>
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>OPS</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='/ops/production'
          title='Production'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/abstract/abs046.svg'
        >
          <AsideMenuItem to='/ops/production/production-tracking' title='Production Tracking' hasBullet={true} />
          <AsideMenuItem to='/ops/production/production-performance' title='Production Performance' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ops/operation'
          title='Operation'
          icon='/media/icons/duotune/abstract/abs017.svg'
          fontIcon='bi-person'
        >
          <AsideMenuItem to='/ops/operation/operation-performance' title='Operation Performance' hasBullet={true} />
          <AsideMenuItem to='/ops/operation/dispatch-breakdown' title='Dispatch Breakdown' hasBullet={true} />
          <AsideMenuItem to='/ops/operation/maintenance-schedule' title='Maintenance Schedule' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/ops/operation/maintenance-reliability' title='Maintenance Reliability' hasBullet={true} />}
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ops/workforce'
          title='Workforce'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/abstract/abs039.svg'
        >
          <AsideMenuItem to='/ops/workforce/workforce-performance' title='Workforce Performance' hasBullet={true} />
          <AsideMenuItem to='/ops/workforce/plan-schedule' title='Plan & Schedule' hasBullet={true} />
          <AsideMenuItem to='/ops/workforce/workforce-facilities' title='Workforce Facilities' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ops/inventory'
          title='Inventory'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/layouts/lay002.svg'
        >
          <AsideMenuItem to='/ops/inventory/inventory-availability' title='Inventory Availability' hasBullet={true} />
          <AsideMenuItem to='/ops/inventory/inventory-forecast' title='Inventory Forecast' hasBullet={true} />
        </AsideMenuItemWithSub>
      
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>ESS</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='/ess/personal-info'
          title='Personal Info'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen015.svg'
        >
          <AsideMenuItem to='/ess/personal-info/personal-data' title='Personal Data' hasBullet={true} />
          <AsideMenuItem to='/ess/personal-info/job-information' title='Job Information' hasBullet={true} />
          <AsideMenuItem to='/ess/personal-info/dependent' title='Dependent' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/ess/personal-info/job-facilities' title='Job Facilities' hasBullet={true} />}
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ess/development'
          title='Development'
          icon='/media/icons/duotune/abstract/abs004.svg'
          fontIcon='bi-person'
        >
          <AsideMenuItem to='/ess/development/career-development' title='Career & Development' hasBullet={true} />
          <AsideMenuItem to='/ess/development/training-admin' title='Training Admin' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/ess/development/performance-appraisal' title='Performance Appraisal' hasBullet={true} />}
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ess/leave-travel'
          title='Leave & Travel'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/maps/map006.svg'
        >
          <AsideMenuItem to='/ess/leave-travel/leave-details' title='Leave Details' hasBullet={true} />
          <AsideMenuItem to='/ess/leave-travel/leave-roster' title='Leave Roster' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ess/attendance-discipline'
          title='Attendance & Discipline'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/maps/map007.svg'
        >
          <AsideMenuItem to='/ess/attendance-discipline/fingerprint-time' title='Fingerprint | Time' hasBullet={true} />
          <AsideMenuItem to='/ess/attendance-discipline/disciplinary-action' title='Disciplinary Action' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/ess/compensation'
          title='Compensation'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/finance/fin007.svg'
        >
          <AsideMenuItem to='/ess/compensation/expense-claim' title='Expense Claim' hasBullet={true} />
          <AsideMenuItem to='/ess/compensation/earnings-payroll' title='Earnings | Payroll' hasBullet={true} />
        </AsideMenuItemWithSub>
        
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>DSS</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='/dss/manpower'
          title='Manpower'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/medicine/med006.svg'
        >
          <AsideMenuItem to='/dss/manpower/manpower-summary' title='Manpower Summary' hasBullet={true} />
          <AsideMenuItem to='/dss/manpower/personnel-details' title='Personnel Details' hasBullet={true} />
          <AsideMenuItem to='/dss/manpower/organization-chart-detail' title='Organization Chart Detail' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/dss/finance'
          title='Finance'
          icon='/media/icons/duotune/finance/fin001.svg'
          fontIcon='bi-person'
        >
          <AsideMenuItem to='/dss/finance/capital-expenditure' title='Capital Expenditure' hasBullet={true} />
          <AsideMenuItem to='/dss/finance/contract-admin' title='Contract Admin' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/dss/material'
          title='Material'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/general/gen011.svg'
        >
          <AsideMenuItem to='/dss/material/online-request' title='Online Request' hasBullet={true} />
          <AsideMenuItem to='/dss/material/material-tracking' title='Material Tracking' hasBullet={true} />
          <AsideMenuItem to='/dss/material/inventory-stock' title='Inventory Stock' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/dss/service'
          title='Service'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/communication/com007.svg'
        >
          <AsideMenuItem to='/dss/service/transport-control' title='Transport Control' hasBullet={true} />
          <AsideMenuItem to='/dss/service/visitor-control' title='Visitor Control' hasBullet={true} />
          <AsideMenuItem to='/dss/service/light-vehicle-portal' title='Light Vehicle Portal' hasBullet={true} />
        </AsideMenuItemWithSub>
      </>}

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>FORSA</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/finance'
        title='Finance'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/finance/fin010.svg'
      >
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/accounts-master' : "/error/404"} title='Accounts Master' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager" || currentUser?.role === 'fin_transaction_clerk') ? '/apps/finance/transactions' : "/error/404"} title='Transactions' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/accounts-payable' : "/error/404"} title='Accounts Payable' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/accounts-receivable' : "/error/404"} title='Accounts Receivable' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager" || currentUser?.role === 'fin_invoice_admin_clerk') ? '/apps/finance/invoice-admin/view' : "/error/404"} title='Invoice Admin' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/fixed-asset' : "/error/404"} title='Fixed Asset' hasBullet={true} />
        {companySize === 'big' && <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/payroll-system' : "/error/404"} title='Payroll System' hasBullet={true} />}
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/ledger-report' : "/error/404"} title='Ledger | Report' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/apps/operations'
        title='Operations'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/abstract/abs041.svg'
      >
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_work_job_order_clerk") ? '/apps/operations/work-job-order/overview' : "/error/404"} title='Work | Job Order' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_job_request_clerk") ? '/apps/operations/job-request/overview' : "/error/404"} title='Job Request' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_asset_mgt_clerk") ? '/apps/operations/asset-management/asset-register' : "/error/404"} title='Asset Management' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_reading_fuel_clerk") ? '/apps/operations/reading-fuel/view' : "/error/404"} title='Reading | Fuel' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_pm_system_clerk") ? '/apps/operations/pm-system/plan' : "/error/404"} title='PM System' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_breakdown_control_clerk") ? '/apps/operations/breakdown-control/overview' : "/error/404"} title='Breakdown Control' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager") ? '/apps/operations/accident-control' : "/error/404"} title='Accident Control' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/apps/resource'
        title='Resource'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com005.svg'
      >
        {companySize === 'big' && <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/plan-recruitment' : "/error/404"} title='Plan | Recruitment' hasBullet={true} />}
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager" || currentUser?.role === "hr_employee_admin_clerk") ? '/apps/resource/admin/employee-register' : "/error/404"} title='Employee Admin' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/training-system' : "/error/404"} title='Training System' hasBullet={true} />
        {companySize === 'big' && <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/appraisal-career' : "/error/404"} title='Appraisal & Career' hasBullet={true} />}
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/time-attendance' : "/error/404"} title='Time & Attendance' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/leave-travel' : "/error/404"} title='Leave & Travel' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/medical-insurance' : "/error/404"} title='Medical & Insurance' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/apps/supply'
        title='Supply'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/general/gen017.svg'
      >
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager") ? '/apps/supply/catalogue/overview' : "/error/404"} title='Catalogue' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_replenish_pr_clerk") ? '/apps/supply/replenish-pr/view' : "/error/404"} title='Replenish | PR' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_purchasing_clerk") ? '/apps/supply/purchase-management/view' : "/error/404"} title='Purchasing' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_issue_request_clerk") ? '/apps/supply/issues-request/material-issue' : "/error/404"} title='Issue | Request' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager") ? '/apps/supply/expediting' : "/error/404"} title='Expediting' hasBullet={true} />
        <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_inventory_clerk") ? '/apps/supply/inventory/view' : "/error/404"} title='Inventory' hasBullet={true} />
        {companySize === 'big' && <AsideMenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager") ? '/apps/supply/consignment' : "/error/404"} title='Consignment' hasBullet={true} />}
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/apps/admin'
        title='Admin'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/general/gen004.svg'
      >
        <AsideMenuItem to='/apps/admin/office-service' title='Office Service' hasBullet={true} />
        {companySize === 'big' && <AsideMenuItem to='/apps/admin/corporate-culture' title='Corporate Culture' hasBullet={true} />}
        <AsideMenuItem to='/apps/admin/ecollaboration' title='E-Collaboration' hasBullet={true} />
        {companySize === 'big' && <AsideMenuItem to='/apps/admin/it-management' title='IT Management' hasBullet={true} />}
        <AsideMenuItem to='/apps/admin/safety-management' title='Safety Management' hasBullet={true} />
        <AsideMenuItem to='/apps/admin/security-management' title='Security Management' hasBullet={true} />
        {companySize === 'big' && <AsideMenuItem to='/apps/admin/industrial-relations' title='Industrial Relations' hasBullet={true} />}
      </AsideMenuItemWithSub>

      {(companySize === 'big' || companySize === 'medium') && <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Modulars</span>
        </div>
      </div>
        <AsideMenuItemWithSub
          to='/modulars/prime'
          title='Prime'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/general/gen003.svg'
        >
          <AsideMenuItem to='/modulars/prime/operation-management' title='Operation Management' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/modulars/prime/maintenance-management' title='Maintenance Management' hasBullet={true} />}
          <AsideMenuItem to='/modulars/prime/workforce-management' title='Workforce Management' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/modulars/prime/inventory-program' title='Inventory Program' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/prime/cash-cost-control' title='Cash Cost Control' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/prime/facilities-management' title='Facilities Management' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/prime/production-system' title='Production System' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/prime/manufacture-system' title='Manufacture System' hasBullet={true} />}
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/modulars/op'
          title='Operation'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/ecommerce/ecm008.svg'
        >
          {companySize === 'big' && <AsideMenuItem to='/modulars/op/workshop-management' title='Workshop Management' hasBullet={true} />}
          <AsideMenuItem to='/modulars/op/lv-management' title='LV Management' hasBullet={true} />
          <AsideMenuItem to='/modulars/op/component-program' title='Component RPL Program' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/modulars/op/consumable-control' title='Consumable Control' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/op/tire-management' title='Tire Management' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/op/tooling-management' title='Tooling Management' hasBullet={true} />}
        </AsideMenuItemWithSub>
      </>}
      {(companySize === 'big' || companySize === 'medium') && <>
        <AsideMenuItemWithSub
          to='/modulars/dept'
          title='Department'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/abstract/abs020.svg'
        >
          {companySize === 'big' && <AsideMenuItem to='/modulars/dept/sales-management/view' title='Sales Management' hasBullet={true} />}
          {(companySize === 'medium' || companySize === 'big') && <AsideMenuItem to='/modulars/dept/contract-admin' title='Contract Admin' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/dept/cash-advance' title='Cash Advance' hasBullet={true} />}
          {(companySize === 'medium' || companySize === 'big') && <AsideMenuItem to='/modulars/dept/budgeting-cost' title='Budgeting & Cost' hasBullet={true} />}
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/modulars/service'
          title='Service'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/communication/com004.svg'
        >
          {companySize === 'big' && <AsideMenuItem to='/modulars/service/csr-management' title='CSR | SLD Management' hasBullet={true} />}
          {companySize === 'big' && <AsideMenuItem to='/modulars/service/office-building-service' title='Office & Building' hasBullet={true} />}
          <AsideMenuItem to='/modulars/service/visitor-management' title='Visitor Management' hasBullet={true} />
          {companySize === 'big' && <AsideMenuItem to='/modulars/service/town-lodging' title='Town | Lodging' hasBullet={true} />}
          <AsideMenuItem to='/modulars/service/transport-management' title='Transport Management' hasBullet={true} />
        </AsideMenuItemWithSub>
      </>}

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Controls</span>
        </div>
      </div>
      <AsideMenuItem to={(currentUser?.role === "administrator") ? '/controls/account-settings' : "/error/404"} title='Account Settings' icon='/media/icons/duotune/communication/com006.svg' />
      <AsideMenuItem to='/controls/command-center' title='Command Center' icon='/media/icons/duotune/communication/com012.svg' />
      <AsideMenuItem to={currentUser?.['employees.branch_detail.com_type'] === 'HO' ? '/controls/control-file' : "/error/404"} title='Control File' icon='/media/icons/duotune/general/gen019.svg' />
    </>
  )
}