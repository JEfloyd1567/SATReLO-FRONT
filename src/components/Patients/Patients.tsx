import './Patients.css';
import React, {FC, useEffect, useState, } from "react";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import IsNotLastButton from './IsNotLastButton';
import './Patients.css';
import sol from '../../assets/images/sol.png';
import arbol from '../../assets/images/arbol.png';
import gato from '../../assets/images/gato.png';
import perro from '../../assets/images/perro.png';
import luna from '../../assets/images/luna.png';
import { ErrorToast } from '../Toasts/ErrorToast';
import { useAuthStore } from '../../hooks';

interface Props {
    show: boolean;
    handleClose: () => void;
    personalId: string;
}

const Patients: FC<Props> = ({ show, handleClose, personalId }) => {

    const [objButtons, setObjButtons] = useState([
        { className: "lunita", cssC: "css-lunita", image: luna, identifier: '1', value: 0 },
        { className: "arbolito", cssC: "css-arbolito", image: arbol, identifier: '2', value: 0 },
        { className: "solicito", cssC: "css-solicito", image: sol, identifier: '3', value: 0 },
        { className: "gatito", cssC: "css-gatito", image: gato, identifier: '4', value: 0 },
        { className: "perrito", cssC: "css-perrito", image: perro, identifier: '5', value: 0 },
    ]);

    const [pressedButtons, setPressedButtons] = useState(""); //combinación botones
    const [iconCount, setIconPress] = useState(1); //combinación botones
    const [showErrorMsgToast, setShowErrorMsgToast] = useState(false);
    const [errorMsgToast, setErrorMsgToast] = useState('');

    const {startLogin, errorMessage, status} = useAuthStore();

    const handleClick = (value:string) => {
        if( pressedButtons.length < 4 ){
            if ( pressedButtons[pressedButtons.length - 1] === value){
                setIconPress(iconCount - 1);
                setPressedButtons(pressedButtons.slice(0, -1));

                let objUpd = objButtons.find(ob => ob.identifier === value);
                if (objUpd !== undefined) {
                    objUpd.value = iconCount;
                    setObjButtons([...objButtons]);
                }
            } else {
                setIconPress(iconCount + 1);
                setPressedButtons(pressedButtons + value );

                let objUpd = objButtons.find(ob => ob.identifier === value);
                if (objUpd !== undefined) {
                    objUpd.value = iconCount;
                    setObjButtons([...objButtons]);
                }
            }
            
        } else {
            if ( pressedButtons[pressedButtons.length - 1] === value){
                setIconPress(iconCount - 1);
                setPressedButtons(pressedButtons.slice(0, -1));

                let objUpd = objButtons.find(ob => ob.identifier === value);
                if (objUpd !== undefined) {
                    objUpd.value = iconCount;
                    setObjButtons([...objButtons]);
                }
            } 
        }
    };

    const handleReset = () => {
        setObjButtons([
            { className: "lunita", cssC: "css-lunita", image: luna, identifier: '1', value: 0 },
            { className: "arbolito", cssC: "css-arbolito", image: arbol, identifier: '2', value: 0 },
            { className: "solicito", cssC: "css-solicito", image: sol, identifier: '3', value: 0 },
            { className: "gatito", cssC: "css-gatito", image: gato, identifier: '4', value: 0 },
            { className: "perrito", cssC: "css-perrito", image: perro, identifier: '5', value: 0 },
        ]);
        setPressedButtons("");
        setIconPress(1);
    };

    const handleCloseErrorMsgToast = () => {
        setShowErrorMsgToast(false);
    }

    const handleLoginBtnClick = () => {
        // setShowErrorMsgToast(true)
        if (pressedButtons === '') {
            setErrorMsgToast('Debes ingresar tu secuencia de imagenes');
            setShowErrorMsgToast(true)
            return
        }
        

        startLogin({username: personalId, password: pressedButtons});
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            setShowErrorMsgToast(true)
            setErrorMsgToast(errorMessage);
            return;
        }

        setShowErrorMsgToast(false)
        setErrorMsgToast('');
      
    }, [errorMessage])
    
    
    return(
        <Modal show={show} onHide={handleClose} className="new-modal align-items-center justify-content-center" backdrop="static" keyboard={true} centered >

            <Modal.Header
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    
                    }}
                >
                <Modal.Title style={{ fontFamily: 'Abel', fontStyle: 'normal', fontWeight: 400, fontSize: '32px', 
                lineHeight: '41px', textAlign: 'center', textTransform: 'uppercase' }}>
                    HOLA, NOMBRE 
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='d-inline-flex flex-column justify-content-center'>

                <h6 className="mb-3"> Selecciona las 4 imagenes que se te asignaron. Recuerda que el orden es importante. </h6>
                
                <div className='d-flex flex-column justify-content-center w-75 mx-auto' style={{height: "44px"}}>
                    {
                        showErrorMsgToast &&
                        <ErrorToast msg={errorMsgToast} handleCloseBtnClick={handleCloseErrorMsgToast} />
                    }
                </div>
                <form>
                    <Row gutter={2} className="justify-content-center">
                        <ToggleButtonGroup type="checkbox" defaultValue={[]} className="justify-content-center">
                            {objButtons.map((item,index)=> 
                                <Col className={item.className} xs={5} md={2} key={index}>
                                    <ToggleButton className={item.cssC} value={item.identifier} onClick={() => handleClick(item.identifier)} disabled={IsNotLastButton(pressedButtons, item.identifier)}>
                                            <Image src={item.image} style={{ width: '100%', height: '100%' }} rounded />
                                            <div className="num-Left">
                                                {pressedButtons.includes(item.identifier) && <span className="numero-presionado"> {item.value} </span>} 
                                            </div>
                                    </ToggleButton>
                                </Col>
                            )}
                        </ToggleButtonGroup>
                    </Row>
                    {/* inicio de sesión */}
                    <div className="init-Sesion mt-2">
                        <div className="text-center">
                            <Button variant="primary" className={`custom-btn ${(status==='checking')?'disabled':''}`} onClick={handleLoginBtnClick}>
                                {
                                    (status === 'checking') 
                                    ? (
                                        <div className="spinner-border text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    )
                                    : (
                                        'INICIAR SESIÓN'
                                    )
                                }
                            </Button>
                        </div>
                    </div>

                </form>
    
            </Modal.Body>

            <Modal.Footer
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    }}
            >


            {/* Cerrar*/}
            
            <div className="justify-content-center">
                <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => {handleClose(); handleReset();}}>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs"  /> Volver
                </Button>
            </div>
            </Modal.Footer>
        </Modal>
    );
};

export default Patients;