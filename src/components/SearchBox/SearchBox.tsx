import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SearchBox.css"

export const SearchBox =()=>{
    const[clicked,setClicked] = useState(false)
    const hanndleButtonClick =()=>{
        setClicked(true)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
         <div className="d-flex justify-content-between">
            <h3 className="TodosLosPacientes" >Todos los pacientes</h3>
            <a href="#" className="ms-auto">Ver mis pacientes</a>
        </div>
        <div className="input-group col justify-content-end align-items-center">
            <div className="BuscarPaciente">buscar paciente:</div>
                <input className="rounded-pill inputBusqueda" type="text" placeholder="" maxLength={30} />
                <div className="SearchButton rounded-circle d-inline-flex justify-content-center align-items-center" onClick={handleShow}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", width: "30px", height: "30px", backgroundColor: "#FF673B" }} />
                    <span className="search-button-text">Buscar</span>
                </div>
        </div>   
    </>
    );
}