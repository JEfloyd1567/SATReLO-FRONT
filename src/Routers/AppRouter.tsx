import { Route, Routes } from "react-router-dom"
import { MyAvatarTherapist } from "../pages/MyAvararTherapist"
import { TherapistPage } from "../pages/TherapistPage"
import { TherapistProfilePage } from "../pages/TherapistProfilePage"
import { PatientProfilePage } from '../pages/PatientProfilePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/TodosLosPacientes' element={<TherapistPage/>}/>
      <Route path='/MisPacientes' element={<TherapistPage target="own" />}/>
      <Route path='/Avatar' element={<MyAvatarTherapist/>}/>
      <Route path='/MiPerfil' element={<TherapistProfilePage/>}></Route>
      <Route path='/PatientProfile' element={<PatientProfilePage />}></Route>
      <Route path='/*' element={<TherapistPage />} />
    </Routes>
  )
}
