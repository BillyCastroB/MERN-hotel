import React from 'react'
import { Contactanos } from './Informacion/Contactanos'
import { Navegacion } from '../Layout/Navegacion'
import { Footer } from '../Layout/Footer'
import { AtencionHubicacion } from './AtencionHubicacion.jsx/AtencionHubicacion'

export const Contacto = () => {
  return (
    <>
        <Navegacion/>
        <Contactanos/>
        <AtencionHubicacion/>
        <Footer/>
    </>
  )
}
