import React from 'react'
import './Habitaciones.css';
import { Footer } from '../Layout/Footer'
import { Habitacion } from './Habitacion/Habitacion'
import { Navegacion } from '../Layout/Navegacion'
import { db } from '../../db/db'
import { PortadaHabitacion } from './PortadaHabitacion/PortadaHabitacion'

export const Habitaciones = () => {

  return (
    <>
      <div className='portadaHabitaciones'>
        <Navegacion/>
        
        <PortadaHabitacion/>
      </div>
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



