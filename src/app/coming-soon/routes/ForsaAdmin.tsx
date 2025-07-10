import {FC} from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ComingSoon } from "../../components";

const adminBreadcrumbs: Array<PageLink> = [
  {
      title: 'Admin',
      path: '/apps/admin/office-service',
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

const ForsaAdminPage: FC = () => {
  return (
      <>
          <Routes>
              <Route element={<Outlet />}>
              <Route
                  path='office-service'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>Office Service</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              <Route
                  path='corporate-culture'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>Corporate Culture</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              <Route
                  path='ecollaboration'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>E-Collaboration</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              <Route
                  path='it-management'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>IT Management</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              <Route
                  path='safety-management'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>Safety Management</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              <Route
                  path='security-management'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>Security Management</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              <Route
                  path='industrial-relations'
                  element={
                  <>
                      <PageTitle breadcrumbs={adminBreadcrumbs}>Industrial Relations</PageTitle>
                      <ComingSoon />
                  </>
                  }
              />
              </Route>
              <Route index element={<Navigate to='/apps/admin/office-service' />} />
          </Routes>
      </>
  )
}

export default ForsaAdminPage