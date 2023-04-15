import { TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";
import { AllPatientsFooter } from "../components/AllPatientsPage/AllPatientsFooter";
import { AllPatientsHeader } from "../components/AllPatientsPage/AllPatientsHeader";
import { AllPatientsPage } from "../components/AllPatientsPage/AllPatientsPage";
import { SearchBox } from "../components/SearchBox/SearchBox"; 
export const AllPatientsInstitutePage = () => {
    return(
      <TherapistLayout
        title="Todos los Pacientes"
        header={<AllPatientsHeader />}
      >
      <SearchBox />
      <AllPatientsPage />
      <div className="d-flex flex-row justify-content-end align-items-center">
        <AllPatientsFooter/>
      </div>
    </TherapistLayout>
    );
};