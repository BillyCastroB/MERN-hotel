import React from 'react'
import './Crud.css';
import { Reserva } from './Reserva';
import { Navegacion } from '../../Layout/Navegacion';
export const Crud = () => {
  return (
    <div className='contenedor-crud'>
      <Navegacion/>
     <section className='section-inputs'>
      <img className='logo-panel' src="./imagenesPaginas/logo-negro.png" alt="icono" />
      <div className='contenedor-formulario-crud'>
       <form className='form-crud'>
        <fieldset>
         <label className='label-crud' htmlFor="nombre">Nombre</label>
         <input placeholder='Nombre' type="text" name='nombre' id='nombre'/>
        </fieldset>
        <fieldset>
         <label className='label-crud' htmlFor="apellidos">Apellidos</label>
         <input placeholder='Apellidos' type="text" name='apellidos' id='apellidos'/>
        </fieldset>
        <fieldset>
         <label className='label-crud' htmlFor="telefono">Telefono</label>
         <input placeholder='Telefono' type="number" name='telefono' id='telefono'/>
        </fieldset>
        <fieldset>
         <label className='label-crud' htmlFor="inicio">Fecha Inicio</label>
         <input type="date" name='inicio' id='inicio'/>
        </fieldset>
        <fieldset>
         <label className='label-crud' htmlFor="fin">Fecha Fin</label>
         <input type="date" name='fin' id='fin'/>
        </fieldset>
         <input className='btn-crud' type="submit" value={"crear/editar"}/>
       </form>
      </div>
     </section>
     <section className='section-valores'>
      <div className='informacion-reservas'>

           <h5 className='titulo'>Habitación</h5>
           <h5 className='titulo'>Nombre huesped</h5>
           <h5 className='titulo'>Apellidos</h5>
           <h5 className='titulo'>Telefono</h5>
           <h5 className='titulo'>Fecha Inicio</h5>
           <h5 className='titulo'>Fecha Fin</h5>
           <h5 className='titulo'>editar-crear</h5>

          <Reserva
            habitacion="habitacion 1"
            nombre="Sofia"
            apellidos="Gomez Sedano"
            fechaInicio="12/10/2024"
            fechaFin="15/10/2024"
          />
          <Reserva
            habitacion="habitacion 2"
            nombre="Jose"
            apellidos="Quispe Advincula"
            fechaInicio="12/10/2024"
            fechaFin="15/10/2024"
          />
          <Reserva
            habitacion="habitacion 3"
            nombre="Lio"
            apellidos="perez Palacios"
            fechaInicio="12/10/2024"
            fechaFin="15/10/2024"
          />
          <Reserva
            habitacion="habitacion 4"
            nombre="Ivan"
            apellidos="Limachi Ccapa"
            fechaInicio="12/10/2024"
            fechaFin="15/10/2024"
          />
          <Reserva
            habitacion="habitacion 5"
            nombre="Alejandra"
            apellidos="Taype Solis"
            fechaInicio="12/10/2024"
            fechaFin="15/10/2024"
          />
          <Reserva
            habitacion="habitacion 6"
            nombre="Sofia"
            apellidos="Gomez Sedano"
            fechaInicio="12/10/2024"
            fechaFin="15/10/2024"
          />
      </div>
     </section>
    </div>
  )
}
