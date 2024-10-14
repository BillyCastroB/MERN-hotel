import React, { useContext, useState } from 'react';
import './ReservaHabitacion.css';
import { Navegacion } from '../../Layout/Navegacion';
import { HabitacionContext } from '../../../context/habitacionContext';

export const ReservaHabitacion = () => {
  const habitacionesContext = useContext(HabitacionContext);
  const { habitacion, fechas } = habitacionesContext;

  // validacion nombre Huesped
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

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
  }
  const apellidosChange = (e) => {
    const { value } = e.target;
    if (soloLetrasRegex.test(value) || value === '') {
      setErrorApellidos(false);
    } else {
      setErrorApellidos(true);
    }
    setApellidos(value);
  }
  const emailChange = (e) => {
    const { value } = e.target;
    if (emailRegex.test(value) || value === '') {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
    setEmail(value);
  }
  const telefonoChange = (e) => {
    const { value } = e.target;
    if (telefonoRegex.test(value) || value === '') {
      setErrorTelefono(false);
    } else {
      setErrorTelefono(true);
    }
    setTelefono(value);
  }
  const validacionFinal = (e)=>{
    e.preventDefault();
    if(nombre.trim() === '' || apellidos.trim() === '' || email.trim() === '' || telefono.trim() === ''){
      setErrorVacios(true);
      return;
    }
    setErrorVacios(false);
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
              <div className='confimar-habitacion'>
                <button className='btn-enviar'>Confirmar Habitación</button>
              </div>
            </form>
          </div>

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
                  value={nombre}
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
                  value={apellidos}
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
                  value={email}
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
                  value={telefono}
                  placeholder="Tu Teléfono" 
                  onChange={telefonoChange}
                  />
              </div>
              {errorTelefono? <p className='alert-error'>Telefono no valido</p> : null}
              { errorVacios? <p className='alert-error'>Todos los campos son obligaorios</p> : null }
              <div className="form-huesped--btn">
                <button 
                  className="btn-enviar" 
                  type="submit"
                  >
                  Registrar
                </button>
              </div>
            </form>
          </div>

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
