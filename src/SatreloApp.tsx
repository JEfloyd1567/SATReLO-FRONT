import { Navbar } from "./components/Navbar/Navbar";
import "./SatreloApp.css"

import { HomeLoginButton } from "./components/HomeLoginButton/HomeLoginButton";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TherapistLayout, TherapistPatientsContent, TherapistPatientsHeader } from "./components";

function SatreloApp() {

  return (
    <>
    <div className="vh-100 " style={{backgroundColor: '#f5f5f5'}}>
      <Navbar/>

      {/* <div className="position-relative banner-background">
        <HomeLoginButton/>
      </div>
        <div className='Bienvenido-container' id = 'bienvenido'>
        Bienvenidos a la aplicacion de apoyo a la 
        rehabilitacion del lenguaje oral
        </div>
        <div className='texto-container' id = 'texto'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.
        </div> */}
     

        <TherapistLayout 
          title="Mis pacientes" 
          header={<TherapistPatientsHeader/>}
        >
          <TherapistPatientsContent/>
        </TherapistLayout>        
      </div>
    </>
  );
}

export default SatreloApp;
