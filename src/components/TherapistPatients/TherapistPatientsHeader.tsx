import { FC } from "react";
import { SearchBox } from "../SearchBox/SearchBox"

interface Props {
  target: 'all' | 'own';
}

export const TherapistPatientsHeader: FC<Props> = ({target}) => {

  return (
    <>
      <div className="d-flex flex-column w-100">
        <div className="d-flex flex-column justify-content-start align-items-start align-items-sm-center flex-sm-row justify-content-sm-between">
          <h2 className="fw-bold">{(target === 'all')?'Todos los pacientes':'Mis pacientes'}</h2>
          <a href={`/${(target === 'all')?'MisPacientes':'TodosLosPacientes'}`} id="patients-header-link">{(target === 'all')?'Ver mis pacientes':'Todos los pacientes'}</a>
        </div>

        <div className="d-flex flex-row justify-content-end align-items-center" style={{height: '80px'}} id="patients-searchbox">
          <SearchBox />
        </div>
      </div>
    </>
  )
}
