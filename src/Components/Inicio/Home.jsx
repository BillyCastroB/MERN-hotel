import React from 'react'
import './Home.css';
import { Portada } from './Portada/Portada.jsx';
import { MainInicio } from './MainInicio/MainInicio.jsx';
import { Caracteristicas } from './Caracteristicas/Caracteristicas.jsx';
import { Footer } from '../Layout/Footer.jsx';
import { Navegacion } from '../Layout/Navegacion.jsx';

export const Home = () => {
  return (
    <div>
      <div className='portada'>
        <Navegacion/>
        <Portada/>
      </div>
      <MainInicio/>
      <Caracteristicas/>
      <Footer/>
    </div>
  )
}
