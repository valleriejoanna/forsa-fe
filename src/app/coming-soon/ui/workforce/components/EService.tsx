import { ComingSoon } from "../../../../components";

const EService = () => {
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
                  href="#kt_tab_pane_1_f_1"
                >
                  E-Approval
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_f_2"
                >
                  E-Request
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_f_3"
                >
                  E-Tasks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_f_4"
                >
                  E-Training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="myTabContent3">
        <div
          className="tab-pane fade active show"
          id="kt_tab_pane_1_f_1"
          role="tabpanel"
        >
          <ComingSoon />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_f_2" role="tabpanel">
          <ComingSoon />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_f_3" role="tabpanel">
          <ComingSoon />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_f_4" role="tabpanel">
          <ComingSoon />
        </div>
      </div>
    </>
  );
}
export default EService