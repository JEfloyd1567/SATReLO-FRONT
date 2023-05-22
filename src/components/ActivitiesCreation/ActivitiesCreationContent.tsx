import { Image } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Row, Col } from "react-bootstrap";
import { faCheck, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react';
import './Activities.css';

export const ActivitiesCreationContent = () => {
    const [pressedButtons, setPressedButtons] = useState<string[]>([]);
    
    const [btn1, setBtn1] = useState(false);
    const [btn1R, setBtn1R] = useState("");

    const [btn2, setBtn2] = useState(false);
    const [btn2R, setBtn2R] = useState("");

    const [btn3, setBtn3] = useState(false);
    const [btn3R, setBtn3R] = useState("");

    const [btn4, setBtn4] = useState(false);
    const [btn4R, setBtn4R] = useState("");

    const [btn5, setBtn5] = useState(false);
    const [btn5R, setBtn5R] = useState("");

    const [btn6, setBtn6] = useState(false);
    const [btn6R, setBtn6R] = useState("");

    const handleClickA1 = (value:boolean, valuePress:string) => {
        if (btn1 == false){
            setBtn1(true);
            setBtn1R(valuePress);

        }else{
            setBtn1R(valuePress);
        }
        console.log(btn1R)
        console.log(pressedButtons)
    };

    const handleClickA2 = (value:boolean, valuePress:string) => {
        if (btn2 == false){
            setBtn2(true);
            setBtn2R(valuePress);

        }else{
            setBtn2R(valuePress);
        }
        console.log(btn2R)
        console.log(pressedButtons)
    };

    const handleClickA3 = (value:boolean, valuePress:string) => {
        if (btn3 == false){
            setBtn3(true);
            setBtn3R(valuePress);

        }else{
            setBtn3R(valuePress);
        }
        console.log(btn3R)
        console.log(pressedButtons)
    };

    const handleClickA4 = (value:boolean, valuePress:string) => {
        if (btn4 == false){
            setBtn4(true);
            setBtn4R(valuePress);

        }else{
            setBtn4R(valuePress);
        }
        console.log(btn4R)
        console.log(pressedButtons)
    };

    const handleClickA5 = (value:boolean, valuePress:string) => {
        if (btn5 == false){
            setBtn5(true);
            setBtn5R(valuePress);

        }else{
            setBtn5R(valuePress);
        }
        console.log(btn5R)
        console.log(pressedButtons)
    };

    const handleClickA6 = (value:boolean, valuePress:string) => {
        if (btn6 == false){
            setBtn6(true);
            setBtn6R(valuePress);

        }else{
            setBtn6R(valuePress);
        }
        console.log(btn6R)
        console.log(pressedButtons)
    };

    const handleClickAA = () => {
        setPressedButtons(pressedButtons.concat(btn1R, btn2R, btn3R, btn4R, btn5R, btn6R));
        console.log(pressedButtons);
        console.log(pressedButtons);
    };

    return(
        <>
            <div className="createActivities justify-content-center">
                <h6 className='createActivitiesTitle justify-content-center'>Asignar Actividad</h6>
                <div className='boxActivityPatient justify-content-center'>
                    <h6 className='boxActivityPatientTitle'>Paciente</h6>
                    <h6 className='boxActivityPatientName'>ID 234 - Juan Pepito Pérez</h6>
                </div>
                <div className='boxActivity1 justify-content-center'>
                    <h6 className='boxActivity1Title'>1. Categoría Semántica</h6>
                    <div className="btn-group" >
                        <button className='boxActivity1Btn1' onClick={() => handleClickA1(false, "1")}></button>
                        <button className='boxActivity1Btn2' onClick={() => handleClickA1(false, "2")}></button>
                        <button className='boxActivity1Btn3' onClick={() => handleClickA1(false, "3")}></button>
                        <button className='boxActivity1Btn4' onClick={() => handleClickA1(false,"4")}></button>
                        {btn1 == false ? ""
                            : <>
                                {btn1R == "1" ? <div className=' boxActivity1Btn1 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                : <>{btn1R == "2" ? <div className='boxActivity1Btn2 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                    : <>{btn1R == "3" ? <div className='boxActivity1Btn3 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                        : <div className='boxActivity1Btn4 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>}
                                        </>}
                                    </>
                                }
                            </>}
                    </div>
                </div>
                <div className='boxActivity2 justify-content-center'>
                    <h6 className='boxActivity2Title'>2. Subcategoría Semántica</h6>
                    <div className="btn-group">
                        <button className='boxActivity2Btn1' onClick={() => handleClickA2(false, "1")}></button>
                        <button className='boxActivity2Btn2' onClick={() => handleClickA2(false, "2")}></button>
                        <button className='boxActivity2Btn3' onClick={() => handleClickA2(false, "3")}></button>
                        <button className='boxActivity2Btn4' onClick={() => handleClickA2(false, "4")}></button>
                        {btn2 == false ? ""
                            : <>
                                {btn2R == "1" ? <div className=' boxActivity2Btn1 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                : <>{btn2R == "2" ? <div className='boxActivity2Btn2 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                    : <>{btn2R == "3" ? <div className='boxActivity2Btn3 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                        : <div className='boxActivity2Btn4 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>}
                                        </>}
                                    </>
                                }
                            </>}
                    </div>
                </div>
                <div className='boxActivity3 justify-content-center'>
                    <h6 className='boxActivity3Title'>3. Mecánica</h6>
                    <div className="btn-group">
                        <button className='boxActivity3Btn1' onClick={() => handleClickA3(false, "1")}>Secuencia</button>
                        <button className='boxActivity3Btn2' onClick={() => handleClickA3(false, "2")}>Memoria</button>
                        <button className='boxActivity3Btn3' onClick={() => handleClickA3(false, "3")}>Organizar</button>
                        {btn3 == false ? ""
                            : <>
                                {btn3R == "1" ? <div className=' boxActivity3Btn1 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                : <>{btn3R == "2" ? <div className='boxActivity3Btn2 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                    : <div className='boxActivity3Btn3 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>}
                                    </>
                                }
                            </>     }
                    </div>
                </div>
                <div className='boxActivity4 justify-content-center'>
                    <h6 className='boxActivity4Title'>4. Situación</h6>
                    <div className="btn-group">
                        <button className='boxActivity4Btn1' onClick={() => handleClickA4(false, "1")}></button>
                        <button className='boxActivity4Btn2' onClick={() => handleClickA4(false, "2")}></button>
                        <button className='boxActivity4Btn3' onClick={() => handleClickA4(false, "3")}></button>
                        <button className='boxActivity4Btn4' onClick={() => handleClickA4(false, "4")}></button>
                        <button className='boxActivity4Btn5' onClick={() => handleClickA4(false, "5")}></button>
                        <button className='boxActivity4Btn6' onClick={() => handleClickA4(false, "6")}></button>
                        <button className='boxActivity4Btn7' onClick={() => handleClickA4(false, "7")}></button>
                        <button className='boxActivity4Btn8' onClick={() => handleClickA4(false, "8")}></button>
                        {btn4        ? <FontAwesomeIcon className="checkmarkSelected" icon={faCheck} size="2xs" style={{color: "#ffffff",}} />
                        : ""     }
                    </div>
                </div>
                <div className='boxActivity5 justify-content-center'>
                    <h6 className='boxActivity5Title'>5. Tiempos Verbales</h6>
                    <div className="btn-group">
                        <button className='boxActivity5Btn1' onClick={() => handleClickA5(false, "Pasado")}>Pasado</button>
                        <button className='boxActivity5Btn2' onClick={() => handleClickA5(false, "Presente")}>Presente</button>
                        <button className='boxActivity5Btn3' onClick={() => handleClickA5(false, "Futuro")}>Futuro</button>
                        {btn5 == false ? ""
                            : <>
                                {btn5R == "Pasado" ? <div className=' boxActivity5Btn1 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                : <>{btn5R == "Presente" ? <div className='boxActivity5Btn2 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                    : <div className='boxActivity5Btn3 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>}
                                    </>
                                }
                            </>     }
                    </div>
                </div>
                <div className='boxActivity6 justify-content-center'>
                    <h6 className='boxActivity6Title'>6. Proceso Lector</h6>
                    <div className="btn-group">
                        <button className='boxActivity6Btn1' onClick={() => handleClickA6(false, "True")}>Si</button>
                        <button className='boxActivity6Btn2' onClick={() => handleClickA6(false, "False")}>No</button>
                            {btn6 == false ? ""
                            : <>
                                {btn6R == "True" ? <div className='boxActivity6Btn1 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                : <div className='boxActivity6Btn2 checked'><span className="checkmarkSelected"><FontAwesomeIcon icon={faCheck} size="sm" style={{color: "#ffffff",}} /></span></div>
                                }
                            </>     }
                    </div>
                </div>
                <button className='createActivityButton'>
                    <h6 className='createActivityButtonTitle' onClick={() => handleClickAA()}>Asignar actividad</h6>
                </button>
            </div>
        </>
    )
}