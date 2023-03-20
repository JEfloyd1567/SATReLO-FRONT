import { FC } from "react";
import SatreloImg from '../assets/images/satrelo_logo.png'

const Navigation = [ 
  {name: 'Inicio', href: '#'},
  {name: 'Contacto', href: '#'}
]

interface Props {
  currentPage?: string;
}

export const Navbar: FC<Props> = ({currentPage = ''}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white pt-5 border">
      <div className="container fluid align-items-end me-auto">
        <a href="#" className="navbar-brand">
          <img src={SatreloImg}
          height='50'
          alt="Satrelo Logo"
          />
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {
              Navigation.map(({name, href}) => ( 
                <li className="nav-item">
                  <a href={href} className={`nav-link text-primary fw-bold ${currentPage === name && 'active'}`}>{name}</a>
                </li>   
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
