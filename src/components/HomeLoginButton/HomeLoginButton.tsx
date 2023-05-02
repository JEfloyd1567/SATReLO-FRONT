import { ChangeEvent, useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Therapist from "../TherapistModal/Therapist";
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
        <div className="d-flex h-100 align-items-end pb-5">
        {
            (!clicked)?
            <button className="btn rounded-pill botonNoClicked " onClick={handleButtonClick}>INICIAR SESIÓN</button>
            :

            <div className="d-flex flex-column justify-content-start ">
                <div className="d-flex">
                {
                    showErrorToast &&
                    <ErrorToast msg="Debe ingresar una identificacion valida" handleCloseBtnClick={handleCloseErrorToast} />
                }
                </div>
                <div className="d-flex ">
                    <input className="rounded-pill inputClicked " type="text" value={inputValue} onChange={handleInputChange} placeholder="IDENTIFICACIÓN" maxLength={10} ></input>
                    <div className="d-inline-flex">
                        <div className="clickedBackgroundIcon rounded-circle d-inline-flex justify-content-center align-items-center h-auto" onClick={handleShow}>
                            <FontAwesomeIcon  icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                        </div>
                        <Therapist show={show} handleClose={handleClose} identification={inputValue} />

                        {/* <div className="clickedBackgroundIcon rounded-circle d-inline-flex justify-content-center align-items-center" onClick={handleShowPatients}>
                            <FontAwesomeIcon  icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                        </div> 

                        <Patients show={showPatients} handleClose={handleClosePatients}/> */}
                    </div>
                </div>
                
            </div>
        }
        </div>

        </>
    );
}