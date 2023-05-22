import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCamera, faFloppyDisk, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { FC, useState } from 'react';
import { ItherapistUser } from "../../interfaces";
import satreloUsersAPI from "../../api/satreloUsersAPI";
import axios from "axios";

interface Props {
    therapist: ItherapistUser;
}

export const TherapistProfile:  FC<Props> = ({ therapist }) => {
    const [error, setError] = useState("");
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(therapist.name);
    const [email, setEmail] = useState(therapist.email);
    const [especialidad, setEspecialidad] = useState("Terapeuta");
    const [contacto, setContacto] = useState(therapist.phone);
    
    const handleEditClick = () => {
        setEditing(true);
    };

    const handlePutRequest = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }
            satreloUsersAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const response = await satreloUsersAPI.put("/therapist/profile", {
                name: name,
                email: email,
                phone: contacto
          });

        } catch (error) {
          if (axios.isAxiosError(error)) {
            const { message } = error.response?.data;
            console.log(message);
          } else {
            console.log(error);
          }
        }
        setEditing(false);
      };

    return(
       
        <Container className="mi-contenedor-Therapist">
            <div className="container-title-Therapist">
            <h2 className="title-Therapist">Perfil de terapeuta</h2>
            </div>

            <div className="container-Info-Therapist">
                <div className="info-therapist-title">
                    <h6  className="info-therapist-titleh6">Información personal</h6>
                </div>

                <div className="info-therapist-avatar"> 
                    <FontAwesomeIcon icon={faCircleUser} className="text-primary" size='10x' /> 
                    <div className="iconCamera" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faCamera} style={{ fontSize: '24px' }} />
                    </div>
                </div>

                {editing ? (
                    <div className="info-therapist-info">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" value={especialidad} readOnly />
                        <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} maxLength={10}  />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    ) : (
                    <div className="info-therapist-info">
                        <p className="info-therapist-p">Nombre: {name}</p>
                        <p className="info-therapist-p">Especialidad: {especialidad}</p>
                        <p className="info-therapist-p">Número de contacto: {contacto}</p>
                        <p className="info-therapist-p">Email: {email}</p>
                    </div>
                )}

                <div>
                    {editing ? (
                        <button className="info-therapist-button" onClick={handlePutRequest}>
                            <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
                        </button>
                    ) : (
                        <button className="info-therapist-button" onClick={handleEditClick}>
                            <FontAwesomeIcon icon={faPen} /> Editar
                        </button>
                    )}
                </div>
            </div>
            
        </Container>        
  
    );
};