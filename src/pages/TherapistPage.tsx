import { FC, useEffect } from "react";
import {  BoxContentLayout, TherapistPatientsContent, TherapistPatientsHeader} from "../components";
import { IPatient } from '../interfaces/patients';
import { useAuthStore, useSatreloStore } from "../hooks";

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

  const role = localStorage.getItem('user_role');

  const {isLoadingPatients, patients, myPatients, startLoadingPatients, startLoadingMyPatients} = useSatreloStore()

  useEffect(() => {
    role === 'therapist' && startLoadingPatients();
    if (role === 'therapist') {
      (target === 'all')?
        startLoadingPatients()
      :
        startLoadingMyPatients()
    }
  }, [])

  return(
    <>{
      role === 'therapist' &&
        <BoxContentLayout
          header={<TherapistPatientsHeader target={target} />}
        >
          {
            (isLoadingPatients)?
              <div className="d-flex col-12 justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            :(
              <TherapistPatientsContent patients={(target === 'all')? patients : myPatients} />
            )
          }
        </BoxContentLayout>
    }
    </>
  );
};