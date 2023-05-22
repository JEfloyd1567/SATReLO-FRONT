import { FC, useEffect, useState } from "react";
import { BoxContentLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";
import { IPatient } from '../interfaces/patients';
import satreloUsersAPI from "../api/satreloUsersAPI";

interface Props {
  target?: 'all' | 'own';
}

export const TherapistPage: FC<Props> = ({ target = 'all' }) => {
  const [patientsData, setPatientsData] = useState<IPatient[]>([]);

  useEffect(() => {
    const fetchPatientsData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          return;
        }

        satreloUsersAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await satreloUsersAPI.get('/therapist/patients');

        setPatientsData(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatientsData();
  }, []);

  return (
    <BoxContentLayout header={<TherapistPatientsHeader target={target} />}>
      <TherapistPatientsContent patients={patientsData}/>
    </BoxContentLayout>
  );
};
