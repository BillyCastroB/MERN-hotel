import React from 'react'
import './Portada.css';
export const Portada = () => {
  return (
    <>
        <div className="hero">
            <img className='fondo-portada' src="./imagenesPaginas/hotel-portada.webp" alt="" />
            <img src="./imagenesPaginas/logo-blanco.png" alt="" />
            <div className='degradado'>
              HOTEL EL PALOMAR
              <p>SISTEMA WEB</p>
            </div>
        </div>
    </>
  )
}
