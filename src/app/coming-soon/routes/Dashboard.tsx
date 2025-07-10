import {FC} from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { ComingSoon } from "../../components";
import { DashboardWrapper } from "../ui/DashboardWrapper";
import { ComView } from "../../modules/cf/components/com-view/ComView";

const dashboardBreadcrumbs: Array<PageLink> = [
    {
        title: 'Dashboard',
        path: '/dashboard/overview',
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

const DashboardPage: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='overview'
                element={
                <>
                    <PageTitle breadcrumbs={dashboardBreadcrumbs}>Overview</PageTitle>
                    <DashboardWrapper />
                </>
                }
            />
            <Route
                path='online-services'
                element={
                <>
                    <PageTitle breadcrumbs={dashboardBreadcrumbs}>Online Services</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='company-profile'
                element={
                <>
                    <PageTitle breadcrumbs={dashboardBreadcrumbs}>Company Profile</PageTitle>
                    <ComView comType='company' isComProfile={true} />
                </>
                }
            />
            <Route
                path='organization-chart'
                element={
                <>
                    <PageTitle breadcrumbs={dashboardBreadcrumbs}>Organization Chart</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='policy-procedures'
                element={
                <>
                    <PageTitle breadcrumbs={dashboardBreadcrumbs}>Policy & Procedures</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='branding-marketing'
                element={
                <>
                    <PageTitle breadcrumbs={dashboardBreadcrumbs}>Branding & Marketing</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/dashboard/overview' />} />
        </Routes>
    </>
)
}

export default DashboardPage