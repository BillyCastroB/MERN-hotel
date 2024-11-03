import React from 'react'
import './Reserva.css';
export const Reserva = ({id, habitacion, nombre, apellidos,telefono, email, fechaInicio, fechaFin, total}) => {
  return (
    <>
        <p className='propiedad'>{id}</p>
        <p className='propiedad'>{habitacion}</p>
        <p className='propiedad'>{nombre}</p>
        <p className='propiedad'>{apellidos}</p>
        <p className='propiedad'>{telefono}</p>
        <p className='propiedad'>{email}</p>
        <p className='propiedad'>{fechaInicio}</p>
        <p className='propiedad'>{fechaFin}</p>
        <p className='propiedad'>{total}</p>
        <div className='btns-crud'>
            <button className='btn-editar-reserva btn-editar'>Editar</button>
            <button className='btn-editar-reserva btn-eliminar'>Eliminar</button>
        </div>
    </>
  )
}
