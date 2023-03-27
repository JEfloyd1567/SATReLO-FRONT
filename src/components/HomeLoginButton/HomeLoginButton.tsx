import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Patients from "../Patients/Patients";
import './HomeLoginButton.css';
import Therapist from "../TherapistModal/Therapist";
import Button from 'react-bootstrap/Button';

export const HomeLoginButton =()=>{

    const[clicked,setClicked] = useState(false)
    const hanndleButtonClick =()=>{
        setClicked(true)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPatients, setShowPatients] = useState(false);

    const handleClosePatients = () => setShowPatients(false);
    const handleShowPatients = () => setShowPatients(true);

    return(
        <>
        <div className="position-absolute bottom-0 start-50 translate-middle-x homeLoginButton">
        {
            (!clicked)?
            <button className="btn rounded-pill botonNoClicked " onClick={hanndleButtonClick}>INICIAR SESION</button>
            :
            <>
            <div className="container">
                <div className="row">
                    <div className="input-group col">
                        <input className="rounded-pill inputClicked" type="text" placeholder="IDENTIFICACION" maxLength={10} ></input>
                    </div>
                    <div className="clickedBackgroundIcon rounded-circle d-inline col">
                        <button className="buttonHome" type="submit" onClick={handleShowPatients}>
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                        </button>
                    </div>
                    <Patients show={showPatients} handleClose={handleClosePatients} />
                    <Button variant="primary" onClick={handleShow}>testo</Button>
                    <Therapist show={show} handleClose={handleClose}/>
                </div>
            </div>
            </>
        }
        </div>

        </>
    );
}