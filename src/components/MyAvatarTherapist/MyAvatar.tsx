import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCamera, faFloppyDisk, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { useState } from 'react';


export const MyAvatar = () => {
    
    const [avatar, setAvatar] = useState(faCircleUser);
    const [avatarUrl, setAvatarUrl] = useState('');


    const handleAvatarChange = (event:any) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.name.endsWith('.jpg')) {
            const url = URL.createObjectURL(selectedFile);
            setAvatarUrl(url);
        } else {
            alert('Solo se permiten archivos JPG.');
            event.target.value = null;
        }
    };

    return(
       
        <Container className="mi-contenedor-Therapist">
            <div className="container-title-Therapist">
            <h2 className="title-Therapist">Selecciona un avatar para tu perfil</h2>
            </div>

            <div className="container-Info-Therapist">
                <div className="info-therapist-Newavatar">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt="Avatar" />
                    ) : (
                        <FontAwesomeIcon icon={avatar} className="text-primary" size='10x' />
                    )}
                    <br></br>
                    <label htmlFor="avatar-input">
                        <div className="">
                            <br></br>
                            <FontAwesomeIcon icon={faUpload} style={{ fontSize: "24px" }} /> Sube tu avatar
                        </div>
                    </label>
                    <input
                        type="file"
                        id="avatar-input"
                        accept=".jpg"
                        onChange={handleAvatarChange}
                        style={{ display: 'none' }}
                    />
                </div>



                <div>
                    <a href="/MisPacientes">
                        <button className="info-therapist-button">
                            <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
                        </button>
                    </a>                    
                    
                </div>
            </div>
            
        </Container>        
  
    );
};