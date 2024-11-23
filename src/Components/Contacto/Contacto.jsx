import React from 'react'
import './Contacto.css';
import { Contactanos } from './Informacion/Contactanos'
import { Navegacion } from '../Layout/Navegacion'
import { Footer } from '../Layout/Footer'
import { AtencionHubicacion } from './AtencionHubicacion.jsx/AtencionHubicacion'
import { PortadaContacto } from './PortadaContacto/PortadaContacto';

export const Contacto = () => {
  return (
    <>
      <div className='portadaContacto'>
        <Navegacion/>
        <PortadaContacto/>
      </div>
        <Contactanos/>
        <AtencionHubicacion/>
        <Footer/>
    </>
  )
}
