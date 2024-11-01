import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Habitacion.css';
import { clienteAxios } from '../../../../config/clienteAxios';
import { HabitacionContext } from '../../../context/habitaciones/habitacionContext';
import DisponibleContext from '../../../context/disponibilidad/disponibleContext';

export const Habitacion = ({habitacion}) => {
  const habitacionesContext = useContext(HabitacionContext);
  const { obtenerHabitacion, almacenarFechas } = habitacionesContext;

  const dispdHabitaciones = useContext( DisponibleContext );
  const { dispHabitacion1, dispHabitacion2,dispHabitacion3,dispHabitacion4, dispHabitacion5,dispHabitacion6, desHabilitar1 } = dispdHabitaciones;

  const { id, nombre, descripcion, imagen_1,imagen_2,imagen_3, precio, capacidad } = habitacion
  
  const [diasFecha, setDiasFecha] = useState({
    diaInicio: '',
    diaFin: ''
  })
  const [estado, setEstado] = useState({
    accesoReserva: false,
    temporalVista: true
  })

  const escucharFechas = (e)=>{
    setDiasFecha({
      ...diasFecha,
      [e.target.name] : e.target.value
    })
  }

  useEffect( ()=>{
    if (diasFecha.diaInicio || diasFecha.diaFin) {
      console.log(diasFecha);
    }
  }, [diasFecha] )

  const obtenerFechas = async (e)=>{
    e.preventDefault();
    almacenarFechas(diasFecha)
    let numero = id;
    console.log(numero);
    switch (numero) {
      case 1:
        desHabilitar1(false);
        break;

      default:
        console.log("algo esta fallando");
        break;
    }
    try {
      const respuesta = await clienteAxios.get(`/habitacion/disponibilidad/${numero}`);
      const disponible = respuesta.data.disponible;
      
      setEstado({
        ...estado,  // Corrige a `estado` para mantener el nombre del estado inicial
        accesoReserva: disponible,
        temporalVista: disponible
      });
    } catch (error) {
      console.log(error);
    }

  }

  return (
   <>
   <div className="contenedor">
     <div className="habitacion">
       <div className="grid-habitaciones">
            <div className="vc1" >
              <img
                className="img-habitacion"
                src={`./imagenesHabitaciones/${imagen_1}`}
                alt="Habitación Doble Interior"
              />
            </div>
            <div className="vc2">
              <img
               className="img-habitacion"
               src={`./imagenesHabitaciones/${imagen_2}`}
               alt="Habitación Doble Interior"
              />
            </div>
            <div className="vc3">
              <img
                className="img-habitacion"
                src={`./imagenesHabitaciones/${imagen_3}`}
                alt="Habitación Doble Interior"
              />
            </div>
       </div>

       <div className="card">
         <div className="contenedor-descripcion">
           <h2 className="subtitulo-habitacion"> {nombre} </h2>
           <p className="descripcion-habitacion">
             {descripcion}
           </p>
           <div className='habitacion__descripcion'>
             <div className="cont-precio">
               <p className="precio"><strong>S/. {precio} .00</strong></p>
               <p>la noche</p>
               <p>Cap. Max {capacidad}</p>
             </div>
             <form>
              <div className='formulario_dato'>
                <label htmlFor="">Fecha inicio</label>
                <input type="date" name="diaInicio" value={diasFecha.diaInicio} id="" onChange={escucharFechas} />
              </div>
              <div className='formulario_dato'>
                <label htmlFor="">Fecha fin</label>
                <input type="date" name="diaFin" value={diasFecha.diaFin} id="" onChange={escucharFechas} />
              </div>
              <div>
                <button 
                  className='btn-disponibilidad ' 
                  type='submit'
                  onClick={obtenerFechas}
                  >Ver Disponibilidad</button>
              </div>
             </form>
             <div className='verObjDisponibles'>
                {
                 estado.accesoReserva ? 
                 (
                 <div>
                   <p className='disponible'>disponible</p>
                    <Link
                      className="btn-reservar"
                      to={{
                        pathname: '/reservar'
                      }}
                      role="button"
                      onClick={()=>obtenerHabitacion(habitacion)}
                    >
                      Reservar
                    </Link>  
                  </div> 
                 ) : null}

                 {
                  estado.temporalVista? 
                  ( 
                    null
                  ) : 
                 (
                  <div>
                    <p className='Nodisponible'>No Disponible en este momento</p>
                  </div>
                 )
                }
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </>
  )
}
