import { KTCard, KTCardBody } from "../../../../../_metronic"
import ComingSoon from "../../../../components/ComingSoon"

const Appraisal = () => {
  return(
    <KTCard>
      <div className="card-header cursor-pointer">
        <h3 className="card-title">Performance Appraisal</h3>
      </div>
      <KTCardBody className="py-4">
        <ComingSoon />
      </KTCardBody>
    </KTCard>
  )
}

export default Appraisal