import {FC} from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ComingSoon } from "../../components";
import { MeterReadingTable } from "../ui/meter-reading/MeterReadingTable";

const primeBreadcrumbs: Array<PageLink> = [
    {
        title: 'Prime',
        path: '/modulars/prime/production-system',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const operationBreadcrumbs: Array<PageLink> = [
    {
        title: 'Operation',
        path: '/modulars/op/lv-management',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const departmentBreadcrumbs: Array<PageLink> = [
    {
        title: 'Department',
        path: '/modulars/dept/sales-management',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const serviceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Service',
        path: '/modulars/service/safety-management',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const ModularsWrapper: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='prime/operation-management'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Operation Management</PageTitle>
                    <MeterReadingTable />
                </>
                }
            />
            <Route
                path='prime/maintenance-management'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Maintenance Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='prime/workforce-management'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Workforce Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='prime/inventory-program'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Inventory Program</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='prime/cash-cost-control'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Cash Cost Control</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='prime/facilities-management'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Facilities Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='prime/production-system'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Production System</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='prime/manufacture-system'
                element={
                <>
                    <PageTitle breadcrumbs={primeBreadcrumbs}>Manufacture System</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='op/workshop-management'
                element={
                <>
                    <PageTitle breadcrumbs={operationBreadcrumbs}>Workshop Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='op/lv-management'
                element={
                <>
                    <PageTitle breadcrumbs={operationBreadcrumbs}>LV Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='op/component-program'
                element={
                <>
                    <PageTitle breadcrumbs={operationBreadcrumbs}>Component RPL Program</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='op/consumable-control'
                element={
                <>
                    <PageTitle breadcrumbs={operationBreadcrumbs}>Consumable Control</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='op/tire-management'
                element={
                <>
                    <PageTitle breadcrumbs={operationBreadcrumbs}>Tire Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='op/tooling-management'
                element={
                <>
                    <PageTitle breadcrumbs={operationBreadcrumbs}>Tooling Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='dept/contract-admin'
                element={
                <>
                    <PageTitle breadcrumbs={departmentBreadcrumbs}>Contract Admin</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='dept/cash-advance'
                element={
                <>
                    <PageTitle breadcrumbs={departmentBreadcrumbs}>Cash Advance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='dept/budgeting-cost'
                element={
                <>
                    <PageTitle breadcrumbs={departmentBreadcrumbs}>Budgeting & Cost</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/visitor-management'
                element={
                <>
                    <PageTitle breadcrumbs={serviceBreadcrumbs}>Visitor Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/town-lodging'
                element={
                <>
                    <PageTitle breadcrumbs={serviceBreadcrumbs}>Town | Lodging</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/csr-management'
                element={
                <>
                    <PageTitle breadcrumbs={serviceBreadcrumbs}>CSR | SLD Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/office-building-service'
                element={
                <>
                    <PageTitle breadcrumbs={serviceBreadcrumbs}>Office & Building</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/transport-management'
                element={
                <>
                    <PageTitle breadcrumbs={serviceBreadcrumbs}>Transport Management</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/modulars/prime/production-system' />} />
        </Routes>
    </>
)
}

export default ModularsWrapper