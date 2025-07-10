import { useState } from 'react'
import { KTCard, KTCardBody } from "../../../../../_metronic"

const Asset = () => {
  const [rows] = useState([
    { id: 1, asset_no: '21-032', asset_name: 'Kursi Putar', asset_model: '', year: '2019', date_used: '5-Mar-22', department: 'Production', location: '' },
    { id: 2, asset_no: '21-032', asset_name: 'Kursi Putar', asset_model: '', year: '2019', date_used: '5-Mar-22', department: 'Production', location: '' },
    { id: 3, asset_no: '21-032', asset_name: 'Kursi Putar', asset_model: '', year: '2019', date_used: '5-Mar-22', department: 'Production', location: '' },
  ]);

  return(
    <KTCard>
      <div className="card-header cursor-pointer">
        <h3 className="card-title">My Asset</h3>
      </div>
      <KTCardBody className="py-4">
        <div className="table-responsive">
          <table className="table align-middle table-hover table-row-dashed fs-6 gy-1 dataTable no-footer">
            <thead>
              <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                <th className="min-w-25px">No</th>
                <th className="min-w-125px">Asset No</th>
                <th className="min-w-150px">Asset Name</th>
                <th className="min-w-100px">Asset Model</th>
                <th className="min-w-150px">Year</th>
                <th className="min-w-150px">Date Used</th>
                <th className="min-w-150px">Department</th>
                <th className="min-w-150px text-end">Location</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 fw-bold">
              {rows.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.asset_no}</td>
                  <td>{row.asset_name}</td>
                  <td>{row.asset_model}</td>
                  <td>{row.year}</td>
                  <td>{row.date_used}</td>
                  <td>{row.department}</td>
                  <td className="text-end">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </KTCardBody>
    </KTCard>
  )
}

export default Asset