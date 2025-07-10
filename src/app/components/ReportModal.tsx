import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { useAuth } from '../modules/auth'
import { UseReactQuery } from '../functions/reactQuery'
import { cache_costcenter, cache_departments, cache_hoandbranchprofiles } from '../constans/CachesName'
import { ComGeneralData } from '../modules/cf/functions/comModelValidation'
import { DepartmentData } from '../modules/cf/cf-mas-department/department/core/_models'
import { CostCenterData } from '../modules/cf/cf-mas-cost-center/core/_models'
import { getBranch } from '../modules/scm/scm-purchase-order/core/_requests'
import { getDepartments } from '../modules/cf/cf-mas-department/department/core/_requests'
import { getCostCenter } from '../modules/cf/cf-mas-cost-center/core/_requests'
import ViewModal from './ViewModal'

type DropdownItem = {
  [key: string]: any;
};

type Props = {
  show: boolean
  handleClose: () => void
  dropdownFilterSubjectDetails?: DropdownItem[]
  labelKey?: string
  labelKeyDesc?: string
  moduleName?: string
  navigateRoute?: string
}

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" }
];

const ReportModal = ({show, handleClose, dropdownFilterSubjectDetails, labelKey, labelKeyDesc, moduleName, navigateRoute}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(dropdownFilterSubjectDetails);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })
  const [state, setState] = useState({
    selectedPeriod: '',
    selectedBranch: '' as string | undefined,
    selectedDepartment: '',
    selectedCostCenter: '',
    selectedReport: '',
    selectedYear: '',
    selectedQuarter: '',
    selectedMonth: '',
  });
  const [isFilterDisabled, setIsFilterDisabled] = useState(true);
  let navigate = useNavigate()
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useAuth()
  
  const { data: dropdownBranch } = UseReactQuery({ func: getBranch, cacheName: cache_hoandbranchprofiles });
  const { data: dropdownDepartment } = UseReactQuery({ func: getDepartments, cacheName: cache_departments });
  const { data: dropdownCostCenter } = UseReactQuery({ func: getCostCenter, cacheName: cache_costcenter });

  const handleStateChange = (key: string, value: any) => {
    setState(prevState => ({ ...prevState, [key]: value }));
    
    if (key === 'selectedReport') {
      if (value === '') {
        setIsFilterDisabled(true);
      } else {
        setIsFilterDisabled(false);
      }
    }
  };

  // Function to generate years from startYear to endYear
  const generateYears = (startYear: number, endYear: number): number[] => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years.reverse();
  };

  const years = generateYears(2000, new Date().getFullYear());

  const isYearDisabled = state.selectedPeriod !== 'Yearly' && state.selectedPeriod !== 'Quarterly' && state.selectedPeriod !== 'Monthly';
  const isQuarterDisabled = state.selectedPeriod !== 'Quarterly';
  const isMonthDisabled = state.selectedPeriod !== 'Monthly';
  const isDateDisabled = state.selectedPeriod !== 'Daily';

  const selectionRange = {
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: any) => {
    setDateRange(ranges.selection)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (labelKey) {
      setFilteredItems(dropdownFilterSubjectDetails?.filter(item => {
        const labelValue = item[labelKey];
        return typeof labelValue === 'string' && labelValue.toLowerCase().includes(value.toLowerCase());
      }));
    } else {
      setFilteredItems([]);
    }

    if (value) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleSelectItem = (label: string) => {
    setSearchTerm(label);
    setIsDropdownOpen(false);
  };

  const isFilterSubjectDetailsDisabled = state.selectedReport === 'Summary';
  const isOtherInputDisabled = state.selectedReport === 'Details';

  const handleChangePeriod = (event: ChangeEvent<HTMLSelectElement>) => {
    handleStateChange('selectedPeriod', event.target.value)
    
    if(state.selectedReport === 'Summary' && state.selectedBranch === '') {
      setState({ ...state, selectedPeriod: event.target.value, selectedBranch: currentUser?.['employees.branch_detail.com_code'] })
    }
  }

  // Function to apply the filters
  const handleApply = () => {
    navigate(`${navigateRoute}/${state.selectedReport.toLowerCase()}`, {
      state: {
        searchTerm,
        dateRange,
        ...state
      }
    });

    handleClose()
  };

  // Function to reset the filters
  const handleReset = () => {
    setSearchTerm("");
    setFilteredItems(dropdownFilterSubjectDetails);
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
    });
    setState({
      selectedPeriod: '',
      selectedBranch: '',
      selectedDepartment: '',
      selectedCostCenter: '',
      selectedReport: '',
      selectedYear: '',
      selectedQuarter: '',
      selectedMonth: '',
    });
    setIsDropdownOpen(false);
    setIsFilterDisabled(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Update filtered items when dropdownFilterSubjectDetails changes
  useEffect(() => {
    setFilteredItems(dropdownFilterSubjectDetails);
  }, [dropdownFilterSubjectDetails]);
  
  return (
		<ViewModal title={'REPORT MANAGEMENT'} modalSize='750px' show={show} handleClose={handleClose}>
		  <div className='w-100'>
        <div className="row">
          <section className="col-md-6 fv-row">
            <div className="mb-5">
              <label className="form-label">Site | Branch</label>
              {currentUser?.['employees.branch_detail.com_type'] === 'HO'
              ? <select className="form-select" value={state.selectedBranch} onChange={e => handleStateChange('selectedBranch', e.target.value)} disabled={isFilterDisabled || isOtherInputDisabled}>
                  <option value=''>All</option>
                  {
                    dropdownBranch?.map((items: ComGeneralData, id: number) => (
                      items.status && <option key={id} value={items.com_code}>{items.com_name}</option>
                    ))
                  }
                </select>
              : <input
                  type="text"
                  className="form-control"
                  value={currentUser?.['employees.branch_detail.com_name']}
                  disabled
                />}
            </div>
            <div className="mb-5">
              <label className="form-label">Department</label>
              <select className="form-select" value={state.selectedDepartment} onChange={e => handleStateChange('selectedDepartment', e.target.value)} disabled={isFilterDisabled || isOtherInputDisabled}>
                <option value=''>All</option>
                {
                  dropdownDepartment?.map((items: DepartmentData, id: number) => (
                    items.status && <option key={id} value={items.dept_code}>{items.dept_des}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-5">
              <label className="form-label">Cost Center</label>
              <select className="form-select" value={state.selectedCostCenter} onChange={e => handleStateChange('selectedCostCenter', e.target.value)} disabled={isFilterDisabled || isOtherInputDisabled}>
                <option value=''>All</option>
                {
                  dropdownCostCenter?.map((items: CostCenterData, id: number) => (
                    items.status && <option key={id} value={items.c_code}>{items.c_des}</option>
                  ))
                }
              </select>
            </div>
            
            <span className="separator separator-dashed mb-5"></span>

            <div className="mb-5">
              <label className='form-label'>Select Report</label>
              {state.selectedReport === '' && <span className="pulse-ring"></span>}
              <select className="form-select" value={state.selectedReport} onChange={e => handleStateChange('selectedReport', e.target.value)}>
                <option value=''>Select item</option>
                <option value='Summary'>{moduleName} Summary</option>
                <option value='Details'>{moduleName} Details</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="form-label">Filter Subject Detail</label>
              <div className="btn-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }} ref={dropdownRef}>
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ borderRadius: '0.50rem 0 0 0.50rem' }}
                  disabled={isFilterDisabled || isFilterSubjectDetailsDisabled}
                />
                <button
                  type="button"
                  className="btn btn-outline btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuReference"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                  disabled={isFilterDisabled || isFilterSubjectDetailsDisabled}
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                {isDropdownOpen && (
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuReference"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      zIndex: 1000,
                      display: 'block',
                      width: '100%',
                      marginTop: '0.125rem'
                    }}
                  >
                    {(filteredItems?.length || 0) > 0 ? (
                      filteredItems?.map((item, index) => (
                        <button
                          key={index}
                          className="dropdown-item"
                          onClick={() => handleSelectItem(item[labelKey || ''])}
                        >
                          {`${item[labelKey || '']} (${item[labelKeyDesc || '']})`}
                        </button>
                      ))
                    ) : (
                      <span className="dropdown-item-text">No results found</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
          
          <section className="col-md-6 fv-row">
            <div className="mb-5">
              <label className="form-label">Select Period</label>
              <select className="form-select" value={state.selectedPeriod} onChange={handleChangePeriod} disabled={isFilterDisabled || isOtherInputDisabled}>
                <option value=''>Select item</option>
                <option value='Daily'>Daily</option>
                <option value='Monthly'>Monthly</option>
                <option value='Quarterly'>Quarterly</option>
                <option value='Yearly'>Yearly</option>
              </select>
            </div>

            <div className='row mb-3 mt-5'>
              <label className='col-lg-4 form-label mt-3'>Year:</label>

              <div className='col-lg-8 fv-row'>
                <select className='form-select form-select-sm' value={state.selectedYear} onChange={e => handleStateChange('selectedYear', e.target.value)} disabled={isYearDisabled}>
                  <option value=''></option>
                  {years.map((item, index) => (
                    <option
                      key={index}
                      className="dropdown-item"
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-lg-4 form-label mt-3'>Quarter:</label>

              <div className='col-lg-8 fv-row'>
                <select className='form-select form-select-sm' value={state.selectedQuarter} onChange={e => handleStateChange('selectedQuarter', e.target.value)} disabled={isQuarterDisabled}>
                  <option value=''></option>
                  <option value='1'>Q1</option>
                  <option value='2'>Q2</option>
                  <option value='3'>Q3</option>
                  <option value='4'>Q4</option>
                </select>
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-lg-4 form-label mt-3'>Month:</label>

              <div className='col-lg-8 fv-row'>
                <select className='form-select form-select-sm' value={state.selectedMonth} onChange={e => handleStateChange('selectedMonth', e.target.value)} disabled={isMonthDisabled}>
                  <option value=''></option>
                  {months.map((item) => (
                    <option
                      key={item.value}
                      value={item.value}
                      className="dropdown-item"
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {!isDateDisabled && 
            <>
              <label className="form-label">Date:</label>
              <DateRange ranges={[selectionRange]} onChange={handleSelect} />
            </>
            }
          </section>
        </div>
      </div>

      <div className='d-flex justify-content-end py-5'>
        <button
          type='reset'
          className='btn btn-sm btn-light btn-active-light-primary me-2'
          data-kt-menu-dismiss='true'
          onClick={handleReset}
        >
          Reset
        </button>

        <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true' onClick={handleApply} disabled={!navigateRoute || state.selectedReport === ''}>
          Apply
        </button>
      </div>
    </ViewModal>
	)
}

export default ReportModal