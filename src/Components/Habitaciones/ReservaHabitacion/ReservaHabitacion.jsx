import React, { useContext, useState, useEffect } from 'react';
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
  const [datosFechas, setDatosFechas] = useState({
    numeroHuesped: '',
    numeroHabitacion: '',
    fechaInicio: '',
    fechaFin: '',
    totalPago: 0
  });
  const [totalPagar, setTotalPagar] = useState(0);
  const habitacionesContext = useContext(HabitacionContext);
  const { habitacion, fechas } = habitacionesContext; // Obtenemos las fechas del contexto
  const {id, precio}=habitacion;
  const {diaFin, diaInicio} = fechas;
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

  useEffect(() => {
    setDatosFechas({
      numeroHuesped: id,
      numeroHabitacion: id,
      fechaInicio: diaInicio,
      fechaFin: diaFin,
      totalPago: totalPagar 
    })
  }, []);

  useEffect( ()=>{
    
    let inicio = new Date(datosFechas.fechaInicio);  // Ejemplo: '2024-10-29'
    let fin = new Date(datosFechas.fechaFin);

    let diferenciaEnMilisegundos = fin.getTime() - inicio.getTime();

    let diferenciaEnDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    setTotalPagar(diferenciaEnDias* precio);

  }, [datosFechas.fechaInicio, datosFechas.fechaFin] )

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
    if (
      nombreHuesped.trim() === '' ||
      apellidosHuesped.trim() === '' ||
      emailHuesped.trim() === '' ||
      telefonohuesped.trim() === ''
    ) {
      setErrorVacios(true);
      return;
    }
    setErrorVacios(false);
    
    

    enviarDatosHuesped();
  };

  const enviarDatosHuesped = (e) => {
    confirmarHuesped(datosHuesped);
  };

  const confirmarYEnviarHabitacion = (e) => {
    e.preventDefault();

    const idHabitacion = habitacion.id;
    const nuevaHabitacion = {
      numero: idHabitacion,
      nombre: habitacion.nombre,
      precio: habitacion.precio,
      capacidad: habitacion.capacidad,
      disponible: false
    };

    setDatosHabitacion(nuevaHabitacion);

    setDatosHuesped((prevDatos) => ({
      ...prevDatos,
      numeroHabitacion: idHabitacion
    }));
    setDatosFechas({
      numeroHuesped: id,
      numeroHabitacion: id,
      fechaInicio: diaInicio,
      fechaFin: diaFin,
      totalPago: totalPagar
    })
    confirmarHabitacion(nuevaHabitacion);
  };

  const enviarDatosFechas = (e) => {
    e.preventDefault();
    setDatosFechas({
      numeroHuesped: id,
      numeroHabitacion: id,
      fechaInicio: datosFechas.fechaInicio,
      fechaFin: datosFechas.fechaFin,
      totalPago: totalPagar
    })
    confirmarFechas(datosFechas);
  };


  return habitacion === null ? (
    <p>Habitación no seleccionada</p>
  ) : (
    <>
      <Navegacion />
      <div className="contenedor_final">
        <div className="grid_columnas">
          <div className="reserva__habitacion">
            <h2 className="reserva--titulo">Datos habitación</h2>
            <h4>{habitacion.nombre}</h4>
            <form className="form__habitacion">
              <h5>Precio por noche: S/.{habitacion.precio}</h5>
              <h5>Descripción habitación seleccionada:</h5>
              <p className="habitacion-descripcion">{habitacion.descripcion}</p>
              <div className="img-habitacion-seleccionada">
                <img src={`imagenesHabitaciones/${habitacion.imagen_1}`} alt="Imagen de la habitación" />
              </div>
              <div className="confimar-habitacion">
                <button onClick={confirmarYEnviarHabitacion} className="btn-enviar">
                  Confirmar Habitación
                </button>
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
              {errorNombre && <p className="alert-error">Nombre no válido</p>}
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
              {errorApellidos && <p className="alert-error">Apellidos no válidos</p>}
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
              {errorEmail && <p className="alert-error">Email no válido</p>}
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
              {errorTelefono && <p className="alert-error">Teléfono no válido</p>}
              {errorVacios && <p className="alert-error">Todos los campos son obligatorios</p>}
              <div className="form-huesped-registrar">
                <button type="submit" className="btn-enviar">
                  Registrar
                </button>
              </div>
            </form>
          </div>

          {/* -------------------------------    FECHAS              ------------------------------------- */}
          <div className="reserva__fechas">
            <h2 className="reserva--titulo">Datos de Fechas</h2>
            <form className="form__fechas" >
              <div className="form-div">
                <label htmlFor="fechaInicio">Fecha Inicio:</label>
                <input
                  type="date"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={diaInicio ? datosFechas.fechaInicio : diaInicio} // Revisamos que la fecha no sea null o undefined
                  onChange={(e) =>
                    setDatosFechas((prevDatos) => ({
                      ...prevDatos,
                      [e.target.name]: e.target.value
                    }))
                  }
                />
              </div>
              <div className="form-div">
                <label htmlFor="fechaFin">Fecha Fin:</label>
                <input
                  type="date"
                  name="fechaFin"
                  id="fechaFin"
                  value={diaFin ? datosFechas.fechaFin : diaFin} // Lo mismo aquí
                  onChange={(e) =>
                    setDatosFechas((prevDatos) => ({
                      ...prevDatos,
                      [e.target.name]: e.target.value
                    }))
                  }
                />
              </div>
              <h5>Total a pagar: <span> $ {totalPagar} </span></h5>
              <div className="form-fechas-registrar">
                <button onClick={enviarDatosFechas} type="submit" className="btn-enviar">
                  Confirmar Fechas
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
