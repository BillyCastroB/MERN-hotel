import React from 'react';
import './Reserva.css';

export const Reserva = ({ id, datosHuesped, fechas, manejarEditar, manejarEliminar }) => {
  // Verificar si datosHuesped y fechas están definidos antes de acceder a sus propiedades
  const nombre = datosHuesped?.nombre || "";
  const apellidos = datosHuesped?.apellidos || "";
  const telefono = datosHuesped?.telefono || "";
  const email = datosHuesped?.email || "";
  const fechaInicio = fechas?.fechaInicio || "";
  const fechaFin = fechas?.fechaFin || "";

  return (
    <>
      <p className='propiedad'>{id}</p>
      <p className='propiedad'>{nombre}</p>
      <p className='propiedad'>{apellidos}</p>
      <p className='propiedad'>{telefono}</p>
      <p className='propiedad'>{email}</p>
      <p className='propiedad'>{fechaInicio}</p>
      <p className='propiedad'>{fechaFin}</p>
      <div className='btns-crud'>
        <button onClick={() => manejarEditar(id)} className='btn-editar-reserva btn-editar'>Editar</button>
        <button onClick={() => manejarEliminar(id)} className='btn-editar-reserva btn-eliminar'>Eliminar</button>
      </div>
    </>
  );
};
