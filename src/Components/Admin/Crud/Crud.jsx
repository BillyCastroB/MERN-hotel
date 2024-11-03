import React, { useEffect, useState } from 'react'
import './Crud.css';
import { Reserva } from './Reserva';
import { Navegacion } from '../../Layout/Navegacion';
import { clienteAxios } from '../../../../config/clienteAxios';
export const Crud = () => {

  const [datosHuespedes, setDatosHuespedes] = useState([]);
  const [fechasHabitaciones, setFechasHabitaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFechas, setLoadingFechas] = useState(true);
  const [datos1, setDatos1] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  })
  const [datos2, setDatos2] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  })
  useEffect( ()=>{
    traerDatosFechasHabitaciones();
    traerDatosHuespedes();
  }, [] )
  const traerDatosFechasHabitaciones = async () => {
    try {
      const numerosDeHabitacion = [1, 2, 3, 4, 5, 6];
      const solicitudes = numerosDeHabitacion.map(numero =>
        clienteAxios.get(`/reservacion/fechas/${numero}`)
      );
  
      const respuestas = await Promise.all(solicitudes);
  
      const nuevasFechas = respuestas.map((respuesta, index) => ({
        numeroHabitacion: numerosDeHabitacion[index],
        fechaInicio: respuesta.data[0].fechaInicio || '',
        fechaFin: respuesta.data[0].fechaFin || '',
        disponible: respuesta.data[0].disponible || false
      }));
  
      setFechasHabitaciones(nuevasFechas);
  
      console.log("Fechas de habitaciones:", nuevasFechas);
      console.log(fechasHabitaciones);
    } catch (error) {
      console.log(error);
    }finally {
      setLoadingFechas(false); // Ocultar el spinner cuando termine la consulta
    }
  };


  const traerDatosHuespedes = async () => {
    try {
      const numerosDeHabitacion = [1, 2, 3, 4, 5, 6];
      const solicitudes = numerosDeHabitacion.map(numero =>
        clienteAxios.get(`/reserva/huesped/${numero}`)
      );
  
      const respuestas = await Promise.all(solicitudes);
  
      const nuevosDatos = respuestas.map((respuesta, index) => ({
        numeroHabitacion: numerosDeHabitacion[index],
        nombre: respuesta.data[0].nombre || '',
        apellidos: respuesta.data[0].apellidos || '',
        email: respuesta.data[0].email || '',
        telefono: respuesta.data[0].telefono || ''
      }));
  
      setDatosHuespedes(nuevosDatos);
      console.log("Datos de huéspedes:", nuevosDatos);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // Ocultar el spinner cuando termine la consulta
    }
  };
  const verFechas = (e)=>{
    e.preventDefault();
    console.log(fechasHabitaciones);
  }
  

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
         <label className='label-crud' htmlFor="email">Email</label>
         <input placeholder='Email' type="email" name='email' id='email'/>
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
         <input onClick={verFechas} className='btn-crud' type="submit" value={"crear/editar"}/>
       </form>
      </div>
     </section>
     {loading || loadingFechas ? (
        <div className="spinner">Cargando datos...</div> // Spinner de carga
      ) : (
     <section className='section-valores'>
      
      <div className='informacion-reservas'>

           <h5 className='titulo'>N°</h5>
           <h5 className='titulo'>Habitación</h5>
           <h5 className='titulo'>Nombre</h5>
           <h5 className='titulo'>Apellidos</h5>
           <h5 className='titulo'>Telefono</h5>
           <h5 className='titulo'>Email</h5>
           <h5 className='titulo'>Fecha Inicio</h5>
           <h5 className='titulo'>Fecha Fin</h5>
           <h5 className='titulo'>Total</h5>
           <h5 className='titulo'>-</h5>
      </div>
     <div className='componenteReserva'>
          <Reserva
            id={1}
            habitacion="Pareja"
            nombre={datosHuespedes[0].nombre}
            apellidos={datosHuespedes[0].apellidos}
            telefono= {datosHuespedes[0].telefono}
            email= {datosHuespedes[0].email}
            fechaInicio={fechasHabitaciones[0].fechaInicio.slice(0,10)}
            fechaFin={fechasHabitaciones[0].fechaFin.slice(0,10)}
            total = '0'
          />
      </div>
      <div className='componenteReserva'>
          <Reserva
            id={2}
            habitacion={"Alka"}
            nombre={datosHuespedes[1].nombre}
            apellidos={datosHuespedes[1].apellidos}
            telefono={datosHuespedes[1].telefono}
            email={datosHuespedes[1].email}
            fechaInicio={fechasHabitaciones[1].fechaInicio.slice(0,10)}
            fechaFin={fechasHabitaciones[1].fechaFin.slice(0,10)}
            total={0}
          />
      </div>
      <div className='componenteReserva'>
          <Reserva
            id={3}
            habitacion="Terraza"
            nombre={datosHuespedes[2].nombre}
            apellidos={datosHuespedes[2].apellidos}
            telefono={datosHuespedes[2].telefono}
            email={datosHuespedes[2].email}
            fechaInicio={fechasHabitaciones[2].fechaInicio.slice(0,10)}
            fechaFin={fechasHabitaciones[2].fechaFin.slice(0,10)}
          />
      </div>
      <div className='componenteReserva'>
          <Reserva
            id={4}
            habitacion="Encanto"
            nombre={datosHuespedes[3].nombre}
            apellidos={datosHuespedes[3].apellidos}
            telefono={datosHuespedes[3].telefono}
            email={datosHuespedes[3].email}
            fechaInicio={fechasHabitaciones[3].fechaInicio.slice(0,10)}
            fechaFin={fechasHabitaciones[3].fechaFin.slice(0,10)}
          />
      </div>
      <div className='componenteReserva'>
          <Reserva
            id={5}
            habitacion="Prime Celeste"
            nombre={datosHuespedes[4].nombre}
            apellidos={datosHuespedes[4].apellidos}
            telefono={datosHuespedes[4].telefono}
            email={datosHuespedes[4].email}
            fechaInicio={fechasHabitaciones[4].fechaInicio.slice(0,10)}
            fechaFin={fechasHabitaciones[4].fechaFin.slice(0,10)}
          />
      </div>
      <div className='componenteReserva'>
          <Reserva
            id={6}
            habitacion="Mirror"
            nombre={datosHuespedes[5].nombre}
            apellidos={datosHuespedes[5].apellidos}
            telefono={datosHuespedes[5].telefono}
            email={datosHuespedes[5].email}
            fechaInicio={fechasHabitaciones[5].fechaInicio.slice(0,10)}
            fechaFin={fechasHabitaciones[5].fechaFin.slice(0,10)}
          />
      </div> 

     </section>)}
    </div>
  )
}
