import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout, onGettingUserRole } from "../store/auth/authSlice";
import { RootState } from '../store/store';
import { IRole, IUserLogin } from '../interfaces/users';
import axios from "axios";
import satreloLoginAPI from "../api/satreloLoginAPI";
import satreloUsersAPI from "../api/satreloUsersAPI";

export const useAuthStore = () => {

  const {status, user, errorMessage} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();  

  const startLogin = async({username, password}: IUserLogin) => {

    dispatch(clearErrorMessage());
    dispatch(onChecking());

    try {
      const {data} = await satreloLoginAPI.post('/login', {personalId: username, password})

      localStorage.setItem('token', data.token);
      const user_role: any = localStorage.getItem('user_role') ?? 'patient';

      dispatch(onLogin({name: `${user_role} user`, role: user_role}))

    } catch (error) {

      if (axios.isAxiosError(error)) {
        const {message} = error.response?.data
        
        dispatch(onLogout(message));
      } else {
        dispatch(onLogout());
      }
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout(undefined));
  }

  const checkAuth = async() => {
    const token = localStorage.getItem('token');
    const user_role: any = localStorage.getItem('user_role') ?? 'patient';

    if (!token) {
      localStorage.clear()
      return dispatch(onLogout())
    } 

    dispatch(onLogin({name: `${user_role} user`, role: user_role}))
  }

  const startCheckingRole = async(personalId: string) => {
    dispatch(onChecking());

    try {
      const {data} = await satreloLoginAPI.get(`/role/${personalId}`)

      localStorage.setItem('user_role', data.role);

      dispatch(onGettingUserRole({role: data.role}))

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const {message} = error.response?.data ?? {message: 'Error del servidor, vuelva a intentarlo mas tarde'}

        dispatch(onLogout(message));
      } else {
        
        dispatch(onLogout());
      }     
    }
  }

  const startGettingPatients = async() => {

    dispatch(onChecking());

    try {
      const {data} = await satreloUsersAPI.get('/therapist/mypatients');

      console.log(data);

    } catch (error) {
      
    }

  }

  return {
    // *Props
    status,
    user,
    errorMessage,

    // *Methods
    startLogin,
    startLogout,
    checkAuth,
    startCheckingRole,
    startGettingPatients
  }
}