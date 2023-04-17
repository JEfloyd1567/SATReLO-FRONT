import { TherapistLayout } from "../components";
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
      <div className="d-flex flex-row justify-content-end align-items-center" style={{height: '80px'}}>
        <SearchBox />
      </div>
      
      <AllPatientsPage />
      <div className="d-flex flex-row justify-content-end align-items-center" style={{height: '80px'}}>
        <AllPatientsFooter/>
      </div>
    </TherapistLayout>
    );
};