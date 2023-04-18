import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AllPatientsPage = () => {

    return (
      <div className="row row-cols-3 d-flex justify-content-between gy-5">
        <div className="col border shadow rounded-3 p-3 d-flex flex-column align-items-center" style={{maxWidth: '200px'}}>
          <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
          <p className="fw-bold align-bottom">Nombre Paciente</p>
          <p>Desde: DD/MM/YYYY</p>
          <a href='#' >Ver Perfil</a>
        </div>
        <div className="col border shadow rounded-3 p-3 d-flex flex-column align-items-center" style={{maxWidth: '200px'}}>
          <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
          <p className="fw-bold">Nombre Paciente</p>
          <p>Desde: DD/MM/YYYY</p>
          <a href='#' >Ver Perfil</a>
        </div>
        <div className="col border shadow rounded-3 p-3 d-flex flex-column align-items-center" style={{maxWidth: '200px'}}>
          <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
          <p className="fw-bold">Nombre Paciente</p>
          <p>Desde: DD/MM/YYYY</p>
          <a href='#' >Ver Perfil</a>
        </div>
        <div className="col border shadow rounded-3 p-3 d-flex flex-column align-items-center" style={{maxWidth: '200px'}}>
          <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
          <p className="fw-bold align-bottom">Nombre Paciente</p>
          <p>Desde: DD/MM/YYYY</p>
          <a href='#' >Ver Perfil</a>
        </div>
        <div className="col border shadow rounded-3 p-3 d-flex flex-column align-items-center" style={{maxWidth: '200px'}}>
          <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
          <p className="fw-bold">Nombre Paciente</p>
          <p>Desde: DD/MM/YYYY</p>
          <a href='#' >Ver Perfil</a>
        </div>
        <div className="col border shadow rounded-3 p-3 d-flex flex-column align-items-center" style={{maxWidth: '200px'}}>
          <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
          <p className="fw-bold">Nombre Paciente</p>
          <p>Desde: DD/MM/YYYY</p>
          <a href='#' >Ver Perfil</a>
        </div>
      </div>
    )
  }