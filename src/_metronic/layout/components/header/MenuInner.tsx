import {useContext} from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useAuth} from '../../../../app/modules/auth'
import { MegaMenu } from './MegaMenu'
import { OpsMegaMenu } from './OpsMegaMenu'
import { ModularsMegaMenu } from './ModularsMegaMenu'
import { EssMegaMenu } from './EssMegaMenu'
import { DssMegaMenu } from './DssMegaMenu'
import CompanySizeContext from './CompanySizeContext'

export function MenuInner() {
  const {currentUser} = useAuth()
  const { companySize } = useContext(CompanySizeContext);

  return (
    <>
      <MenuInnerWithSub
        isMega={true}
        title='Dashboard'
        to='/dashboard'
        menuPlacement='bottom-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        <MegaMenu />
      </MenuInnerWithSub>
      
      {(companySize === 'big' || companySize === 'medium') && <>
        <MenuInnerWithSub
          isMedMega={true}
          title='Ops'
          to='/ops'
          menuPlacement='bottom-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <OpsMegaMenu />
        </MenuInnerWithSub>

        <MenuInnerWithSub 
          isMedMega={true}
          title='ESS'
          to='/ess'
          menuPlacement='bottom-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <EssMegaMenu />
        </MenuInnerWithSub>

        <MenuInnerWithSub 
          isMedMega={true}
          title='DSS'
          to='/dss'
          menuPlacement='bottom-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <DssMegaMenu />
        </MenuInnerWithSub>
      </>}

      <MenuInnerWithSub title='FORSA' to='/apps' menuPlacement='bottom-start' menuTrigger={`{default:'click', lg: 'hover'}`}>
        {/* FINANCE */}
        <MenuInnerWithSub
          title='Finance'
          to='/apps/finance'
          icon='/media/icons/duotune/finance/fin010.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/accounts-master' : "/error/404"} title='Accounts Master' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager" || currentUser?.role === 'fin_transaction_clerk') ? '/apps/finance/transactions' : "/error/404"} title='Transactions' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/accounts-payable' : "/error/404"} title='Accounts Payable' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/accounts-receivable' : "/error/404"} title='Accounts Receivable' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager" || currentUser?.role === 'fin_invoice_admin_clerk') ? '/apps/finance/invoice-admin/view' : "/error/404"} title='Invoice Admin' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/fixed-asset' : "/error/404"} title='Fixed Asset' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/payroll-system' : "/error/404"} title='Payroll System' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "fin_manager") ? '/apps/finance/ledger-report' : "/error/404"} title='Ledger | Report' hasBullet={true} />
        </MenuInnerWithSub>
        
        {/* OPERATIONS */}
        <MenuInnerWithSub
          title='Operations'
          to='/apps/operations'
          icon='/media/icons/duotune/abstract/abs041.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_work_job_order_clerk") ? '/apps/operations/work-job-order/overview' : "/error/404"} title='Work | Job Order' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_job_request_clerk") ? '/apps/operations/job-request/overview' : "/error/404"} title='Job Request' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_asset_mgt_clerk") ? '/apps/operations/asset-management/asset-register' : "/error/404"} title='Asset Management' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_reading_fuel_clerk") ? '/apps/operations/reading-fuel/view' : "/error/404"} title='Reading | Fuel' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_pm_system_clerk") ? '/apps/operations/pm-system/plan' : "/error/404"} title='PM System' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager" || currentUser?.role === "ops_breakdown_control_clerk") ? '/apps/operations/breakdown-control/overview' : "/error/404"} title='Breakdown Control' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "ops_manager") ? '/apps/operations/accident-control' : "/error/404"} title='Accident Control' hasBullet={true} />
        </MenuInnerWithSub>

        {/* RESOURCE */}
        <MenuInnerWithSub
          title='Resource'
          to='/apps/resource'
          icon='/media/icons/duotune/communication/com005.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/plan-recruitment' : "/error/404"} title='Plan | Recruitment' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager" || currentUser?.role === "hr_employee_admin_clerk") ? '/apps/resource/admin/employee-register' : "/error/404"} title='Employee Admin' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/training-system' : "/error/404"} title='Training System' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/appraisal-career' : "/error/404"} title='Appraisal & Career' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/time-attendance' : "/error/404"} title='Time & Attendance' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/leave-travel' : "/error/404"} title='Leave & Travel' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "hr_manager") ? '/apps/resource/medical-insurance' : "/error/404"} title='Medical & Insurance' hasBullet={true} />
        </MenuInnerWithSub>

        {/* SUPPLY */}
        <MenuInnerWithSub
          title='Supply'
          to='/apps/supply'
          icon='/media/icons/duotune/general/gen017.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager") ? '/apps/supply/catalogue/overview' : "/error/404"} title='Catalogue' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_replenish_pr_clerk") ? '/apps/supply/replenish-pr/view' : "/error/404"} title='Replenish | PR' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_purchasing_clerk") ? '/apps/supply/purchase-management/view' : "/error/404"} title='Purchasing' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_issue_request_clerk") ? '/apps/supply/issues-request/material-issue' : "/error/404"} title='Issue | Request' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager") ? '/apps/supply/expediting' : "/error/404"} title='Expediting' hasBullet={true} />
          <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager" || currentUser?.role === "scm_inventory_clerk") ? '/apps/supply/inventory/view' : "/error/404"} title='Inventory' hasBullet={true} />
          {companySize === 'big' && <MenuItem to={(currentUser?.role === "administrator" || currentUser?.role === "scm_manager") ? '/apps/supply/consignment' : "/error/404"} title='Consignment' hasBullet={true} />}
        </MenuInnerWithSub>

        {/* ADMIN */}
        <MenuInnerWithSub
          title='Admin'
          to='/apps/admin'
          icon='/media/icons/duotune/general/gen004.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/admin/office-service' title='Office Service' hasBullet={true} />
          <MenuItem to='/apps/admin/corporate-culture' title='Corporate Culture' hasBullet={true} />
          <MenuItem to='/apps/admin/ecollaboration' title='E-Collaboration' hasBullet={true} />
          <MenuItem to='/apps/admin/it-management' title='IT Management' hasBullet={true} />
          <MenuItem to='/apps/admin/safety-management' title='Safety Management' hasBullet={true} />
          <MenuItem to='/apps/admin/security-management' title='Security Management' hasBullet={true} />
          <MenuItem to='/apps/admin/industrial-relations' title='Industrial Relations' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      {(companySize === 'big' || companySize === 'medium') && <MenuInnerWithSub
        isModularsMega={true}
        title='Modulars'
        to='/modulars'
        menuPlacement='bottom-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        <ModularsMegaMenu />
      </MenuInnerWithSub>}

      <MenuInnerWithSub title='Controls' to='/controls' menuPlacement='bottom-start' menuTrigger={`{default:'click', lg: 'hover'}`}>
        <MenuItem to={(currentUser?.role === "administrator") ? '/controls/account-settings' : "/error/404"} title='Account Settings' icon='/media/icons/duotune/communication/com006.svg' />
        <MenuItem to='/controls/command-center' title='Command Center' icon='/media/icons/duotune/communication/com012.svg' />
        <MenuItem to={currentUser?.['employees.branch_detail.com_type'] === 'HO' ? '/controls/control-file' : "/error/404"} title='Control File' icon='/media/icons/duotune/general/gen019.svg' />
      </MenuInnerWithSub>
    </>
  )
}
