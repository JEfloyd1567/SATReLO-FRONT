import { FC } from "react";
import {  BoxContentLayout, TherapistPatientsContent, TherapistPatientsHeader} from "../components";
import { IPatient } from '../interfaces/patients';

const patientsData: IPatient[] = Array();

/***  ONLY FOR TEST PURPOSE ***/
const numDataTest = 7;

/***  ONLY FOR TEST PURPOSE ***/
for (let i = 0; i < numDataTest; i++) {
  const obj: IPatient = {
    picture: '',
    name: `Nombre del paciente ${i+1}`,
    fromDate: 'DD/MM/YYYY',
    profileUrl: '/PatientProfile'
  };
  patientsData.push(obj);
}

interface Props {
  target?: 'all' | 'own';
}

export const TherapistPage: FC<Props> = ({target = 'all'}) => {
  return(
    <BoxContentLayout
      header={<TherapistPatientsHeader target={target} />}
    >
    
    <TherapistPatientsContent patients={patientsData} />

  </BoxContentLayout>
  );
};