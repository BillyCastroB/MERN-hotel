import React from 'react';
import './Reserva.css';

export const Reserva = ({ id, datosHuesped, fechas, total, manejarEditar, manejarEliminar }) => {
  const nombre = datosHuesped?.nombre || "";
  const apellidos = datosHuesped?.apellidos || "";
  const telefono = datosHuesped?.telefono || "";
  const email = datosHuesped?.email || "";
  const fechaInicio = fechas?.fechaInicio || "";
  const fechaFin = fechas?.fechaFin || "";
  const total2 = total !== undefined && !isNaN(total) ? total.toFixed(2) : "0.00";

  return (
    <>
      <p className='propiedad'>{id}</p>
      <p className='propiedad'>{nombre}</p>
      <p className='propiedad'>{apellidos}</p>
      <p className='propiedad'>{telefono}</p>
      <p className='propiedad'>{email}</p>
      <p className='propiedad'>{fechaInicio}</p>
      <p className='propiedad'>{fechaFin}</p>
      <p className='propiedad'>S/{total2 }</p>
      <div className='btns-crud'>
        <button 
          onClick={() => manejarEditar(id)} 
          className={nombre ? 'btn-editar-reserva btn-editar' : 'btn-editar-reserva btn-crear'}
        >
          {nombre ? 'Editar' : 'Crear'}
        </button>
        <button onClick={() => manejarEliminar(id)} className='btn-editar-reserva btn-eliminar'>Eliminar</button>
      </div>
    </>
  );
};
