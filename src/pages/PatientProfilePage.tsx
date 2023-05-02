import { faCircleUser, faMagnifyingGlass, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BoxContentLayout } from "../components"
import { PatientProfileContent } from "../components/PatientProfile/PatientProfileContent"
import { PatientProfileHeader } from "../components/PatientProfile/PatientProfileHeader"


export const PatientProfilePage = () => {
  return (
    <BoxContentLayout
      header={<PatientProfileHeader/>}
    >
      
      <PatientProfileContent />
      
    </BoxContentLayout>
  )
}
