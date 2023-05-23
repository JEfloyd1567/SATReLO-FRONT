import { FC, useEffect, useState } from "react";
import { SearchBox } from "../SearchBox/SearchBox"
import axios from "axios";

interface Props {
  target: 'all' | 'own';
  handleSearch: (event: string | null) => void;
}

export const TherapistPatientsHeader: FC<Props> = ({ handleSearch, target }) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const handleSearchTerm = (searchTerm: string | null) => {
    setSearchTerm(searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <>
      <div className="d-flex flex-column w-100">
        <div className="d-flex flex-column justify-content-start align-items-start align-items-sm-center flex-sm-row justify-content-sm-between">
          <h2 className="fw-bold">{(target === 'all')?'Todos los pacientes':'Mis pacientes'}</h2>
          <a href={`/${(target === 'all')?'MisPacientes':'TodosLosPacientes'}`} id="patients-header-link">{(target === 'all')?'Ver mis pacientes':'Todos los pacientes'}</a>
        </div>

       <div className="d-flex flex-row justify-content-end align-items-center" style={{height: '80px'}}>
          <SearchBox onSearch={handleSearchTerm} />
        </div>
      </div>
    </>
  )
}
