import { FC, useEffect, useState } from "react";
import { BoxContentLayout, TherapistPatientsContent, TherapistPatientsHeader } from "../components";
import { IPatient } from '../interfaces/patients';
import { useAuthStore } from "../hooks/useAuthSlice";
import { useSelector } from "react-redux";
import { RootState } from '../store/store';
import satreloUsersAPI from "../api/satreloUsersAPI";

interface Props {
  target?: 'all' | 'own';
}

export const TherapistPage: FC<Props> = ({ target = 'all' }) => {
  const [patientsData, setPatientsData] = useState<IPatient[]>([]);
  const { checkAuth } = useAuthStore();

  

  return (
    <BoxContentLayout header={<TherapistPatientsHeader target={target} />}>
      <TherapistPatientsContent patients={patientsData}/>
    </BoxContentLayout>
  );
};
