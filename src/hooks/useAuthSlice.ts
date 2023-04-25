import { useDispatch, useSelector } from "react-redux"
import satreloLoginAPI from "../api/satreloLoginAPI";
import { onLogin, onLogout } from "../store/auth/authSlice";
import { RootState } from '../store/store';
import { IUserLogin } from '../interfaces/users';

export const useAuthStore = () => {

  const {status, user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();  

  const startLogin = async({username, password}: IUserLogin) => {
    console.log({username, password});

    try {
      const {data} = await satreloLoginAPI.post('/login', {username, password})
      console.log(data);
    
      // dispatch(onLogin({name: 'Therapist Name', role:'therapist'}))
    } catch (error) {
      console.log({error});
    }

    localStorage.setItem('user', username);
    dispatch(onLogin({name: 'Therapist Name', role:'therapist'}))
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  }

  const checkAuth = () => {
    const user = localStorage.getItem('user');

    if (!user) return;

    dispatch(onLogin({name: 'Therapist Name', role:'therapist'}))

  }

  return {
    // *Props
    status,
    user,

    // *Methods
    startLogin,
    startLogout,
    checkAuth
  }
}