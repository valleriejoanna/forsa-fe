import { FC } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ComingSoon } from "../../components";
import TransactionWrapper from "../ui/transaction/Transaction";
import PaymentTransactionTable from "../ui/transaction/PaymentTransactionTable";

const financeBreadcrumbs: Array<PageLink> = [
    {
        title: 'Finance',
        path: '/apps/finance/cash-book',
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

const operationsBreadcrumbs: Array<PageLink> = [
    {
        title: 'Operations',
        path: '/apps/operations/accident-control',
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

const resourceBreadcrumbs: Array<PageLink> = [
    {
        title: 'Resource',
        path: '/apps/resource/plan-recruitment',
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

const supplyBreadcrumbs: Array<PageLink> = [
    {
        title: 'Supply',
        path: '/apps/supply/catalogue',
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

const ForsaPage: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='finance/accounts-master'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Accounts Master</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                element={
                    <>
                        <TransactionWrapper />
                        <Outlet />
                    </>
                }
            >
                <Route
                    path='finance/transactions'
                    element={
                    <>
                        <PageTitle breadcrumbs={financeBreadcrumbs}>Transactions</PageTitle>
                        <PaymentTransactionTable />
                    </>
                    }
                />
            </Route>
            <Route
                path='finance/accounts-payable'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Accounts Payable</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/accounts-receivable'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Accounts Receivable</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/fixed-asset'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Fixed Asset</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/payroll-system'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Payroll System</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/ledger-report'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Ledger | Report</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='operations/accident-control'
                element={
                <>
                    <PageTitle breadcrumbs={operationsBreadcrumbs}>Accident Control</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='resource/plan-recruitment'
                element={
                <>
                    <PageTitle breadcrumbs={resourceBreadcrumbs}>Plan | Recruitment</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='resource/training-system'
                element={
                <>
                    <PageTitle breadcrumbs={resourceBreadcrumbs}>Training System</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='resource/appraisal-career'
                element={
                <>
                    <PageTitle breadcrumbs={resourceBreadcrumbs}>Appraisal & Career</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='resource/time-attendance'
                element={
                <>
                    <PageTitle breadcrumbs={resourceBreadcrumbs}>Time & Attendance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='resource/leave-travel'
                element={
                <>
                    <PageTitle breadcrumbs={resourceBreadcrumbs}>Leave & Travel</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='resource/medical-insurance'
                element={
                <>
                    <PageTitle breadcrumbs={resourceBreadcrumbs}>Medical & Insurance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='supply/catalogue'
                element={
                <>
                    <PageTitle breadcrumbs={supplyBreadcrumbs}>Catalogue</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='supply/issues-request'
                element={
                <>
                    <PageTitle breadcrumbs={supplyBreadcrumbs}>Issues | Request</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='supply/expediting'
                element={
                <>
                    <PageTitle breadcrumbs={supplyBreadcrumbs}>Expediting</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='supply/consignment'
                element={
                <>
                    <PageTitle breadcrumbs={supplyBreadcrumbs}>Consignment</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/apps/finance/cash-book' />} />
        </Routes>
    </>
)
}

export default ForsaPage