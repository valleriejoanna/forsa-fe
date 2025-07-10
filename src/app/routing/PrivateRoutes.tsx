import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import { useAuth } from '../modules/auth'
import DashboardPage from '../coming-soon/routes/Dashboard'
import OperationalPage from '../coming-soon/routes/Operational'
import AccountAppsPage from '../coming-soon/routes/Forsa'
import ForsaAdminPage from '../coming-soon/routes/ForsaAdmin'
import ControlsPage from '../coming-soon/routes/Controls'
import ControlFileWrapper from '../coming-soon/routes/ControlFile'
import ModularsWrapper from '../coming-soon/routes/Modulars'
import EssPage from '../coming-soon/routes/Ess'
import DssPage from '../coming-soon/routes/Dss'

const PrivateRoutes = () => {
  const ControlFile = lazy(() => import('../../_metronic/layout/components/ControlFile'))
  const InvoiceAdminPage = lazy(() => import('../modules/finance/fin-invoice-admin/InvoiceAdminPage'))
  const IssuesRequestPage = lazy(() => import('../modules/scm/scm-issue-request/IssueRequestPage'))
  const WorkJobOrderPage = lazy(() => import('../modules/operations/ops-work-job-order/WorkJobOrderPage'))
  const JobRequestPage = lazy(() => import('../modules/operations/ops-job-request/JobRequestPage'))
  const AssetManagementPage = lazy(() => import('../modules/operations/ops-asset-mgt/AssetMgtPage'))
  const ReadingFuelMgtPage = lazy(() => import('../modules/operations/ops-meter-reading/ReadingFuelMgtPage'))
  const PreventiveMaintenancePage = lazy(() => import('../modules/operations/ops-preventive-maintenance/PreventiveMaintenancePage'))
  const BreakdownControlPage = lazy(() => import('../modules/operations/ops-breakdown-control/BreakdownControlPage'))
  const EmployeeAdminPage = lazy(() => import('../modules/hr/hr-employee-admin/EmployeeAdminPage'))
  const CataloguePage = lazy(() => import('../modules/scm/scm-catalogue/CataloguePage'))
  const PurchaseMgtPage = lazy(() => import('../modules/scm/scm-purchase-management/PurchaseMgtPage'))
  const SalesMgtPage = lazy(() => import('../modules/scm/mod-sales-management/SalesMgtPage'))
  const ReplenishmentPage = lazy(() => import('../modules/scm/scm-replenishment-pr/ReplenishmentPage'))
  const InventoryStockPage = lazy(() => import('../modules/scm/scm-inventory-stock/InventoryStockPage'))
  const CompanyPage = lazy(() => import('../modules/cf/cf-mas-company/CompanyPage'))
  const BranchPage = lazy(() => import('../modules/cf/cf-mas-branch/BranchPage'))
  const ContractorPage = lazy(() => import('../modules/cf/cf-mas-contractor/ContractorPage'))
  const DepartmentPage = lazy(() => import('../modules/cf/cf-mas-department/DepartmentPage'))
  const CurrencyPage = lazy(() => import('../modules/cf/cf-mas-currency/CurrencyPage'))
  const LocationPage = lazy(() => import('../modules/cf/cf-mas-location/LocationPage'))
  const LocWorkPage = lazy(() => import('../modules/cf/cf-mas-loc-work/LocWorkPage'))
  const LocOpsPage = lazy(() => import('../modules/cf/cf-mas-loc-ops/LocOpsPage'))
  const CostCenterPage = lazy(() => import('../modules/cf/cf-mas-cost-center/CostCenterPage'))
  const PriorityPage = lazy(() => import('../modules/cf/cf-mas-priority/PriorityPage'))
  const AccountPage = lazy(() => import('../modules/cf/cf-mas-account/AccountPage'))
  const ColourPage = lazy(() => import('../modules/cf/cf-mas-colour/ColourPage'))
  const OfficerPage = lazy(() => import('../modules/cf/cf-mas-officer/OfficerPage'))
  const OfficerTypePage = lazy(() => import('../modules/cf/cf-mas-officer-type/OfficerTypePage'))
  const TaxPercentagePage = lazy(() => import('../modules/cf/cf-fin-tax-percentage/TaxPercentagePage'))
  const AssetGroupPage = lazy(() => import('../modules/cf/cf-ops-asset-group/AssetGroupPage'))
  const AssetModelPage = lazy(() => import('../modules/cf/cf-ops-asset-model/AssetModelPage'))
  const ReadingTypePage = lazy(() => import('../modules/cf/cf-ops-reading-type/ReadingTypePage'))
  const FuelTypePage = lazy(() => import('../modules/cf/cf-ops-fuel-type/FuelTypePage'))
  const ReadingStockcodePage = lazy(() => import('../modules/cf/cf-ops-reading-stockcode/ReadingStockcodePage'))
  const JobTypePage = lazy(() => import('../modules/cf/cf-ops-job-type/JobTypePage'))
  const JobStatusPage = lazy(() => import('../modules/cf/cf-ops-job-status/JobStatusPage'))
  const JobCodePage = lazy(() => import('../modules/cf/cf-ops-job-code/JobCodePage'))
  const InspectionQnAPage = lazy(() => import('../modules/cf/cf-ops-inspection-qna/InspectionQnAPage'))
  const ResourceTypePage = lazy(() => import('../modules/cf/cf-ops-resource-type/ResourceTypePage'))
  const JobOverheadPage = lazy(() => import('../modules/cf/cf-ops-job-overheads/JobOverheadPage'))
  const JobAuxiliaryPage = lazy(() => import('../modules/cf/cf-ops-job-auxiliary/JobAuxiliaryPage'))
  const JobMajorPage = lazy(() => import('../modules/cf/cf-ops-job-majors/JobMajorPage'))
  const JobMinorPage = lazy(() => import('../modules/cf/cf-ops-job-minors/JobMinorPage'))
  const ShiftTypePage = lazy(() => import('../modules/cf/cf-ops-breakdown-shift-type/ShiftTypePage'))
  const ShiftPage = lazy(() => import('../modules/cf/cf-ops-breakdown-shift/ShiftPage'))
  const BreakdownStatusPage = lazy(() => import('../modules/cf/cf-ops-breakdown-status/BreakdownStatusPage'))
  const BreakdownCategoryPage = lazy(() => import('../modules/cf/cf-ops-breakdown-category/BreakdownCategoryPage'))
  const ResponsiblePage = lazy(() => import('../modules/cf/cf-ops-breakdown-responsible/ResponsiblePage'))
  const TimemapPage = lazy(() => import('../modules/cf/cf-ops-breakdown-timemap/TimemapPage'))
  const EmployeeClassPage = lazy(() => import('../modules/cf/cf-hr-employee-class/EmployeeClassPage'))
  const EmployeeTypePage = lazy(() => import('../modules/cf/cf-hr-employee-type/EmployeeTypePage'))
  const EmploymentStatusPage = lazy(() => import('../modules/cf/cf-hr-employment-status/EmploymentStatusPage'))
  const EmploymentTypePage = lazy(() => import('../modules/cf/cf-hr-employment-type/EmploymentTypePage'))
  const MaritalBenefitPage = lazy(() => import('../modules/cf/cf-hr-marital-benefit/MaritalBenefitPage'))
  const LeaveTypePage = lazy(() => import('../modules/cf/cf-hr-leave-type/LeaveTypePage'))
  const WorkDayPage = lazy(() => import('../modules/cf/cf-hr-work-day/WorkDayPage'))
  const WorkGroupPage = lazy(() => import('../modules/cf/cf-hr-work-group/WorkGroupPage'))
  const WorkFunctionPage = lazy(() => import('../modules/cf/cf-hr-work-function/WorkFunctionPage'))
  const LevelPage = lazy(() => import('../modules/cf/cf-hr-level/LevelPage'))
  const GradePage = lazy(() => import('../modules/cf/cf-hr-grade/GradePage'))
  const PostTitlePage = lazy(() => import('../modules/cf/cf-hr-post-title/PostTitlePage'))
  const EducationPage = lazy(() => import('../modules/cf/cf-hr-education/EducationPage'))
  const FieldStudyPage = lazy(() => import('../modules/cf/cf-hr-field-study/FieldStudyPage'))
  const YearExpPage = lazy(() => import('../modules/cf/cf-hr-year-exp/YearExpPage'))
  const AgePage = lazy(() => import('../modules/cf/cf-hr-age/AgePage'))
  const EnglishPage = lazy(() => import('../modules/cf/cf-hr-english/EnglishPage'))
  const StockGroupPage = lazy(() => import('../modules/cf/cf-scm-stock-group/StockGroupPage'))
  const StoragePage = lazy(() => import('../modules/cf/cf-scm-storage/StoragePage'))
  const StockcodeRegPage = lazy(() => import('../modules/cf/cf-scm-stockcode-reg/StockcodeRegPage'))
  const StockcodePage = lazy(() => import('../modules/cf/cf-scm-stockcode/StockcodePage'))
  const StockClassPage = lazy(() => import('../modules/cf/cf-scm-stock-class/StockClassPage'))
  const SupplierPage = lazy(() => import('../modules/cf/cf-scm-supplier/SupplierPage'))
  const CustomerPage = lazy(() => import('../modules/cf/cf-scm-customer/CustomerPage'))
  const UnitOfMaterialsPage = lazy(() => import('../modules/cf/cf-scm-uom/UnitOfMaterialsPage'))
  const FreightPage = lazy(() => import('../modules/cf/cf-scm-freight/FreightPage'))
  const BinLocationPage = lazy(() => import('../modules/cf/cf-scm-bin-location/BinLocationPage'))
  const CustomerPricePage = lazy(() => import('../modules/cf/cf-scm-customer-price/CustomerPricePage'))
  const ManufacturePage = lazy(() => import('../modules/cf/cf-scm-manufacture/ManufacturePage'))
  const SupplierStockcodePage = lazy(() => import('../modules/cf/cf-scm-supplier-stockcode/SupplierStockcodePage'))
  const BeginningStockPage = lazy(() => import('../modules/cf/cf-scm-beginning-stock/BeginningStockPage'))

  const {currentUser} = useAuth()

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registration */}
        <Route path='auth/*' element={<Navigate to='/dashboard/overview' />} />
        {/* OVERVIEW */}
        <Route
          path='dashboard/*'
          element={
            <SuspensedView>
              <DashboardPage />
            </SuspensedView>
          }
        />

        {/* OPS */}
        {currentUser?.role !== 'portal' &&
        <Route
          path='ops/*'
          element={
            <SuspensedView>
              <OperationalPage />
            </SuspensedView>
          }
        />}

        {/* ESS */}
        {currentUser?.role !== 'portal' &&
        <Route
          path='ess/*'
          element={
            <SuspensedView>
              <EssPage />
            </SuspensedView>
          }
        />}
       
        {/* DSS */}
        {currentUser?.role !== 'portal' &&
        <Route
          path='dss/*'
          element={
            <SuspensedView>
              <DssPage />
            </SuspensedView>
          }
        />}

        {/* APPS */}
        {(currentUser?.role === 'fin_manager' || currentUser?.role === 'fin_transaction_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/*'
          element={
            <SuspensedView>
              <AccountAppsPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'fin_manager' || currentUser?.role === 'fin_invoice_admin_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/finance/invoice-admin/*'
          element={
            <SuspensedView>
              <InvoiceAdminPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role !== 'portal' &&
        <Route
          path='apps/admin/*'
          element={
            <SuspensedView>
              <ForsaAdminPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'ops_manager' || currentUser?.role === 'ops_work_job_order_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/operations/work-job-order/*'
          element={
            <SuspensedView>
              <WorkJobOrderPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'ops_manager' || currentUser?.role === 'ops_job_request_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/operations/job-request/*'
          element={
            <SuspensedView>
              <JobRequestPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'ops_manager' || currentUser?.role === 'ops_asset_mgt_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/operations/asset-management/*'
          element={
            <SuspensedView>
              <AssetManagementPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'ops_manager' || currentUser?.role === 'ops_reading_fuel_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/operations/reading-fuel/*'
          element={
            <SuspensedView>
              <ReadingFuelMgtPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'ops_manager' || currentUser?.role === 'ops_pm_system_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/operations/pm-system/*'
          element={
            <SuspensedView>
              <PreventiveMaintenancePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'ops_manager' || currentUser?.role === 'ops_breakdown_control_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/operations/breakdown-control/*'
          element={
            <SuspensedView>
              <BreakdownControlPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'hr_manager' || currentUser?.role === 'hr_employee_admin_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/resource/admin/*'
          element={
            <SuspensedView>
              <EmployeeAdminPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'scm_manager' || currentUser?.role === 'scm_replenish_pr_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/supply/replenish-pr/*'
          element={
            <SuspensedView>
              <ReplenishmentPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'scm_manager' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/supply/catalogue/*'
          element={
            <SuspensedView>
              <CataloguePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'scm_manager' || currentUser?.role === 'scm_purchasing_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/supply/purchase-management/*'
          element={
            <SuspensedView>
              <PurchaseMgtPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'scm_manager' || currentUser?.role === 'scm_issue_request_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/supply/issues-request/*'
          element={
            <SuspensedView>
              <IssuesRequestPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role === 'scm_manager' || currentUser?.role === 'scm_inventory_clerk' || currentUser?.role === 'administrator') &&
        <Route
          path='apps/supply/inventory/*'
          element={
            <SuspensedView>
              <InventoryStockPage />
            </SuspensedView>
          }
        />}

        {/* MODULARS */}
        {currentUser?.role !== 'portal' &&
        <>
          <Route
            path='modulars/*'
            element={
              <SuspensedView>
                <ModularsWrapper />
              </SuspensedView>
            }
          />
          <Route
            path='modulars/dept/sales-management/*'
            element={
              <SuspensedView>
                <SalesMgtPage />
              </SuspensedView>
            }
          />
        </>}

        {/* CONTROLS */}
        {currentUser?.role !== 'portal' &&
        <>
          <Route
            path='controls/*'
            element={
              <SuspensedView>
                <ControlsPage />
              </SuspensedView>
            }
          />
          <Route
            path='controls/control-file'
            element={
              <SuspensedView>
                <ControlFile />
              </SuspensedView>
            }
          />
        </>
        }
        {/* Master */}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/company/*'
          element={
            <SuspensedView>
              <CompanyPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/branch/*'
          element={
            <SuspensedView>
              <BranchPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/contractor/*'
          element={
            <SuspensedView>
              <ContractorPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/department/*'
          element={
            <SuspensedView>
              <DepartmentPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/currency/*'
          element={
            <SuspensedView>
              <CurrencyPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/location/*'
          element={
            <SuspensedView>
              <LocationPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/cost-center/*'
          element={
            <SuspensedView>
              <CostCenterPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/acc/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/loc-work/*'
          element={
            <SuspensedView>
              <LocWorkPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/loc-ops/*'
          element={
            <SuspensedView>
              <LocOpsPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/priority/*'
          element={
            <SuspensedView>
              <PriorityPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/colour/*'
          element={
            <SuspensedView>
              <ColourPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/officer/*'
          element={
            <SuspensedView>
              <OfficerPage />
            </SuspensedView>
          }
        />}
        {currentUser?.role === 'administrator' &&
        <Route
          path='control-file/master/offcr-type/*'
          element={
            <SuspensedView>
              <OfficerTypePage />
            </SuspensedView>
          }
        />}
        {/* Finance */}
        {(currentUser?.role?.includes('fin_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/finance/tax-percentage/*'
          element={
            <SuspensedView>
              <TaxPercentagePage />
            </SuspensedView>
          }
        />}
        {/* Operations */}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/asset-model/*'
          element={
            <SuspensedView>
              <AssetModelPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/asset-group/*'
          element={
            <SuspensedView>
              <AssetGroupPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/meter-readingtype/*'
          element={
            <SuspensedView>
              <ReadingTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/fuel-type/*'
          element={
            <SuspensedView>
              <FuelTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/reading-fuel-stockcode/*'
          element={
            <SuspensedView>
              <ReadingStockcodePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-type/*'
          element={
            <SuspensedView>
              <JobTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-status/*'
          element={
            <SuspensedView>
              <JobStatusPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-code/*'
          element={
            <SuspensedView>
              <JobCodePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/resource-type/*'
          element={
            <SuspensedView>
              <ResourceTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-overhead/*'
          element={
            <SuspensedView>
              <JobOverheadPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-auxiliary/*'
          element={
            <SuspensedView>
              <JobAuxiliaryPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-major/*'
          element={
            <SuspensedView>
              <JobMajorPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/job-minor/*'
          element={
            <SuspensedView>
              <JobMinorPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/shift-type/*'
          element={
            <SuspensedView>
              <ShiftTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/shift/*'
          element={
            <SuspensedView>
              <ShiftPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/breakdown-status/*'
          element={
            <SuspensedView>
              <BreakdownStatusPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/breakdown-category/*'
          element={
            <SuspensedView>
              <BreakdownCategoryPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/responsible/*'
          element={
            <SuspensedView>
              <ResponsiblePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/timemap/*'
          element={
            <SuspensedView>
              <TimemapPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes('ops_') || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/operations/inspection-qna/*'
          element={
            <SuspensedView>
              <InspectionQnAPage />
            </SuspensedView>
          }
        />}
        {/* Supply */}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/stock-group/*'
          element={
            <SuspensedView>
              <StockGroupPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/storage/*'
          element={
            <SuspensedView>
              <StoragePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/stockcode/*'
          element={
            <SuspensedView>
              <StockcodePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/stock-class/*'
          element={
            <SuspensedView>
              <StockClassPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/stock-reg/*'
          element={
            <SuspensedView>
              <StockcodeRegPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/supplier-stockcode/*'
          element={
            <SuspensedView>
              <SupplierStockcodePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/beginning-stock/*'
          element={
            <SuspensedView>
              <BeginningStockPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/supplier/*'
          element={
            <SuspensedView>
              <SupplierPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/customer/*'
          element={
            <SuspensedView>
              <CustomerPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/unit-of-materials/*'
          element={
            <SuspensedView>
              <UnitOfMaterialsPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/freight/*'
          element={
            <SuspensedView>
              <FreightPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/bin-location/*'
          element={
            <SuspensedView>
              <BinLocationPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/cstmr-price/*'
          element={
            <SuspensedView>
              <CustomerPricePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("scm_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/supply/manufacture/*'
          element={
            <SuspensedView>
              <ManufacturePage />
            </SuspensedView>
          }
        />}
        {/* Resource */}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/employee-type/*'
          element={
            <SuspensedView>
              <EmployeeTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/employee-class/*'
          element={
            <SuspensedView>
              <EmployeeClassPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/employment-type/*'
          element={
            <SuspensedView>
              <EmploymentTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/marital-benefit/*'
          element={
            <SuspensedView>
              <MaritalBenefitPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/leave-type/*'
          element={
            <SuspensedView>
              <LeaveTypePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/work-day/*'
          element={
            <SuspensedView>
              <WorkDayPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/work-group/*'
          element={
            <SuspensedView>
              <WorkGroupPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/work-function/*'
          element={
            <SuspensedView>
              <WorkFunctionPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/level/*'
          element={
            <SuspensedView>
              <LevelPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/grade/*'
          element={
            <SuspensedView>
              <GradePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/post-title/*'
          element={
            <SuspensedView>
              <PostTitlePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/education/*'
          element={
            <SuspensedView>
              <EducationPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/field-study/*'
          element={
            <SuspensedView>
              <FieldStudyPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/year-exp/*'
          element={
            <SuspensedView>
              <YearExpPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/age/*'
          element={
            <SuspensedView>
              <AgePage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/english/*'
          element={
            <SuspensedView>
              <EnglishPage />
            </SuspensedView>
          }
        />}
        {(currentUser?.role?.includes("hr_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/resource/employment-status/*'
          element={
            <SuspensedView>
              <EmploymentStatusPage />
            </SuspensedView>
          }
        />}
        {/* Finance */}
        {(currentUser?.role?.includes("fin_") || currentUser?.role === 'administrator') &&
        <Route
          path='control-file/*'
          element={
            <SuspensedView>
              <ControlFileWrapper />
            </SuspensedView>
          }
        />}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}