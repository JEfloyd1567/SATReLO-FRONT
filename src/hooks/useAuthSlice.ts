import { useDispatch, useSelector } from "react-redux"
import satreloLoginAPI from "../api/satreloLoginAPI";
import { clearErrorMessage, onLogin, onLogout } from "../store/auth/authSlice";
import { RootState } from '../store/store';
import { IUserLogin } from '../interfaces/users';
import axios from "axios";

export const useAuthStore = () => {

  const {status, user, errorMessage} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();  

  const startLogin = async({username, password}: IUserLogin) => {

    dispatch(clearErrorMessage());


    try {
      const {data} = await satreloLoginAPI.post('/login', {username, password})

      localStorage.setItem('token', data.token);
      dispatch(onLogin({name: 'Therapist Name', role:'therapist'}))
    
    } catch (error) {

      if (axios.isAxiosError(error)) {
        const {message} = error.response?.data

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