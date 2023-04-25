import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { MyAvatar } from '../MyAvatarTherapist/MyAvatar';
import { ErrorToast } from '../Toasts/ErrorToast';
import { ChangeEvent, useState } from 'react';
import { useAuthStore } from '../../hooks/useAuthSlice';
import { IUserLogin } from '../../interfaces/users';

const Therapist = ({ show, handleClose }: {show:any; handleClose:any}) => {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [inputPassword, setInputPassword] = useState('');

    const {startLogin} = useAuthStore();

    function handleReset() {
        throw new Error('Function not implemented.');
    }

    const handleCloseToast = () => setShowErrorToast(false);

    const handleInputPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputPassword(value);
    }

    const handleLoginBtnClick = () => {
        if (inputPassword === '') {
            setShowErrorToast(true);
            return;
        }

        const credentials: IUserLogin = {
            username: 'sebastian',
            password: '111111'
        }

        startLogin(credentials);
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

                <Modal.Body className='d-inline-flex flex-column justify-content-center'>
                        {/* inicio de sesión */}
                        
                        <div className='d-flex flex-column justify-content-center w-75 mx-auto' style={{minHeight: "64px"}}>
                            {
                                showErrorToast && 
                                <ErrorToast msg='Contrasena invalida' handleCloseBtnClick={handleCloseToast} />
                            }
                        </div>

                        <div className='align-self-baseline'>
                            <input className='rounded-pill inputClickedTera mb-3' type="password" value={inputPassword} onChange={handleInputPasswordChange} name="password" placeholder="CONTRASEÑA" maxLength={10}/>
                            <Button variant="primary" onClick={handleLoginBtnClick} className="custom-btnT">INICIAR SESIÓN</Button>
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