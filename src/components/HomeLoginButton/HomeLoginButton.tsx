import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Therapist from "../TherapistModal/Therapist";
import Button from 'react-bootstrap/Button';
import Patients from "../Patients/Patients";
import { ErrorToast } from "../Toasts/ErrorToast";

export const HomeLoginButton =()=>{
    const [clicked,setClicked] = useState(false)
    const [show, setShow] = useState(false);
    const [showPatients, setShowPatients] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const [showErrorToast, setShowErrorToast] = useState(false);

    const handleButtonClick =()=>{
        setClicked(true)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (inputValue === '') {
            setShowErrorToast(true);
            return
        }

        setShow(true)
    };


    const handleClosePatients = () => setShowPatients(false);
    const handleShowPatients = () => {
        if (inputValue === '') {
            setShowErrorToast(true);
            return;
        }

        setShowPatients(true);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputValue(value);
    }

    const handleCloseErrorToast = () => setShowErrorToast(false);

    return(
        <>
        <div className="position-absolute bottom-0 start-50 homeLoginButton translate-middle-x">
        {
            (!clicked)?
            <button className="btn rounded-pill botonNoClicked " onClick={handleButtonClick}>INICIAR SESION</button>
            :

            <div className="container" style={{maxWidth: '460px'}}>
                
                <div className="row d-inline-flex justify-content-center">
                    {/* Error message toast  */}
                    {
                        showErrorToast &&
                        <ErrorToast msg="Debe ingresar una identificacion valida" handleCloseBtnClick={handleCloseErrorToast} />
                    }
                    <div className="col d-flex">
                        <input className="rounded-pill inputClicked" type="text" value={inputValue} onChange={handleInputChange} placeholder="IDENTIFICACION" maxLength={10} ></input>
                        <div className="d-inline-flex">
                            <div className="clickedBackgroundIcon rounded-circle d-inline-flex justify-content-center align-items-center h-auto" onClick={handleShow}>
                                <FontAwesomeIcon  icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                            </div>
                            <Therapist show={show} handleClose={handleClose}/>

                            <div className="clickedBackgroundIcon rounded-circle d-inline-flex justify-content-center align-items-center" onClick={handleShowPatients}>
                                <FontAwesomeIcon  icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                            </div>

                            <Patients show={showPatients} handleClose={handleClosePatients}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        }
        </div>

        </>
    );
}