import {FC} from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ComingSoon } from "../../components";


const personalInfoBreadcrumbs: Array<PageLink> = [
    {
        title: 'Personal Info',
        path: '/ess/personal-info/personal-data',
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

const devInfoBreadcrumbs: Array<PageLink> = [
    {
        title: 'Development',
        path: '/ess/development/career-development',
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

const leaveTravelBreadcrumbs: Array<PageLink> = [
    {
        title: 'Leave & Travel',
        path: '/ess/leave-travel/leave-details',
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

const attendanceDisciplineBreadcrumbs: Array<PageLink> = [
    {
        title: 'Attendance & Discipline',
        path: '/ess/attendance-discipline/fingerprint-time',
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

const compensationBenefitBreadcrumbs: Array<PageLink> = [
    {
        title: 'Compensation & Benefit',
        path: '/ess/compensation/expense-claim',
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

const EssPage: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='personal-info/personal-data'
                element={
                <>
                    <PageTitle breadcrumbs={personalInfoBreadcrumbs}>Personal Data</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='personal-info/job-information'
                element={
                <>
                    <PageTitle breadcrumbs={personalInfoBreadcrumbs}>Job Information</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='personal-info/dependent'
                element={
                <>
                    <PageTitle breadcrumbs={personalInfoBreadcrumbs}>Dependent</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='personal-info/job-facilities'
                element={
                <>
                    <PageTitle breadcrumbs={personalInfoBreadcrumbs}>Job Facilities</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='development/career-development'
                element={
                <>
                    <PageTitle breadcrumbs={devInfoBreadcrumbs}>Career Development</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='development/training-admin'
                element={
                <>
                    <PageTitle breadcrumbs={devInfoBreadcrumbs}>Training Admin</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='development/performance-appraisal'
                element={
                <>
                    <PageTitle breadcrumbs={devInfoBreadcrumbs}>Performance Appraisal</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='leave-travel/leave-details'
                element={
                <>
                    <PageTitle breadcrumbs={leaveTravelBreadcrumbs}>Leave Details</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='leave-travel/leave-roster'
                element={
                <>
                    <PageTitle breadcrumbs={leaveTravelBreadcrumbs}>Leave Roster</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='attendance-discipline/fingerprint-time'
                element={
                <>
                    <PageTitle breadcrumbs={attendanceDisciplineBreadcrumbs}>Fingerprint | Time</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='attendance-discipline/disciplinary-action'
                element={
                <>
                    <PageTitle breadcrumbs={attendanceDisciplineBreadcrumbs}>Disciplinary Action</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='compensation/expense-claim'
                element={
                <>
                    <PageTitle breadcrumbs={compensationBenefitBreadcrumbs}>Expense Claim</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='compensation/earnings-payroll'
                element={
                <>
                    <PageTitle breadcrumbs={compensationBenefitBreadcrumbs}>Earnings | Payroll</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/ess/personal-info/personal-data' />} />
        </Routes>
    </>
)
}

export default EssPage