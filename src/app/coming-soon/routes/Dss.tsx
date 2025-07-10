import {FC} from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ComingSoon } from "../../components";


const manpowerInfoBreadcrumbs: Array<PageLink> = [
    {
        title: 'Manpower',
        path: '/dss/manpower/manpower-summary',
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

const financeServiceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Finance',
        path: '/dss/finance/capital-expenditure',
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

const materialServiceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Material',
        path: '/dss/material/online-request',
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

const businessServiceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Service',
        path: '/dss/service/transport-control',
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

const DssPage: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='manpower/manpower-summary'
                element={
                <>
                    <PageTitle breadcrumbs={manpowerInfoBreadcrumbs}>Manpower Summary</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='manpower/personnel-details'
                element={
                <>
                    <PageTitle breadcrumbs={manpowerInfoBreadcrumbs}>Personnel Details</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='manpower/organization-chart-detail'
                element={
                <>
                    <PageTitle breadcrumbs={manpowerInfoBreadcrumbs}>Organization Chart Detail</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/capital-expenditure'
                element={
                <>
                    <PageTitle breadcrumbs={financeServiceBreadcrumbs}>Capital Expenditure</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/contract-admin'
                element={
                <>
                    <PageTitle breadcrumbs={financeServiceBreadcrumbs}>Contract Admin</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='material/online-request'
                element={
                <>
                    <PageTitle breadcrumbs={materialServiceBreadcrumbs}>Online Request</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='material/material-tracking'
                element={
                <>
                    <PageTitle breadcrumbs={materialServiceBreadcrumbs}>Material Tracking</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='material/inventory-stock'
                element={
                <>
                    <PageTitle breadcrumbs={materialServiceBreadcrumbs}>Inventory Stock</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/transport-control'
                element={
                <>
                    <PageTitle breadcrumbs={businessServiceBreadcrumbs}>Transport Control</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/visitor-control'
                element={
                <>
                    <PageTitle breadcrumbs={businessServiceBreadcrumbs}>Visitor Control</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='service/light-vehicle-portal'
                element={
                <>
                    <PageTitle breadcrumbs={businessServiceBreadcrumbs}>Light Vehicle Portal</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/dss/manpower/manpower-summary' />} />
        </Routes>
    </>
)
}

export default DssPage