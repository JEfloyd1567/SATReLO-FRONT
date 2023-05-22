import { ChangeEvent, useEffect, useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Therapist from "../TherapistModal/Therapist";
import Patients from "../Patients/Patients";
import { ErrorToast } from "../Toasts/ErrorToast";
import { useAuthStore } from '../../hooks/useAuthSlice';

export const HomeLoginButton =()=>{
    const [clicked,setClicked] = useState(false)
    const [showTherapistModal, setShowTherapistModal] = useState(false);
    const [showPatientsModal, setShowPatientsModal] = useState(false);
    const [toastErrorMessage, setToastErrorMessage] = useState('')

    const [inputValue, setInputValue] = useState('');
    const [showErrorToast, setShowErrorToast] = useState(false);

    const {startCheckingRole, startLogout, status, errorMessage} = useAuthStore();

    const handleLoginBtnClick = () => setClicked(true)

    const handleCloseModal = () => {
        startLogout();
        setShowTherapistModal(false);
        setShowPatientsModal(false);
    }

    const handleIdBtnClick = async () => {

        if (inputValue === '') {
            setToastErrorMessage('Debe ingresar una identificación válida')
            setShowErrorToast(true);
            return
        }

        setShowErrorToast(false);

        await startCheckingRole(inputValue);

        const userRole = localStorage.getItem('user_role')

        if (userRole === 'therapist') return setShowTherapistModal(true)
        if (userRole === 'patient') return setShowPatientsModal(true)
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        handleCloseErrorToast();
        setInputValue(value);
    }

    const handleCloseErrorToast = () => {
        setShowErrorToast(false);
        startLogout();
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            setShowErrorToast(true);
            setToastErrorMessage(errorMessage);
            return;
        }
        setShowErrorToast(false);
        setToastErrorMessage('');
    }, [errorMessage])

    return(
        <>
        <div className="d-flex h-100 align-items-end pb-5">
        {
            (!clicked)?
            <button className="btn rounded-pill botonNoClicked " onClick={handleLoginBtnClick}>INICIAR SESIÓN</button>
            :

            <div className="d-flex flex-column justify-content-start ">
                <div className="d-flex">
                {
                    showErrorToast &&
                    <ErrorToast msg={toastErrorMessage} handleCloseBtnClick={handleCloseErrorToast} />
                }
                </div>
                <div className="d-flex ">
                    <input className="rounded-pill inputClicked " id="home-personalId" type="text" value={inputValue} onChange={handleInputChange} placeholder="IDENTIFICACIÓN" maxLength={20} ></input>
                    <div className="d-inline-flex">
                        <button className={`clickedBackgroundIcon border-0 rounded-circle d-inline-flex justify-content-center align-items-center h-auto ${(status==='checking')?'disabled':''}`}  onClick={handleIdBtnClick} id="home-arrow-btn">
                            {
                                (status === 'checking')
                                ?(
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                )
                                : (
                                    <FontAwesomeIcon  icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                                )
                            }
                        </button>
                        <Therapist show={showTherapistModal} handleClose={handleCloseModal} personalId={inputValue} />
                        <Patients show={showPatientsModal} handleClose={handleCloseModal} personalId={inputValue}/>

                        </div>
                </div>
            </div>
        }
        </div>
        </>
    );
}