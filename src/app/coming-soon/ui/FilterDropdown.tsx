const FilterDropdown = () => {
  return (
		<div
      className="menu menu-sub menu-sub-dropdown w-600px w-md-700px"
      data-kt-menu="true"
    >
      <section className="px-7 py-5">
        <span className="fs-5 text-dark fw-bolder">Filter Options</span>
      </section>

      <span className="separator border-gray-200"></span>

      <div className="px-7 py-5">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label fw-bold">Site | Branch:</label>
            <select
              className="form-select form-select-solid"
              data-kt-select2="true"
              data-placeholder="Select supplier"
              data-allow-clear="true"
            >
              <option></option>
            </select>

            <div className="mt-5">
              <label className="form-label fw-bold">Department:</label>
              <select
                className="form-select form-select-solid"
                data-kt-select2="true"
                data-placeholder="Select purchaser"
                data-allow-clear="true"
              >
                <option value=""></option>
              </select>
            </div>

            <div className="mt-5">
              <label className="form-label fw-bold">Cost Center:</label>
              <select
                className="form-select form-select-solid"
                data-kt-select2="true"
                data-placeholder="Select purchaser"
                data-allow-clear="true"
              >
                <option value=""></option>
              </select>
            </div>

            <div className="mt-5">
              <label className="form-label fw-bold">Work Order:</label>
              <select
                className="form-select form-select-solid"
                data-kt-select2="true"
                data-placeholder="Select purchaser"
                data-allow-clear="true"
              >
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-0">
              <label className='d-flex align-items-center form-label'>
                <span className='required'>Select Period</span>
              </label>

              <select
                className="form-select form-select-solid"
                name="reading_type"
                aria-label="Select example"
              >
                <option value=''>Daily</option>
                <option value=''>Monthly</option>
                <option value=''>Quarterly</option>
                <option value=''>Yearly</option>
              </select>

              <div className='row mb-3 mt-5'>
                <label className='col-lg-4 form-label mt-3'>Year:</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-sm form-select-solid'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option></option>
                    <option value='1'></option>
                    <option value='2'></option>
                    <option value='3'></option>
                    <option value='4'></option>
                  </select>
                </div>
              </div>

              <div className='row mb-3'>
                <label className='col-lg-4 form-label mt-3'>Quarter:</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-sm form-select-solid'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option></option>
                    <option value='1'></option>
                    <option value='2'></option>
                    <option value='3'></option>
                    <option value='4'></option>
                  </select>
                </div>
              </div>

              <div className='row mb-3'>
                <label className='col-lg-4 form-label mt-3'>Month:</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-sm form-select-solid'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option></option>
                    <option value='1'></option>
                    <option value='2'></option>
                    <option value='3'></option>
                    <option value='4'></option>
                  </select>
                </div>
              </div>

              <div className='row mb-10'>
                <label className='col-lg-4 form-label mt-3'>Date:</label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-sm form-select-solid'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option></option>
                    <option value='1'></option>
                    <option value='2'></option>
                    <option value='3'></option>
                    <option value='4'></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="reset"
            className="btn btn-sm btn-light btn-active-light-primary me-2"
            data-kt-menu-dismiss="false"
          >
            Reset
          </button>

          <button
            type="submit"
            className="btn btn-sm btn-primary"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
	)
}

export {FilterDropdown}