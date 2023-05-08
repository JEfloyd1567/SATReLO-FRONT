import { Image } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react';

export const ActivitiesCreationContent = () => {
    const [objButtons, setObjButtons] = useState([
        { className: "lunita", cssC: "css-lunita", image: "", identifier: '1', value: 0 },
        { className: "arbolito", cssC: "css-arbolito", image: "", identifier: '2', value: 0 },
        { className: "solicito", cssC: "css-solicito", image: "", identifier: '3', value: 0 },
        { className: "gatito", cssC: "css-gatito", image: "", identifier: '4', value: 0 },
        { className: "perrito", cssC: "css-perrito", image: "", identifier: '5', value: 0 },
    ]);

    const [pressedButtons, setPressedButtons] = useState(""); //combinación botones
    let [iconCount, setIconPress] = useState(1); //combinación botones
    return(
        <>
            <div className="createActivities">
                <div className='boxActivityPatient'></div>
                <div className='boxActivity1'></div>
                <div className='boxActivity2'></div>
                <div className='boxActivity3'></div>
                <div className='boxActivity4'></div>
                <div className='boxActivity5'></div>
                <div className='boxActivity6'></div>
                <div className='boxActivity7'></div>
                <button className='createActivityButton'></button>
            </div>
        </>
    )
}