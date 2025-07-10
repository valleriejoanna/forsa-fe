import { ComingSoon } from "../../../../components";

const Benefit = () => {
	return (
    <>
      <div className="card card-custom mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header card-header-stretch">
          <div className="card-toolbar">
            <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_z_1"
                >
                  Payroll
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_z_2"
                >
                  Cash Advance
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_z_3"
                >
                  Loan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="myTabContent3">
        <div
          className="tab-pane fade active show"
          id="kt_tab_pane_1_z_1"
          role="tabpanel"
        >
          <ComingSoon />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_z_2" role="tabpanel">
          <ComingSoon />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_z_3" role="tabpanel">
          <ComingSoon />
        </div>
      </div>
    </>
  );
}
export default Benefit