import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Patients from "../Patients/Patients";
import './HomeLoginButton.css';

export const HomeLoginButton =()=>{

    const[clicked,setClicked] = useState(false)
    const hanndleButtonClick =()=>{
        setClicked(true)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                        <button className="buttonHome" type="submit" onClick={handleShow}>
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "white", width: "30px", height: "30px"}} />
                        </button>
                    </div>
                    <Patients show={show} handleClose={handleClose} />
                </div>
            </div>
            </>
        }
        </div>

        </>
    );
}