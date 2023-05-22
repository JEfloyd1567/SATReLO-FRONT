import { useEffect, useState } from "react";
import { TherapistProfile } from "../components/TherapistProfile/TherapistProfile";
import { ItherapistUser } from "../interfaces";
import satreloUsersAPI from "../api/satreloUsersAPI";
import axios from "axios";

export const TherapistProfilePage = () => {
    const [therapistData, setTherapistData] = useState<ItherapistUser | null>(null);
    const personalIdTherapist = localStorage.getItem('personalID');
    console.log(personalIdTherapist);
  
    useEffect(() => {
      const fetchTherapistData = async () => {
        try {
          const { data } = await satreloUsersAPI.get(`/therapist/personalid/${personalIdTherapist}`);
          setTherapistData(data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const { message } = error.response?.data;
            console.log(message);
          } else {
            console.log(error);
          }
        }
      };
  
      if (personalIdTherapist) {
        fetchTherapistData();
      }
    }, [personalIdTherapist]);
  
    if (!therapistData) {
        return <div>Loading...</div>; 
      }

    return (
      <TherapistProfile therapist={therapistData} />
    );
  };