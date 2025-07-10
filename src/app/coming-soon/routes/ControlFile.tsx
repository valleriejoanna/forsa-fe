import {FC} from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { ComingSoon } from "../../components";

const financeBreadcrumbs: Array<PageLink> = [
    {
        title: 'Finance',
        path: '/control-file/finance/account-code',
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

const ControlFileWrapper: FC = () => {
return (
    <>
        <Routes>
            <Route element={<Outlet />}>
            <Route
                path='finance/account-code'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Account Code</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/beginning-balance'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Beginning Balance</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/payment-type'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Payment Type</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            <Route
                path='finance/mstr-bank'
                element={
                <>
                    <PageTitle breadcrumbs={financeBreadcrumbs}>Master Bank</PageTitle>
                    <ComingSoon />
                </>
                }
            />
            </Route>
            <Route index element={<Navigate to='/control-file/finance/account-code' />} />
        </Routes>
    </>
)
}

export default ControlFileWrapper