import { Navbar } from "./components/Navbar/Navbar";
import { AllPatientsInstitutePage } from "./pages/AllPatientsInstitutePage";
import { Home } from "./pages/Home";
import { TherapistPage } from "./pages/TherapistPage";
import "./SatreloApp.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
      </Routes>
      </Router>
    </div>
    </>
  );
}

export default SatreloApp;
