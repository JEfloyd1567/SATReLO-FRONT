import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { ErrorToast } from '../Toasts/ErrorToast';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAuthStore } from '../../hooks/useAuthSlice';
import { IUserLogin } from '../../interfaces/users';

interface Props {
    show: boolean;
    handleClose: () => void;
    personalId: string;
}

const Therapist: FC<Props> = ({ show, handleClose, personalId }) => {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [inputPassword,  setInputPassword] = useState('');
    const [toastErrorMessage, setToastErrorMessage] = useState('')

    const {startLogin, errorMessage, status} = useAuthStore();

    function handleReset() {
        setShowErrorToast(false);
        setToastErrorMessage('');
        setInputPassword('');
    }

    const handleCloseToast = () => {
        setShowErrorToast(false);
        setToastErrorMessage('');
    }

    const handleInputPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputPassword(value);
    }

    const handleLoginBtnClick = () => {
        if (inputPassword === '') {
            setToastErrorMessage('Debe ingresar su contraseña');
            setShowErrorToast(true);
            return;
        }

        startLogin({username: personalId, password: inputPassword});
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
    

    return (
        <Modal show={show} onHide={handleClose} className="new-modalT align-items-center justify-content-center" backdrop="static" keyboard={true} centered >

                <Modal.Header
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "none",
                        
                        
                        }}
                        id="therapist-modal"
                        className='mb-0'
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
                                <ErrorToast msg={toastErrorMessage} handleCloseBtnClick={handleCloseToast} />
                            }
                        </div>

                        <div className='align-self-baseline'>
                            <input className='rounded-pill inputClickedTera mb-3' type="password" value={inputPassword} onChange={handleInputPasswordChange} name="password" placeholder="CONTRASEÑA" maxLength={10} id="therapist-modal-password" />
                            <Button variant="primary" onClick={handleLoginBtnClick} className={`custom-btnT ${(status==='checking')?'disabled':''}`} id="therapist-modal-login-btn" >
                                {/* INICIAR SESIÓN */}
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