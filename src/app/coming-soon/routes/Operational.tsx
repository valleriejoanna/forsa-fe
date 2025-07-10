import { FC } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ComingSoon } from "../../components";

const prodPerformanceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Production',
        path: '/ops/production/production-tracking',
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

const opPerformanceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Operation',
        path: '/ops/operation/operation-performance',
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

const workPerformanceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Workforce',
        path: '/ops/workforce/workforce-performance',
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

const inventPerformanceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Inventory',
        path: '/ops/inventory/inventory-availability',
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

const OperationalPage: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='production/production-tracking'
                element={
                <>
                    <PageTitle breadcrumbs={prodPerformanceBreadcrumbs}>Production Tracking</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='production/production-performance'
                element={
                <>
                    <PageTitle breadcrumbs={prodPerformanceBreadcrumbs}>Production Performance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='operation/dispatch-breakdown'
                element={
                    <>
                    <PageTitle breadcrumbs={opPerformanceBreadcrumbs}>Dispatch | Breakdown</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='operation/operation-performance'
                element={
                <>
                    <PageTitle breadcrumbs={opPerformanceBreadcrumbs}>Operation Performance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='operation/maintenance-schedule'
                element={
                <>
                    <PageTitle breadcrumbs={opPerformanceBreadcrumbs}>Maintenance Schedule</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='operation/maintenance-reliability'
                element={
                <>
                    <PageTitle breadcrumbs={opPerformanceBreadcrumbs}>Maintenance Reliability</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='workforce/workforce-performance'
                element={
                <>
                    <PageTitle breadcrumbs={workPerformanceBreadcrumbs}>Workforce Performance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='workforce/plan-schedule'
                element={
                <>
                    <PageTitle breadcrumbs={workPerformanceBreadcrumbs}>Plan & Schedule</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='workforce/workforce-facilities'
                element={
                <>
                    <PageTitle breadcrumbs={workPerformanceBreadcrumbs}>Workforce Facilities</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='inventory/inventory-availability'
                element={
                <>
                    <PageTitle breadcrumbs={inventPerformanceBreadcrumbs}>Inventory Availability</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='inventory/inventory-forecast'
                element={
                <>
                    <PageTitle breadcrumbs={inventPerformanceBreadcrumbs}>Inventory Forecast</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/ops/production/production-tracking' />} />
        </Routes>
    </>
)
}

export default OperationalPage