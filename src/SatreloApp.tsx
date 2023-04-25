import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar";
import "./SatreloApp.css"
import { useAuthStore } from './hooks';
import { AuthRouter } from './Routers';
import { AppRouter } from './Routers/AppRouter';
import { useEffect } from 'react';

function SatreloApp() {
  const {status, checkAuth} = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [])
  
  return (
    <>
        <div>
          <Router>
            <Navbar/>
            <Routes>
              {
                status === 'authenticated'
                ? (
                  <Route path='/*' element={<AppRouter />} />
                )
                : (
                  <Route path='/*' element={<AuthRouter/>} />
                )
              }
                
            </Routes>
          </Router>

          {/* <Router>
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
          </Router> */}
        </div>
    </>
  );
}

export default SatreloApp;
