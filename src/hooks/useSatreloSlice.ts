import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout, onGettingUserRole } from "../store/auth/authSlice";
import { RootState } from '../store/store';
import { IRole, IUserLogin } from '../interfaces/users';
import axios from "axios";
import satreloLoginAPI from "../api/satreloLoginAPI";
import satreloUsersAPI from "../api/satreloUsersAPI";
import { loadingEvents, onLoadMyPatients, onLoadPatients } from "../store/satrelo/satreloSlice";

export const useSatreloStore = () => {

  const {isLoadingPatients, patients, myPatients} = useSelector((state: RootState) => state.satrelo);

  const dispatch = useDispatch();  

  const startLoadingPatients = async() => {

    try {
      const {data} = await satreloUsersAPI.get('/therapist/patients');

      dispatch(onLoadPatients(data))

    } catch (error) {
      
    }
  }

  const startLoadingMyPatients = async() => {

    dispatch(loadingEvents());

    try {
      const {data} = await satreloUsersAPI.get('/therapist/mypatients');

      dispatch(onLoadMyPatients(data))

    } catch (error) {
      
    }
  }

  return {
    // *Props
    isLoadingPatients,
    patients,
    myPatients,
    
    // *Methods
    startLoadingPatients,
    startLoadingMyPatients
  }
}