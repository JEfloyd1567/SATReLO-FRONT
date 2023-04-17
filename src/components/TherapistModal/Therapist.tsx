import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { MyAvatar } from '../MyAvatarTherapist/MyAvatar';

const Therapist = ({ show, handleClose }: {show:any; handleClose:any}) => {
  function handleReset() {
    throw new Error('Function not implemented.');
  }

  return (
    <Modal show={show} onHide={handleClose} className="new-modalT align-items-center justify-content-center" backdrop="static" keyboard={false} centered >

            <Modal.Header
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    
                    
                    }}
                >
                <Modal.Title style={{ fontFamily: 'Abel', fontStyle: 'normal', fontWeight: 400, fontSize: '32px', 
                lineHeight: '41px', textAlign: 'center', textTransform: 'uppercase'}}>
                    HOLA, TERAPEUTA 
                </Modal.Title>

                
            </Modal.Header>

            <Modal.Body>
                <br></br>
                    {/* inicio de sesión */}
                    <div className="init-Sesion">
                        <div className="text-center">
                            <input className='rounded-pill inputClickedTera' type="password" name="password" placeholder="CONTRASEÑA" maxLength={10}/>
                            </div>
                            <br></br>
                            <div className="text-center">
                                <a href='/Avatar'>
                                    <Button variant="primary" className="custom-btnT">
                                        INICIAR SESIÓN
                                    </Button>
                                </a>
                        </div>
                    </div>    
            </Modal.Body>

            <Modal.Footer
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    }}>

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

export default Therapist;