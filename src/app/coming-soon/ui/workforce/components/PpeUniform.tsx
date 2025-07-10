import { KTCard, KTCardBody } from "../../../../../_metronic"

const PpeUniform = () => {
  return(
    <KTCard>
      <div className="card-header cursor-pointer">
        <h3 className="card-title">PPE</h3>
      </div>
      <KTCardBody className="py-4">
        <div className="table-responsive">
          <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
            <thead>
              <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                <th className="min-w-25px">No</th>
                <th className="min-w-125px">Register Date</th>
                <th className="min-w-150px">Issued Date</th>
                <th className="min-w-100px">Material Code</th>
                <th className="min-w-150px">Material Description</th>
                <th className="min-w-150px">Approved Date</th>
                <th className="min-w-150px text-end">Status</th>
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
  )
}

export default PpeUniform