import { FC } from "react";

import Satrelo from '../../assets/images/satrelo_logo.png';
import { UserAvatar } from "../UserAvatar/UserAvatar";
import './Navbar.css';
import { useAuthStore } from '../../hooks/useAuthSlice';

const Navigation = [ 
  {name: 'Inicio', href: '/', id: 'navbar-item-inicio'},
  {name: 'Contacto', href: '/', id: 'navbar-item-contacto'},
]

interface Props {
  currentPage?: string;
}

export const Navbar: FC<Props> = ({currentPage = ''}) => {
  const {status, user, startLogout} = useAuthStore();

  const handleLogoutClick = () => {
    startLogout();
  }

  const role = localStorage.getItem('user_role');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white pt-5 border">
      <div className="container fluid align-items-end me-auto">
        <a href="/" className="navbar-brand" id="navbar-logo">
          <img src={Satrelo}
          height='50'
          alt="Satrelo Logo"
          id="navbar-logo-img"
          />
        </a>
        <div className="collapse navbar-collapse justify-content-end align-self-end">
          <ul className="navbar-nav">
              {
                Navigation.map(({name, href, id}) => ( 
                  <li className="nav-item" key={name}>
                    <a href={href} id={id} className={`nav-link text-primary fw-bold ${currentPage === name && 'active'}`}>{name}</a>
                  </li>   
                ))
              }

              {
                (status === 'authenticated') &&
                <>
                  <li className="nav-item">
                    <a href={`${role === 'therapist'?'/MiPerfil':'/PatientProfile'}`} className={`nav-link text-primary fw-bold active`} id="navbar-item-username">{user?.name}</a>
                  </li>

                  <UserAvatar />

                  <li className="nav-item">
                    <a href='/' className={`nav-link text-primary fw-bold `} onClick={handleLogoutClick} id="navbar-item-salir" >Salir</a>
                  </li>
                </>
              }
          </ul>
        </div>
      </div>
    </nav>
  )
}
