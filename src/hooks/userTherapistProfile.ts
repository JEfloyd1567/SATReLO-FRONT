import { useDispatch, useSelector } from "react-redux"
import satreloUsersAPI from "../api/satreloUsersAPI";
import { RootState } from '../store/store';
import { ItherapistUser } from '../interfaces/users';
import axios from "axios";
import { useState } from "react";

export const userProfile = () => {
  const [therapistData, setTherapistData] = useState<ItherapistUser | null>(null);
  const personalIdTherapist = localStorage.getItem('personalID');
  const dispatch = useDispatch();

  const findId = async() => {

    try {
      const {data} = await satreloUsersAPI.get('/therapist/personalid/${personalIdTherapist}');
      setTherapistData(data);
      
    } catch (error) {

      if (axios.isAxiosError(error)) {
        const {message} = error.response?.data

        console.log(message);
        
      } else {
        console.log(error);
      }
    }
  }

  return {
    // *Props

    // *Methods
    findId
  }
}