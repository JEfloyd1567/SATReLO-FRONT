import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { TherapistPage } from "./pages/TherapistPage";
import { MyAvatarTherapist } from "./pages/MyAvararTherapist";
import { TherapistProfilePage } from "./pages/TherapistProfilePage";

import "./SatreloApp.css"
import { useAuthStore } from './hooks';

function SatreloApp() {
  const {status} = useAuthStore()

  return (
    <>
        <div>
          <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/*' element={<Navigate to='/'/>} />
                <Route path='/TodosLosPacientes' element={<TherapistPage/>}/>
                <Route path='/MisPacientes' element={<TherapistPage target="own" />}/>
                <Route path='/Avatar' element={<MyAvatarTherapist/>}/>
                <Route path='/MiPerfil' element={<TherapistProfilePage/>}></Route>
                <Route path='/*' element={<TherapistPage />} />
            </Routes>
          </Router>
        </div>
    </>
  );
}

export default SatreloApp;
