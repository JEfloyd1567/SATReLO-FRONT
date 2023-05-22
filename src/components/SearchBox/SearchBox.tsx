import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SearchBox.css"

interface Props {
  onSearch: (searchTerm: string | null) => void;
}

export const SearchBox: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm.trim() !== "" ? newSearchTerm : null);
  };

  const handleInputBlur = () => {
    if (searchTerm.trim() === "") {
      setSearchTerm("");
      onSearch(null);
    }
  };

  return (
    <>
      <div className="input-group col justify-content-end align-items-center">
        <div className="me-3 d-none d-sm-flex">Buscar paciente:</div>
        <input
          className="rounded-pill inputBusqueda"
          type="text"
          placeholder="Nombre paciente"
          maxLength={30}
          value={searchTerm}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <button className="SearchButton rounded-circle d-inline-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "white", backgroundColor: "#FF673B" }}
            size={"lg"}
          />
          <span className="search-button-text">Buscar</span>
        </button>
      </div>
    </>
  );
};