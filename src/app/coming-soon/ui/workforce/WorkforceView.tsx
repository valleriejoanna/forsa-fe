import { lazy, Suspense } from "react";
import Career from "./components/Career";
import { useLocation } from "react-router-dom";

const WorkforceView = () => {
  let location: any = useLocation()
  
  const Asset = lazy(() => import('./components/Asset'))
  const Benefit = lazy(() => import('./components/Benefit'))
  const Development = lazy(() => import("./components/Appraisal"))
  const EService = lazy(() => import("./components/EService"))
  const JobInfo = lazy(() => import("../../../modules/hr/hr-employee-admin/components/JobInfo"))
  const Leave = lazy(() => import("./components/Leave"))
  const Personal = lazy(() => import("../../../modules/hr/hr-employee-admin/components/Personal"))
  const PpeUniform = lazy(() => import("./components/PpeUniform"))
  const TopCard = lazy(() => import("../../../../app/modules/hr/hr-employee-admin/components/TopCard"))

  const { 
    //personal
    id_number, last_name, first_name, middle_name, nick_name, gender, date_of_birth, point_of_birth, marital_status, ethnic, nationality,
    religion, blood_type, height, weight, address, sub_district, district, region, province, allergies, chronic_medical_history, city, country,
    
    //job info
    employee_class, employee_type, employment_type, work_function, job_title, applicant_id, position_no, approval_no, id_number_ref,
    hire_date, service_date, probation_date, point_of_hire, point_of_leave, point_of_travel, contract_no, contract_date, contract_expire,
    position_title, job_level, individual_grade, individual_level, supervisor, branch_code, emp_company, dept_code, cost_center, account_code, 
    union_code, onsite_location, onsite_address, work_location, office_code, onsite_marital, marital_benefit, work_phone, mobile, wa, email_company,
    website, termination_date, termination_by, termination_reason, 
    
     //step1 -sisa
    status, status_date, reg_by, reg_date, post_code, medication, identity_ktp, home_phone, personal_email, photo, 
     
     //step3
     paygroup, bank_account, leave_type, work_insurance, medical_insurance, tax_code, work_day, crew, last_promotion,
  } = location.state;

  function date (e: any) {
    return new Date(e).toLocaleDateString('id-ID')
  }

  const convertedDate = {
    date_of_birth: date(date_of_birth),
    hire_date: date(hire_date),
    service_date: date(service_date),
    probation_date: date(probation_date),
    contract_date: date(contract_date),
    contract_expire: date(contract_expire),
    termination_date: date(termination_date),
  }

  const data  = {
    top_card:{
      last_name, first_name, middle_name, nick_name, region, province, city, address, personal_email, website, post_code, id_number, employee_type
    },
    personal:{
      id_number, gender, date_of_birth: convertedDate.date_of_birth, point_of_birth, marital_status, ethnic, nationality, religion, blood_type,
      height, weight, address, sub_district, district, region, province, allergies, chronic_medical_history, city, country, medication,
      reg_by, reg_date, identity_ktp, home_phone, photo,
    },
    job_info:{
      details : {
        employee_class, employee_type, employment_type, work_function, job_title, applicant_id, position_no, approval_no, id_number_ref, 
        hire_date: convertedDate.hire_date, service_date: convertedDate.service_date, probation_date: convertedDate.probation_date, point_of_hire,
        point_of_leave, point_of_travel, job_level, individual_grade, individual_level, supervisor, branch_code, emp_company, dept_code, cost_center,
        account_code, union_code, onsite_location, onsite_address, work_location, office_code, onsite_marital, marital_benefit, work_phone, mobile,
        wa, email_company, website, termination_date: convertedDate.termination_date, termination_by, termination_reason, post_code, paygroup,
        bank_account, leave_type, work_insurance, medical_insurance, tax_code, work_day, crew, last_promotion, address, personal_email,
      },
      contract: {
        contract_no, status, status_date, contract_date: convertedDate.contract_date, contract_expire: convertedDate.contract_expire, position_title,
      }
    },
  }
  
  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-body pt-9 pb-0">
          <Suspense fallback={<></>}>
            <TopCard  data={data?.top_card}/>
          </Suspense>

          <div className="d-flex overflow-auto h-55px">
            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6 active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1"
                >
                  Personal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2"
                >
                  Job Info
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_3"
                >
                  Appraisal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_4"
                >
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_5"
                >
                  Benefit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_6"
                >
                  Leave
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_7"
                >
                  Asset
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_8"
                >
                  PPE Uniform
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary me-6"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_9"
                >
                  E-Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body pt-0">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1"
            role="tabpanel"
          >
            <Suspense fallback={<></>}>
              <Personal data={data?.personal} />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
            <Suspense fallback={<></>}>
              <JobInfo data={data?.job_info} />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
            <Suspense fallback={<></>}>
              <Development />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_4" role="tabpanel">
            <Career />
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
            <Suspense fallback={<></>}>
              <Benefit />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
            <Suspense fallback={<></>}>
              <Leave />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_7" role="tabpanel">
            <Suspense fallback={<></>}>
              <Asset />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_8" role="tabpanel">
            <Suspense fallback={<></>}>
              <PpeUniform />
            </Suspense>
          </div>
          <div className="tab-pane fade" id="kt_tab_pane_9" role="tabpanel">
            <Suspense fallback={<></>}>
              <EService />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export {WorkforceView}