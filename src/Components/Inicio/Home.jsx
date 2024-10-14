import React from 'react'
import { Portada } from './Portada/Portada.jsx';
import { MainInicio } from './MainInicio/MainInicio.jsx';
import { Caracteristicas } from './Caracteristicas/Caracteristicas.jsx';
import { Footer } from '../Layout/Footer.jsx';
import { Navegacion } from '../Layout/Navegacion.jsx';

export const Home = () => {
  return (
    <div>
      <Navegacion/>
      <Portada/>
      <MainInicio/>
      <Caracteristicas/>
      <Footer/>
    </div>
  )
}
