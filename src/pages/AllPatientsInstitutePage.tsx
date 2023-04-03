import { TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";
import { AllPatientsFooter } from "../components/AllPatientsPage/AllPatientsFooter";
import { AllPatientsHeader } from "../components/AllPatientsPage/AllPatientsHeader";
import { AllPatientsPage } from "../components/AllPatientsPage/AllPatientsPage";

export const AllPatientsInstitutePage = () => {
    return(
        <TherapistLayout 
          title="Todos los pacientes" 
          header={<AllPatientsHeader/>}
        >
          <AllPatientsPage/>
          <AllPatientsFooter/>
        </TherapistLayout>
    );
};