import { FC } from "react";
import { TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader} from "../components";
import { Patient } from "../interfaces";

const patientsData: Patient[] = Array();

/***  ONLY FOR TEST PURPOSE ***/
const numDataTest = 3;

/***  ONLY FOR TEST PURPOSE ***/
for (let i = 0; i < numDataTest; i++) {
  const obj: Patient = {
    picture: '',
    name: `Sebastian Mena Ferreira ${i+1}`,
    fromDate: 'DD/MM/YYYY',
    profileUrl: '#'
  };
  patientsData.push(obj);
}

interface Props {
  target?: 'all' | 'own';
}

export const TherapistPage: FC<Props> = ({target = 'all'}) => {
  return(
    <TherapistLayout
      header={<TherapistPatientsHeader target={target} />}
    >
    
    <TherapistPatientsContent patients={patientsData} />

  </TherapistLayout>
  );
};