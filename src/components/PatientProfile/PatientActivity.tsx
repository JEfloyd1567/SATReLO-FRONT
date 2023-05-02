
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import activityImg from '../../assets/images/satrelo_activity.png';
import { useAuthStore } from '../../hooks/useAuthSlice';

export const PatientActivity = () => {

  const {user} = useAuthStore();

  return (
    <div className="col">
      <div className="row border shadow-sm rounded-3 px-2 py-3">
        <div className="col-12 col-lg-3 pb-2 pb-sm-0">
          <img src={activityImg} className='w-100 rounded' style={{height: '116px', objectFit: 'cover'}}/>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-between align-content-center mb-2">
            <div className="col-12 col-md-6">
              <h5 className="fw-bold">Titulo de la actividad</h5>
            </div>
            <div className="col d-flex justify-content-md-end">
              <p className="m-0">Fecha DD/MM/YYYY</p>
            </div>
          </div>
          <div className="row d-flex justify-content-between flex-column-reverse flex-sm-row  mb-2">
            <div className="col-12 col-sm-8 flex-column ">
              <p className="m-0">Último acceso: DD/MM/YYYY</p>
              <p className="m-0">Progreso 2/3</p>
            </div>
            <div className="col d-flex justify-content-end align-items-center mb-2 mb-sm-0">
              {
                (user?.role === 'therapist') &&
                (
                  <button type="button" className="btn btn-primary fw-bold rounded-pill px-3">
                    <FontAwesomeIcon icon={faPenToSquare} style={{ color: "white" }} size={"lg"} className="me-2" />
                    Editar
                  </button>
                )
              }
            </div>
          </div>
          <div className="d-flex " style={{height: "20px"}}>
            <div className="flex-fill bg-primary border me-1"/>
            <div className="flex-fill bg-primary border me-1"/>
            <div className="flex-fill bg-secondary border"/>
          </div>
        </div>
      </div>
    </div>
  )
}
