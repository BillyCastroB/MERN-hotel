import React from 'react'
import './Reserva.css';
export const Reserva = ({habitacion, nombre, apellidos, fechaInicio, fechaFin}) => {
  return (
    <>
        <div>{habitacion}</div>
        <div>{nombre}</div>
        <div>{apellidos}</div>
        <div>901202020</div>
        <div>{fechaInicio}</div>
        <div>{fechaFin}</div>
        <div>
            <button className='btn-editar-reserva'>Editar</button>
        </div>
    </>
  )
}
