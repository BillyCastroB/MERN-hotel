import React from 'react'
import './NavegacionDark.css';
import { Link } from 'react-router-dom';
export const NavegacionDark = () => {
  return (
    <>
        <header>
        <div className="cabecera-navegacion">
            <div className="logo">
                <img className="img-logo" src="./imagenesPaginas/logo-negro.png" alt="logo"/>
            </div>
            <nav className="navegacion">
                <Link to={'/'} className='enlace enlace-contacto'>
                    INICIO
                </Link>
                <Link to={'/habitaciones'} className='enlace enlace-contacto'>
                    Habitaciones
                </Link>
                <Link to={'/contacto'} className='enlace enlace-contacto'>
                    Contacto
                </Link>
                <Link to={'/admin'} className='enlace enlace-contacto'>
                    <button className='btn-admin'><img className='icono-admin' src="./imagenesPaginas/icono-admin.png" alt="" /></button>
                </Link>
            </nav>
        </div>
    </header>
    </>
  )
}
