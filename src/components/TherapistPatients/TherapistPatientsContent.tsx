import { FC, useEffect, useState } from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PaginationControl } from "react-bootstrap-pagination-control";
import { IPatient } from '../../interfaces/patients';
import { Col, Row } from "react-bootstrap";

interface Props {
  patients: IPatient[];
}

export const TherapistPatientsContent: FC<Props> = ({ patients}) => {

  const patientsPerPage = 6;
  const [activePage, setActivePage] = useState(1);

  const indexOfLastCard = activePage * patientsPerPage;
  const indexOfFirstCard = indexOfLastCard - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstCard, indexOfLastCard);
      
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-4 d-flex align-items-center h-auto">
        { 
          currentPatients.map( ({name, createdDate, avatarUrl}, index) => (
          <div className="col d-flex justify-content-center" key={index} >
            <div className="border shadow rounded-3 px-2 py-3 d-inline-flex flex-column align-items-center "  style={{width: '260px'}}>
              <FontAwesomeIcon icon={faCircleUser} className='text-primary mb-3' size="7x" />
              <p className="fw-bold align-bottom text-center">{name}</p>
              <p>{createdDate}</p>
              <a href={`${avatarUrl}`} >Ver Perfil</a>
            </div>
          </div>
          ))
        }

        {
          patients.length < 1 &&
          <Row className="align-items-center d-flex justify-content-center text-center">
            <Col  className="fw-lighter fst-italic" style={{ whiteSpace: 'nowrap' }}>Aún no hay pacientes registrados
            </Col>
          </Row>
          
        }

      </div>

      {/* PAGINATION */}
      {(patients.length > 0) &&
        <div className="d-flex justify-content-end mt-4 me-4">
          <PaginationControl
            page={activePage}
            total={patients.length}
            limit={6}
            changePage={(page) => setActivePage(page)}
            ellipsis={1}
            last = {true}
          />
        </div>
      }
    </>
  )
}
