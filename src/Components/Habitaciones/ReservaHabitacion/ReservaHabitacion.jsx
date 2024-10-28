import React, { useContext, useState } from 'react';
import './ReservaHabitacion.css';
import { Navegacion } from '../../Layout/Navegacion';
import { HabitacionContext } from '../../../context/habitaciones/habitacionContext';
import { clienteAxios } from '../../../../config/clienteAxios';
import { ClienteContext } from '../../../context/clienteContext/clienteContext';

export const ReservaHabitacion = () => {

  const clienteContexto = ClienteContext;
  const { confirmarHuesped, confirmarHabitacion } = useContext(clienteContexto);

  const [datosHuesped, setDatosHuesped] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''

  })
  const [datosHabitacion, setDatosHabitacion] = useState({
    numero: '',
    nombre: '',
    precio: '',
    capacidad: '',
    disponible: false
  })


  const habitacionesContext = useContext(HabitacionContext);
  const { habitacion, fechas } = habitacionesContext;


  // validacion nombre Huesped
  const [nombreHuesped, setNombre] = useState('');
  const [apellidosHuesped, setApellidos] = useState('');
  const [emailHuesped, setEmail] = useState('');
  const [telefonohuesped, setTelefono] = useState('');

  const [errorNombre, setErrorNombre] = useState(false);
  const [errorApellidos, setErrorApellidos] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [errorVacios, setErrorVacios] = useState(false);

  const soloLetrasRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^[0-9]{9}$/;

  const nombreChange = (e) => {
    const { value } = e.target;
    if (soloLetrasRegex.test(value) || value === '') {
      setErrorNombre(false);
    } else {
      setErrorNombre(true);
    }
    setNombre(value);

    setDatosHuesped({
      ...datosHuesped,
      [e.target.name]: e.target.value
    })
  }
  const apellidosChange = (e) => {
    const { value } = e.target;
    if (soloLetrasRegex.test(value) || value === '') {
      setErrorApellidos(false);
    } else {
      setErrorApellidos(true);
    }
    setApellidos(value);
    setDatosHuesped({
      ...datosHuesped,
      [e.target.name]: e.target.value
    })
  }
  const emailChange = (e) => {
    const { value } = e.target;
    if (emailRegex.test(value) || value === '') {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
    setEmail(value);
    setDatosHuesped({
      ...datosHuesped,
      [e.target.name]: e.target.value
    })
  }
  const telefonoChange = (e) => {
    const { value } = e.target;
    if (telefonoRegex.test(value) || value === '') {
      setErrorTelefono(false);
    } else {
      setErrorTelefono(true);
    }
    setTelefono(value);
    setDatosHuesped({
      ...datosHuesped,
      [e.target.name]: e.target.value
    })
  }
  const validacionFinal = (e)=>{
    e.preventDefault();
    if(nombreHuesped.trim() === '' || apellidosHuesped.trim() === '' || emailHuesped.trim() === '' || telefonohuesped.trim() === ''){
      setErrorVacios(true);
      return;
    }
    setErrorVacios(false);
  }

  const enviarDatosHuesped = e =>{
    e.preventDefault();
    confirmarHuesped(datosHuesped);
  }
  const llenarDatosHabitacion = (e)=>{
    e.preventDefault();
    setDatosHabitacion({
      numero: habitacion.id,
      nombre: habitacion.nombre,
      precio: habitacion.precio,
      capacidad: habitacion.capacidad,
      disponible: false
    })
  }
  const enviarDatosHabitacion = (e)=>{
    e.preventDefault();
    confirmarHabitacion(datosHabitacion);
  }
  return habitacion === null ? (
    <p>Habitación no seleccionada</p>
  ) : (
    <>
      <Navegacion />
{/*       <div className='progreso'>
        <label for="file">Proceso de Reserva:</label>
        <progress id="file" max="100" value="70"></progress>
      </div> */}
      <div className="contenedor_final">
        <div className="grid_columnas">
          <div className="reserva__habitacion">
            <h2 className='reserva--titulo'>Datos habitación</h2>
            <h4>{habitacion.nombre}</h4>            
            <form className="form__habitacion">
              <h5>
                Precio por noche: S/.{habitacion.precio}
              </h5>
              <h5>
                Total a pagar: 
                <span> $ </span>
              </h5>
              <h5>Descripción habitacion seleccionada:</h5>
              <p className='habitacion-descripcion'>
                {habitacion.descripcion}
              </p>
              <div className='img-habitacion-seleccionada'>
                <img src={`imagenesHabitaciones/${habitacion.imagen_1}`} alt="Imagen de la habitación" />
              </div>
              <button onClick={llenarDatosHabitacion}>Validar 1</button>
              <div className='confimar-habitacion'>
                <button onClick={enviarDatosHabitacion} className='btn-enviar'>Confirmar Habitación</button>
              </div>
            </form>
          </div>
{/* -------------------------------------------------------------------------------- */}
          <div className="reserva__huesped">
            <h2 className="reserva--titulo">Datos del Huesped</h2>
            <form 
              className="form__huesped"
              onSubmit={validacionFinal}>
              <div className="form-div">
                <label htmlFor="nombre">Nombre:</label>
                <input 
                  type="text" 
                  name="nombre" 
                  id="nombre"
                  value={nombreHuesped}
                  placeholder="Tu Nombre"
                  onChange={nombreChange}
                  />
              </div>
              {errorNombre? <p className='alert-error'>Nombre no valido</p> : null}
              <div className="form-div">
                <label htmlFor="apellidos">Apellidos:</label>
                <input 
                  type="text" 
                  name="apellidos" 
                  id="apellidos" 
                  value={apellidosHuesped}
                  placeholder="Tus Apellidos"
                  onChange={apellidosChange}
                  />
              </div>
              {errorApellidos? <p className='alert-error'>Apellidos no valido</p> : null}
              <div className="form-div">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={emailHuesped}
                  placeholder="Tu Email"
                  onChange={emailChange}
                  />
              </div>
              {errorEmail? <p className='alert-error'>Email no valido</p> : null}
              <div className="form-div">
                <label htmlFor="telefono">Teléfono:</label>
                <input 
                  type="text" 
                  name="telefono" 
                  id="telefono" 
                  value={telefonohuesped}
                  placeholder="Tu Teléfono" 
                  onChange={telefonoChange}
                  />
              </div>
              {errorTelefono? <p className='alert-error'>Telefono no valido</p> : null}
              { errorVacios? <p className='alert-error'>Todos los campos son obligaorios</p> : null }
              <div className="form-huesped--btn">
                <button 
                  onClick={enviarDatosHuesped}
                  className="btn-enviar" 
                  type="submit"
                  >
                  Registrar
                </button>
              </div>
            </form>
          </div>
{/* ----------------------------------------------------------------------------------------- */}
          <div className="reserva__condiciones">
            <h2 className='reserva--titulo'>Datos de Reserva</h2>
            <form className="form_condiciones">
            <p>Fecha inicio: <span className='fecha'>{fechas.diaInicio}</span></p>
            <p>Fecha Fin: <span className='fecha'>{fechas.diaFin}</span></p>
              
              <div>
                
                <button 
                  className='btn-enviar'
                  type="button" 
                  onClick={() => console.log(habitacion)}
                >
                  Completar
                </button>
                
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
