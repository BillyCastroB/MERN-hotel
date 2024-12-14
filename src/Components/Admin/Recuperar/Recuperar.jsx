import React, { useEffect, useState } from 'react';
import './Recuperar.css';
import { useNavigate, Link } from 'react-router-dom';

export const Recuperar = () => {

  return (
    <div className='contenedor-login'>
      <img className='fondo-login' src="imagenesPaginas/fondo-login.webp" alt="Fondo de login" />
      <section className='section-login'>
        <form className='form-login' >
          <h4 className='titulo-login'>Ingrese su Email registrado para enviarle su contraseña</h4>
          <fieldset>
            <input
              placeholder='Email'
              className='input-usuario'
              type="email"
              name="email"
              id='email'

            />
          </fieldset>
              <input 
                className='btn-btn-login' 
                type="submit" 
                value="Ingresar" 
              />

          
          <div className='container-btn'>
              <img src="./imagenesPaginas/volver.png" alt="Volver"/>
          </div>
        </form>
      </section>
    </div>
  );
};
