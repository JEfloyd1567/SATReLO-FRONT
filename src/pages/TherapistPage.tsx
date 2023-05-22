import { FC, useEffect, useState } from "react";
import { BoxContentLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";
import { IPatient } from '../interfaces/patients';
import satreloUsersAPI from "../api/satreloUsersAPI";
import { AxiosError, isAxiosError } from "axios";

interface Props {
  target?: 'all' | 'own';
}

export const TherapistPage: FC<Props> = ({ target = 'all' }) => {
  const [patientsData, setPatientsData] = useState<IPatient[]>([]);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const fetchPatientsData = async (searchTerm: string | null) => {
    try {
      const token = localStorage.getItem('token');
      const idThera = localStorage.getItem('personalID');
      if (!token) {
        return;
      }
      satreloUsersAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      let endpoint = '/therapist/patients';

      if (searchTerm) {
        endpoint += `/${searchTerm}`;
      }
      //console.log(endpoint);
      const response = await satreloUsersAPI.get(endpoint);
      setPatientsData(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          console.log('Response status:', axiosError.response.status);
          console.log('Response headers:', axiosError.response.headers);
          console.log('Response data:', axiosError.response.data);
        } else {
          console.log('Error message:', axiosError.message);
        }
      } else {
        console.log('Error message:', (error as Error).message);
      }
    }
  };

  useEffect(() => {
    fetchPatientsData(searchTerm);
  }, [searchTerm]);

  return (
    <BoxContentLayout header={<TherapistPatientsHeader  handleSearch={fetchPatientsData}  target={target} />}>
      <TherapistPatientsContent patients={patientsData}/>
    </BoxContentLayout>
  );
};
