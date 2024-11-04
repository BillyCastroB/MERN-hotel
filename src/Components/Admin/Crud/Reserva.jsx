import React from 'react'
import './Reserva.css';
export const Reserva = ({id, habitacion, nombre, apellidos,telefono, email, fechaInicio, fechaFin, total}) => {

  const editarFila = ()=>{
    console.log(`leendo datos para editar de la fila ${id}`);
  }
  const leerFila = ()=>{
    console.log(`leendo datos de la fila ${id}`);
  }
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
            <button onClick={editarFila} className='btn-editar-reserva btn-editar'>Editar</button>
            <button onClick={leerFila} className='btn-editar-reserva btn-eliminar'>Eliminar</button>
        </div>
    </>
  )
}
