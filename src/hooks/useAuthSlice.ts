import { useDispatch, useSelector } from "react-redux"
import satreloLoginAPI from "../api/satreloLoginAPI";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { RootState } from '../store/store';
import { IUserLogin } from '../interfaces/users';
import axios from "axios";
import { setAuthToken } from "../store/auth/setAuthToken";

export const useAuthStore = () => {

  const {status, user, errorMessage} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();  

  const startLogin = async({username, password}: IUserLogin) => {

    dispatch(clearErrorMessage());
    dispatch(onChecking());

    try {
      const {data} = await satreloLoginAPI.post('/login', {personalId: username, password})

      localStorage.setItem('token', data.token);

      dispatch(onLogin({name: 'Therapist Name', role:'therapist'}))
    } catch (error) {

      if (axios.isAxiosError(error)) {
        const {message} = error.response?.data

        console.log(message);
        
        dispatch(onLogout(message));
      } else {
        console.log(error);
        dispatch(onLogout());
      }
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  }

  const checkAuth = async() => {
    const token = localStorage.getItem('token');

    if (!token) return;

    setAuthToken(token);

    dispatch(onLogin({name: 'Therapist Name', role:'therapist'}))

  }

  return {
    // *Props
    status,
    user,
    errorMessage,

    // *Methods
    startLogin,
    startLogout,
    checkAuth
  }
}