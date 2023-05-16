import { ButtonGroup, Image } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react';
import './Activities.css';

export const ActivitiesCreationContent = () => {
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

        setPressedButtons("");
        setIconPress(1);
    };

    const [pressedButtons, setPressedButtons] = useState(""); //combinación botones
    let [iconCount, setIconPress] = useState(1); //combinación botones
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
                    <ButtonGroup>
                        <button type="button" className='boxActivity1Btn1'></button>
                        <button className='boxActivity1Btn2'></button>
                        <button className='boxActivity1Btn3'></button>
                        <button className='boxActivity1Btn4'></button>
                    </ButtonGroup>
                </div>
                <div className='boxActivity2 justify-content-center'>
                    <h6 className='boxActivity2Title'>2. Subcategoría Semántica</h6>
                    <ButtonGroup>
                        <button className='boxActivity2Btn1'></button>
                        <button className='boxActivity2Btn2'></button>
                        <button className='boxActivity2Btn3'></button>
                        <button className='boxActivity2Btn4'></button>
                    </ButtonGroup>
                </div>
                <div className='boxActivity3 justify-content-center'>
                    <h6 className='boxActivity3Title'>3. Mecánica</h6>
                    <ButtonGroup>
                        <button className='boxActivity3Btn1'>Secuencia</button>
                        <button className='boxActivity3Btn2'>Memoria</button>
                        <button className='boxActivity3Btn3'>Organizar</button>
                    </ButtonGroup>
                </div>
                <div className='boxActivity4 justify-content-center'>
                    <h6 className='boxActivity4Title'>4. Situación</h6>
                    <ButtonGroup>
                        <button className='boxActivity4Btn1'></button>
                        <button className='boxActivity4Btn2'></button>
                        <button className='boxActivity4Btn3'></button>
                        <button className='boxActivity4Btn4'></button>
                        <button className='boxActivity4Btn5'></button>
                        <button className='boxActivity4Btn6'></button>
                        <button className='boxActivity4Btn7'></button>
                        <button className='boxActivity4Btn8'></button>
                    </ButtonGroup>
                </div>
                <div className='boxActivity5 justify-content-center'>
                    <h6 className='boxActivity5Title'>5. Tiempos Verbales</h6>
                    <ButtonGroup>
                        <button className='boxActivity5Btn1'>Pasado</button>
                        <button className='boxActivity5Btn2'>Presente</button>
                        <button className='boxActivity5Btn3'>Futuro</button>
                    </ButtonGroup>
                </div>
                <div className='boxActivity6 justify-content-center'>
                    <h6 className='boxActivity6Title'>6. Proceso Lector</h6>
                    <ButtonGroup>
                        <button className='boxActivity6Btn1'>Si</button>
                        <button className='boxActivity6Btn2'>No</button>
                    </ButtonGroup>
                </div>
                <button className='createActivityButton'>
                    <h6 className='createActivityButtonTitle'>Asignar actividad</h6>
                </button>
            </div>
        </>
    )
}