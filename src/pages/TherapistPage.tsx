import { TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";


export const TherapistPage = () => {
    return(
        <TherapistLayout 
          title="Mis pacientes" 
          header={<TherapistPatientsHeader/>}
        >
          <TherapistPatientsContent/>
      </TherapistLayout>
    );
};