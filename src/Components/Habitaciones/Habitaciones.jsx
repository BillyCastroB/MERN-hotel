import React from 'react'
import { Footer } from '../Layout/Footer'
import { Habitacion } from './Habitacion/Habitacion'
import { Navegacion } from '../Layout/Navegacion'
import { db } from '../../db/db'

export const Habitaciones = () => {

  return (
    <>
        <Navegacion/>
        <h1 className="titulo-habitaciones text-center">HABITACIONES</h1>
        {
          db.map(habitacion=>(
            <Habitacion
              key={habitacion.id}
              habitacion={habitacion}
            />
          ))
        }
        <Footer/>
    </>
  )
}



