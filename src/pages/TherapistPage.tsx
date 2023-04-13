import { SearchBox, TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";


export const TherapistPage = () => {
    return(
      <TherapistLayout
        title=""
        header={<TherapistPatientsHeader />}
      >
      <SearchBox />
      <TherapistPatientsContent />
    </TherapistLayout>
    );
};