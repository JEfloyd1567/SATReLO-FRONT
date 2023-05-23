import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { PatientActivity } from "./PatientActivity";
import { useAuthStore } from '../../hooks/useAuthSlice';

export const PatientProfileContent = () => {

  const {user} = useAuthStore();

  return (
    <>
    <div className="row mb-4">

        {/* PATIENT PERSONAL INFO */}
        <div className="col-12 col-md-7 col-xxl-7 pb-4 pb-md-0" id="patient-personal-info">
          <div className="border shadow-sm rounded-3 px-4 py-4" >
            <div className="row mb-1">
              <h5>Información personal</h5>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4 d-flex justify-content-center mb-2 mb-sm-0">
                {/* <FontAwesomeIcon icon={faCircleUser} className='text-primary' size="9x" /> */}
                <div className="col-12 pb-sm-0">
                  <img src="https://psi-website.s3.us-east-2.amazonaws.com/pfp/mypfp7.jpg" className='w-100 rounded' style={{height: '150px',objectFit: 'cover'}}/>
                </div>
              </div>
              <div className="col">
                <p className="m-0">Nombre: Belvia</p>
                <p className="m-0">Edad: 13 años</p>
                <p className="m-0">Fecha de nacimiento: 01/01/2010</p>
                <p className="m-0">Guardian: Jhon Doe</p>
                <p className="m-0">Numero de contacto: 190-358-7623</p>
                <p className="m-0">Email: bhardikerk@dion.ne.jp</p>
              </div>
            </div>
          </div>
        </div>
        {/* PATIENT PERSONAL INFO */}

        {/* PATIENT HISTORY */}
        <div className="col-12 col-md-5 col-xxl-5" id="patient-history">
          <div className="border shadow-sm rounded-3 px-4 pt-3 pb-2 h-100" >
            <div className="row mb-1">
              <h5>Historia</h5>
            </div>
            <div className="row overflow-auto">
              <p className="m-0">Paciente desde: 25/04/2023</p>
              <p className="m-0">Estado: Activo</p>
              <p className="m-0">Terapeutas:</p>
              <div className="d-flex flex-column overflow-auto ps-5" style={{maxHeight: '96px'}}>
                <p className="m-0 text-nowrap">Paul</p>
                <p className="m-0 text-nowrap">German Caycedo Mutis</p>
                <p className="m-0 text-nowrap">Jeremias Villalobos</p>
              </div>
            </div>
          </div>
        </div>
        {/* PATIENT HISTORY */}
      </div>

      <div className="row">
        <div className="col-12">
          <div className="border shadow-sm rounded-3 px-4 px-sm-5 py-4" >
            <div className="row mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="">Actividades</h5>
                {
                  (user?.role === 'therapist') && 
                  (
                    <a href='/' className="" id="patient-asignar-actividad">Asignar actividad</a>
                  )
                }
              </div>
            </div>
            <div className="row row-cols-1 gy-3" style={{minHeight: '166px'}}>
              
              <PatientActivity /> 

              {/* <div className="col-12 d-flex justify-content-center align-items-center">
                <h2 className="fw-lighter fst-italic text-center">No hay actividades asignadas</h2>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
