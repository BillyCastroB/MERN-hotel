import React from 'react'
import './Admin.css';
export const Admin = () => {
  return (
    <div className='contenedor-login'>
      <img className='fondo-login' src="imagenesPaginas/fondo-login.webp" alt="" />
      <section className='section-login'>
        <form className='form-login'>
          <h2 className='titulo-login'>LOGIN</h2>
          <fieldset>
            <input placeholder='Usuario' className='input-login input-usuario' type="text" name="usuario"id='usuario'/>
          </fieldset>
          <fieldset>
            <input  placeholder='Contraseña' className='input-login input-password' type="password" name="contraseña" id='contraseña'/>
          </fieldset>
          <input className='btn-btn-login'  type="submit" value={"Ingresar"}/>
        </form>
      </section>
    </div>
  )
}
