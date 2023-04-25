import { Route, Routes } from "react-router-dom"
import { MyAvatarTherapist } from "../pages/MyAvararTherapist"
import { TherapistPage } from "../pages/TherapistPage"
import { TherapistProfilePage } from "../pages/TherapistProfilePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/TodosLosPacientes' element={<TherapistPage/>}/>
      <Route path='/MisPacientes' element={<TherapistPage target="own" />}/>
      <Route path='/Avatar' element={<MyAvatarTherapist/>}/>
      <Route path='/MiPerfil' element={<TherapistProfilePage/>}></Route>
      <Route path='/*' element={<TherapistPage />} />
    </Routes>
  )
}
