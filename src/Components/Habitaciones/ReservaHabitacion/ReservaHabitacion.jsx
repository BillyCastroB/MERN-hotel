import React, { useContext, useState } from 'react';
import './ReservaHabitacion.css';
import { Navegacion } from '../../Layout/Navegacion';
import { HabitacionContext } from '../../../context/habitaciones/habitacionContext';
import { ClienteContext } from '../../../context/clienteContext/clienteContext';

export const ReservaHabitacion = () => {
  const clienteContexto = ClienteContext;
  const { confirmarHuesped, confirmarHabitacion, confirmarFechas } = useContext(clienteContexto);
  const [datosHuesped, setDatosHuesped] = useState({
    numeroHabitacion: '', // Inicialmente vacío
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  });
  const [datosHabitacion, setDatosHabitacion] = useState({
    numero: '',
    nombre: '',
    precio: '',
    capacidad: '',
    disponible: false
  });
  const [ datosFechas, setDatosFechas ] = useState({
    numeroHuesped: '',
    numeroHabitacion: '',
    fechaInicio: '',
    fechaFin: ''
  })

  const habitacionesContext = useContext(HabitacionContext);
  const { habitacion, fechas } = habitacionesContext;



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
    setErrorNombre(!soloLetrasRegex.test(value) && value !== '');
    setNombre(value);
    setDatosHuesped((prevDatos) => ({
      ...prevDatos,
      [e.target.name]: e.target.value
    }));
  };

  const apellidosChange = (e) => {
    const { value } = e.target;
    setErrorApellidos(!soloLetrasRegex.test(value) && value !== '');
    setApellidos(value);
    setDatosHuesped((prevDatos) => ({
      ...prevDatos,
      [e.target.name]: e.target.value
    }));
  };

  const emailChange = (e) => {
    const { value } = e.target;
    setErrorEmail(!emailRegex.test(value) && value !== '');
    setEmail(value);
    setDatosHuesped((prevDatos) => ({
      ...prevDatos,
      [e.target.name]: e.target.value
    }));
  };

  const telefonoChange = (e) => {
    const { value } = e.target;
    setErrorTelefono(!telefonoRegex.test(value) && value !== '');
    setTelefono(value);
    setDatosHuesped((prevDatos) => ({
      ...prevDatos,
      [e.target.name]: e.target.value
    }));
  };

  const validacionFinal = (e) => {
    e.preventDefault();
    if (nombreHuesped.trim() === '' || apellidosHuesped.trim() === '' || emailHuesped.trim() === '' || telefonohuesped.trim() === '') {
      setErrorVacios(true);
      return;
    }
    setErrorVacios(false);
  };

  const enviarDatosHuesped = (e) => {
    e.preventDefault();
    confirmarHuesped(datosHuesped);
  };

  const llenarDatosHabitacion = (e) => {
    e.preventDefault();
    const idHabitacion = habitacion.id; // Obtén el ID de la habitación
    setDatosHabitacion({
      numero: idHabitacion,
      nombre: habitacion.nombre,
      precio: habitacion.precio,
      capacidad: habitacion.capacidad,
      disponible: false
    });

    // También actualiza numeroHabitacion en datosHuesped
    setDatosHuesped((prevDatos) => ({
      ...prevDatos,
      numeroHabitacion: idHabitacion // Asigna el id de la habitación
    }));
  };

  const enviarDatosHabitacion = (e) => {
    e.preventDefault();
    confirmarHabitacion(datosHabitacion);
  };

  const enviarDatosFechas = (e)=>{
    e.preventDefault();
    confirmarFechas(datosFechas)
  }

  return habitacion === null ? (
    <p>Habitación no seleccionada</p>
  ) : (
    <>
      <Navegacion />
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
          {/* -------------------------------    HUESPED              ------------------------------------- */}
          <div className="reserva__huesped">
            <h2 className="reserva--titulo">Datos del Huesped</h2>
            <form className="form__huesped" onSubmit={validacionFinal}>
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
              {errorNombre && <p className='alert-error'>Nombre no valido</p>}
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
              {errorApellidos && <p className='alert-error'>Apellidos no valido</p>}
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
              {errorEmail && <p className='alert-error'>Email no valido</p>}
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
              {errorTelefono && <p className='alert-error'>Teléfono no valido</p>}
              {errorVacios && <p className='alert-error'>Todos los campos son obligatorios</p>}
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
          {/* -----------------------    FECHAS         ------------------------- */}
          <div className="reserva__condiciones">
            <h2 className='reserva--titulo'>Datos de Reserva</h2>
            <form className="form_condiciones">
              <p>Fecha inicio: <span className='fecha'>{fechas.diaInicio}</span></p>
              <p>Fecha Fin: <span className='fecha'>{fechas.diaFin}</span></p>
              <div>
                <button 
                  className='btn-enviar'
                  type="button" 
                  onClick={datosFechas}
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
