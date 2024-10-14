import React from 'react'
import './Crud.css';
export const Crud = () => {
  return (
    <div>
     <section className='section-inputs'>
      <img src="" alt="icono" />
      <div className='formulario-editar-crear'>
       <form className='form-crud'>
        <fieldset>
         <label htmlFor="nombre">Nombre</label>
         <input placeholder='Nombre' type="text" name='nombre' id='nombre'/>
        </fieldset>
        <fieldset>
         <label htmlFor="apellidos">Apellidos</label>
         <input placeholder='Apellidos' type="text" name='apellidos' id='apellidos'/>
        </fieldset>
        <fieldset>
         <label htmlFor="telefono">Telefono</label>
         <input placeholder='Telefono' type="number" name='telefono' id='telefono'/>
        </fieldset>
        <fieldset>
         <label htmlFor="inicio">Fecha Inicio</label>
         <input type="date" name='inicio' id='inicio'/>
        </fieldset>
        <fieldset>
         <label htmlFor="fin">Fecha Fin</label>
         <input type="date" name='fin' id='fin'/>
        </fieldset>
         <input type="submit" value={"crear/editar"}/>
       </form>
      </div>
     </section>
     <section className='section-valores'>
      <div className='titulos'>
       <p>Nombre</p>
       <p>Nombre</p>
       <p>Nombre</p>
       <p>Nombre</p>
       <p>Nombre</p>
      </div>
      <div>

      </div>
     </section>
    </div>
  )
}
