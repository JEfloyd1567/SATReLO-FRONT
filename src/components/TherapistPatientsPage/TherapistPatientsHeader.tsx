import { FC } from "react";
import { SearchBox } from "../SearchBox/SearchBox"

interface Props {
  target: 'all' | 'own';
}

export const TherapistPatientsHeader: FC<Props> = ({target}) => {

  return (
    <>
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between align-items-center">
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
