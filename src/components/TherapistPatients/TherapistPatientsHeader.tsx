import { FC, useEffect, useState } from "react";
import { SearchBox } from "../SearchBox/SearchBox"
import axios from "axios";

interface Props {
  target: 'all' | 'own';
}

export const TherapistPatientsHeader: FC<Props> = ({target}) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]); 

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`/search?term=${searchTerm}`); 
        const results = response.data.results; 
        setSearchResults(results);
      } catch (error) {
        console.log("Error fetching search results:", error);
      }
    };
    if (searchTerm !== "") {
      fetchSearchResults();
    }
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="d-flex flex-column w-100">
        <div className="d-flex flex-column justify-content-start align-items-start align-items-sm-center flex-sm-row justify-content-sm-between">
          <h2 className="fw-bold">{(target === 'all')?'Todos los pacientes':'Mis pacientes'}</h2>
          <a href={`/${(target === 'all')?'MisPacientes':'TodosLosPacientes'}`}>{(target === 'all')?'Ver mis pacientes':'Todos los pacientes'}</a>
        </div>

        <div className="d-flex flex-row justify-content-end align-items-center" style={{height: '80px'}}>
          <SearchBox />
        </div>
      </div>
    </>
  )
}
