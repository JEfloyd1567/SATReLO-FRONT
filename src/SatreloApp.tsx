import { Navbar } from "./components/Navbar/Navbar";
import { AllPatientsInstitutePage } from "./pages/AllPatientsInstitutePage";
import { Home } from "./pages/Home";
import { TherapistPage } from "./pages/TherapistPage";
import "./SatreloApp.css"
import { MyAvatarTherapist } from "./pages/MyAvararTherapist";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TherapistProfilePage } from "./pages/TherapistProfilePage";

function SatreloApp() {

  return (
    <>
    <div className="vh-100 " style={{backgroundColor: '#f5f5f5'}}>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TodosLosPacientes' element={<AllPatientsInstitutePage/>}/>
        <Route path='/MisPacientes' element={<TherapistPage/>}/>
        <Route path='/Avatar' element={<MyAvatarTherapist/>}/>
        <Route path='/MiPerfil' element={<TherapistProfilePage/>}></Route>
      </Routes>
      </Router>
    </div>
    </>
  );
}

export default SatreloApp;
