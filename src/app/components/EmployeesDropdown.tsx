import { Fragment } from 'react'
import { EmployeeRegisterData } from '../modules/hr/hr-employee-admin/core/models'

const EmployeesDropdown = (lable:string, employees: [], selectedBranch: string ) => {
  return (
  <Fragment>
     <option value=''>{lable}</option>
        {
            employees?.map((item: EmployeeRegisterData, index: number) => (
            item.branch_code === selectedBranch &&
            <option key={index} value={item?.id_number}>{item?.first_name} {item?.last_name}</option>
        ))
        }
  </Fragment>
  )
}

export default EmployeesDropdown