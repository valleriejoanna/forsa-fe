import { KTCard, KTCardBody } from "../../../../../_metronic"

const Career = () => {
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
                  href="#kt_tab_pane_1_d_1"
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_d_2"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_d_3"
                >
                  Training
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_d_4"
                >
                  Language
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_1_d_5"
                >
                  Hobby
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="myTabContent3">
        <div
          className="tab-pane fade active show"
          id="kt_tab_pane_1_d_1"
          role="tabpanel"
        >
          <KTCard>
            <KTCardBody className="py-4">
              <div className="table-responsive">
                <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
                  <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      <th className="min-w-25px">No</th>
                      <th className="min-w-125px">Company</th>
                      <th className="min-w-150px">Location</th>
                      <th className="min-w-150px">From (Year)</th>
                      <th className="min-w-150px">To (Year)</th>
                      <th className="min-w-150px">Duration</th>
                      <th className="min-w-150px">Last Position</th>
                      <th className="min-w-150px text-end">Comments</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-bold">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-end"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </KTCardBody>
          </KTCard>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_d_2" role="tabpanel">
          <KTCard>
            <KTCardBody className="py-4">
              <div className="table-responsive">
                <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
                  <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      <th className="min-w-25px">No</th>
                      <th className="min-w-125px">Institution</th>
                      <th className="min-w-150px">Location</th>
                      <th className="min-w-150px">Field (Jurusan)</th>
                      <th className="min-w-150px">From (Year)</th>
                      <th className="min-w-150px">To (Year)</th>
                      <th className="min-w-150px">Duration</th>
                      <th className="min-w-150px text-end">Certified</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-bold">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-end"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </KTCardBody>
          </KTCard>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_d_3" role="tabpanel">
          <KTCard>
            <KTCardBody className="py-4">
              <div className="table-responsive">
                <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
                  <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      <th className="min-w-25px">No</th>
                      <th className="min-w-100px">Course Type</th>
                      <th className="min-w-150px">Course Name</th>
                      <th className="min-w-100px">Start</th>
                      <th className="min-w-100px">Finish</th>
                      <th className="min-w-100px">Duration</th>
                      <th className="min-w-150px">Institution</th>
                      <th className="min-w-150px">Result</th>
                      <th className="min-w-150px text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-bold">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-end"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </KTCardBody>
          </KTCard>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_d_4" role="tabpanel">
          <KTCard>
            <KTCardBody className="py-4">
              <div className="table-responsive">
                <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
                  <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      <th className="min-w-25px">No</th>
                      <th className="min-w-100px">Language</th>
                      <th className="min-w-150px">Speaking</th>
                      <th className="min-w-100px">Reading</th>
                      <th className="min-w-100px">Writing</th>
                      <th className="min-w-100px">Listening</th>
                      <th className="min-w-150px text-end">Comments</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-bold">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-end"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </KTCardBody>
          </KTCard>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_1_d_5" role="tabpanel">
          <KTCard>
            <KTCardBody className="py-4">
              <div className="table-responsive">
                <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
                  <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      <th className="min-w-25px">No</th>
                      <th className="min-w-100px">Hobby</th>
                      <th className="min-w-150px text-end">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-bold">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td className="text-end"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </KTCardBody>
          </KTCard>
        </div>
      </div>
    </>
  );
}
export default Career