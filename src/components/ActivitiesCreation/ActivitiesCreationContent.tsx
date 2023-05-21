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

    const [activity1BTN, setActivity1BTN] = useState([
        { className: "boxActivity1Btn1", image: "", identifier: '1', value: false },
        { className: "boxActivity1Btn2", image: "", identifier: '2', value: false },
        { className: "boxActivity1Btn3", image: "", identifier: '3', value: false },
        { className: "boxActivity1Btn4", image: "", identifier: '4', value: false },
    ]);
    
    const [activity2BTN, setActivity2BTN] = useState([
        { className: "boxActivity2Btn1", image: "", identifier: '1', value: false },
        { className: "boxActivity2Btn2", image: "", identifier: '2', value: false },
        { className: "boxActivity2Btn3", image: "", identifier: '3', value: false },
        { className: "boxActivity2Btn4", image: "", identifier: '4', value: false },
    ]);

    const [activity3BTN, setActivity3BTN] = useState([
        { className: "boxActivity3Btn1", image: "", identifier: '1', value: false },
        { className: "boxActivity3Btn2", image: "", identifier: '2', value: false },
        { className: "boxActivity3Btn3", image: "", identifier: '3', value: false },
    ]);

    const [activity4BTN, setActivity4BTN] = useState([
        { className: "boxActivity4Btn1", image: "", identifier: '1', value: false },
        { className: "boxActivity4Btn2", image: "", identifier: '2', value: false },
        { className: "boxActivity4Btn3", image: "", identifier: '3', value: false },
        { className: "boxActivity4Btn4", image: "", identifier: '4', value: false },
        { className: "boxActivity4Btn5", image: "", identifier: '5', value: false },
        { className: "boxActivity4Btn6", image: "", identifier: '6', value: false },
        { className: "boxActivity4Btn7", image: "", identifier: '7', value: false },
        { className: "boxActivity4Btn8", image: "", identifier: '8', value: false },
    ]);

    const [activity5BTN, setActivity5BTN] = useState([
        { className: "boxActivity5Btn1", image: "", identifier: 'Pasado', value: false },
        { className: "boxActivity5Btn2", image: "", identifier: 'Presente', value: false },
        { className: "boxActivity5Btn3", image: "", identifier: 'Futuro', value: false },
    ]);

    const [activity6BTN, setActivity6BTN] = useState([
        { className: "boxActivity6Btn1", image: "", identifier: 'Si', value: false },
        { className: "boxActivity6Btn2", image: "", identifier: 'No', value: false },
    ]);

    const handleReset = () => {
        setActivity1BTN([
            { className: "boxActivity1Btn1", image: "", identifier: '1', value: false },
            { className: "boxActivity1Btn2", image: "", identifier: '2', value: false },
            { className: "boxActivity1Btn3", image: "", identifier: '3', value: false },
            { className: "boxActivity1Btn4", image: "", identifier: '4', value: false },
        ]);

        setActivity2BTN([
            { className: "boxActivity2Btn1", image: "", identifier: '1', value: false },
            { className: "boxActivity2Btn2", image: "", identifier: '2', value: false },
            { className: "boxActivity2Btn3", image: "", identifier: '3', value: false },
            { className: "boxActivity2Btn4", image: "", identifier: '4', value: false },
        ]);

        setActivity3BTN([
            { className: "boxActivity3Btn1", image: "", identifier: '1', value: false },
            { className: "boxActivity3Btn2", image: "", identifier: '2', value: false },
            { className: "boxActivity3Btn3", image: "", identifier: '3', value: false },
        ]);

        setActivity4BTN([
            { className: "boxActivity4Btn1", image: "", identifier: '1', value: false },
            { className: "boxActivity4Btn2", image: "", identifier: '2', value: false },
            { className: "boxActivity4Btn3", image: "", identifier: '3', value: false },
            { className: "boxActivity4Btn4", image: "", identifier: '4', value: false },
            { className: "boxActivity4Btn5", image: "", identifier: '5', value: false },
            { className: "boxActivity4Btn6", image: "", identifier: '6', value: false },
            { className: "boxActivity4Btn7", image: "", identifier: '7', value: false },
            { className: "boxActivity4Btn8", image: "", identifier: '8', value: false },
        ]);

        setActivity5BTN([
            { className: "boxActivity5Btn1", image: "", identifier: 'Pasado', value: false },
            { className: "boxActivity5Btn2", image: "", identifier: 'Presente', value: false },
            { className: "boxActivity5Btn3", image: "", identifier: 'Futuro', value: false },
        ]);

        setActivity6BTN([
            { className: "boxActivity6Btn1", image: "", identifier: 'True', value: false },
            { className: "boxActivity6Btn2", image: "", identifier: 'False', value: false },
        ]);
    };

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
        if (btn1 == false){
            setBtn2(true);
            setBtn2R(valuePress);

        }else{
            setBtn2R(valuePress);
        }
        console.log(btn2R)
        console.log(pressedButtons)
    };

    const handleClickA3 = (value:boolean, valuePress:string) => {
        if (btn1 == false){
            setBtn3(true);
            setBtn3R(valuePress);

        }else{
            setBtn3R(valuePress);
        }
        console.log(btn3R)
        console.log(pressedButtons)
    };

    const handleClickA4 = (value:boolean, valuePress:string) => {
        if (btn1 == false){
            setBtn4(true);
            setBtn4R(valuePress);

        }else{
            setBtn4R(valuePress);
        }
        console.log(btn4R)
        console.log(pressedButtons)
    };

    const handleClickA5 = (value:boolean, valuePress:string) => {
        if (btn1 == false){
            setBtn5(true);
            setBtn5R(valuePress);

        }else{
            setBtn5R(valuePress);
        }
        console.log(btn5R)
        console.log(pressedButtons)
    };

    const handleClickA6 = (value:boolean, valuePress:string) => {
        if (btn1 == false){
            setBtn6(true);
            setBtn6R(valuePress);

        }else{
            setBtn6R(valuePress);
        }
        console.log(btn6R)
        console.log(pressedButtons)
    };

    const handleClickAA = () => {
        setPressedButtons([...pressedButtons, btn1R]);
        setPressedButtons([...pressedButtons, btn2R]);
        setPressedButtons([...pressedButtons, btn3R]);
        setPressedButtons([...pressedButtons, btn4R]);
        setPressedButtons([...pressedButtons, btn5R]);
        setPressedButtons([...pressedButtons, btn6R]);
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
                        {btn1        ? <FontAwesomeIcon icon={faCheck} />
                        : ""     }
                    </div>
                </div>
                <div className='boxActivity2 justify-content-center'>
                    <h6 className='boxActivity2Title'>2. Subcategoría Semántica</h6>
                    <div className="btn-group">
                        <button className='boxActivity2Btn1' onClick={() => handleClickA2(false, "1")}></button>
                        <button className='boxActivity2Btn2' onClick={() => handleClickA2(false, "2")}></button>
                        <button className='boxActivity2Btn3' onClick={() => handleClickA2(false, "3")}></button>
                        <button className='boxActivity2Btn4' onClick={() => handleClickA2(false, "4")}></button>
                    </div>
                </div>
                <div className='boxActivity3 justify-content-center'>
                    <h6 className='boxActivity3Title'>3. Mecánica</h6>
                    <div className="btn-group">
                        <button className='boxActivity3Btn1' onClick={() => handleClickA3(false, "1")}>Secuencia</button>
                        <button className='boxActivity3Btn2' onClick={() => handleClickA3(false, "2")}>Memoria</button>
                        <button className='boxActivity3Btn3' onClick={() => handleClickA3(false, "3")}>Organizar</button>
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
                    </div>
                </div>
                <div className='boxActivity5 justify-content-center'>
                    <h6 className='boxActivity5Title'>5. Tiempos Verbales</h6>
                    <div className="btn-group">
                        <button className='boxActivity5Btn1' onClick={() => handleClickA5(false, "Pasado")}>Pasado</button>
                        <button className='boxActivity5Btn2' onClick={() => handleClickA5(false, "Presente")}>Presente</button>
                        <button className='boxActivity5Btn3' onClick={() => handleClickA5(false, "Futuro")}>Futuro</button>
                    </div>
                </div>
                <div className='boxActivity6 justify-content-center'>
                    <h6 className='boxActivity6Title'>6. Proceso Lector</h6>
                    <div className="btn-group">
                        <button className='boxActivity6Btn1' onClick={() => handleClickA6(false, "True")}>Si</button>
                        <button className='boxActivity6Btn2' onClick={() => handleClickA6(false, "False")}>No</button>
                    </div>
                </div>
                <button className='createActivityButton'>
                    <h6 className='createActivityButtonTitle' onClick={() => handleClickAA()}>Asignar actividad</h6>
                </button>
            </div>
        </>
    )
}