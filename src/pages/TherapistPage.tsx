import { SearchBox, TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader} from "../components";
import { TherapistPatientsFooter } from "../components/TherapistPatientsPage/TherapistPatientsFooter";


export const TherapistPage = () => {
    return(
      <TherapistLayout
        title="Mis Pacientes"
        header={<TherapistPatientsHeader />}
      >
      <SearchBox />
      <TherapistPatientsContent />
      <div className="d-flex flex-row justify-content-end align-items-center" style={{height: '80px'}}>
        <TherapistPatientsFooter/>
      </div>
    </TherapistLayout>
    );
};