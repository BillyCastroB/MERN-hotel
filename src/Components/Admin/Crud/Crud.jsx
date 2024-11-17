import React, { useEffect, useState } from 'react';
import './Crud.css';
import { Reserva } from './Reserva';
import { Navegacion } from '../../Layout/Navegacion';
import { clienteAxios } from '../../../../config/clienteAxios';

export const Crud = () => {
  const precios = [150.00, 200.00, 250.00, 300.00, 350.00, 400.00];
  const [totales, setTotales] = useState([]);
  const calcularDiasYTotal = (fechaInicio, fechaFin, precio) => {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);
    const diferenciaMilisegundos = fechaFinObj - fechaInicioObj;
    const dias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24)); 
    return dias > 0 ? dias * precio : 0; 
  };
  const actualizarTotales = () => {
    const nuevosTotales = habitaciones.map((habitacion) => {
      const { fechaInicio, fechaFin } = habitacion.fechas;
      const precio = precios[habitacion.id - 1]; 
      const total = calcularDiasYTotal(fechaInicio, fechaFin, precio);
      return total;
    });
    setTotales(nuevosTotales);
  };

  const [habitaciones, setHabitaciones] = useState([
    { id: 1, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 2, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 3, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 4, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 5, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 6, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
  ]);
  const [btnCrear, setBtnCrear] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formularioDatos, setFormularioDatos] = useState({
    id: '', 
    datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' },
    fechas: { fechaInicio: '', fechaFin: '' }
  });
  const [habitacionEditando, setHabitacionEditando] = useState(null);

  useEffect(() => {
    traerDatosHabitaciones();
  }, []);


  const enviarDatos = async (e) => {
    e.preventDefault();
    if (!formularioDatos.id) {
      alert('Por favor, selecciona una habitación antes de guardar.');
      return;
    }
    try {
      const precio = precios[formularioDatos.id - 1]; // Obtén el precio según el ID de la habitación
      const totalPago = calcularDiasYTotal(formularioDatos.fechas.fechaInicio, formularioDatos.fechas.fechaFin, precio); // Calcula el total

      const datosHuesped = {
        ...formularioDatos.datosHuesped,
        numeroHabitacion: formularioDatos.id // Asigna el ID de la habitación
      };

      const datosFechas = {
        ...formularioDatos.fechas,
        numeroHabitacion: formularioDatos.id,
        numeroHuesped: formularioDatos.id, // Asume que el ID del huésped es igual al ID de la habitación
        totalPago // Agrega el total calculado
      };

      const resultado1 = await clienteAxios.post('/reserva/huesped', datosHuesped);
      const resultado2 = await clienteAxios.post('/reservacion/fechas', datosFechas);
  
      console.log('Resultado huesped:', resultado1);
      console.log('Resultado fechas:', resultado2);
      alert('Datos guardados correctamente');
      await traerDatosHabitaciones();
      setBtnCrear(false); 
    }catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
      alert('Ocurrió un error al guardar los datos.');
    }
  };
  
  const actualizarDatos = async (e) => {
    e.preventDefault();
  
    if (!formularioDatos.id) {
      alert('Por favor, selecciona una habitación antes de editar.');
      return;
    }
  
    try {
      const precio = precios[formularioDatos.id - 1]; // Obtén el precio según el ID de la habitación
      const totalPago = calcularDiasYTotal(formularioDatos.fechas.fechaInicio, formularioDatos.fechas.fechaFin, precio); // Calcula el total
  
      // Estructura de datos a enviar al backend
      const datosActualizados = {
        datosHuesped: {
          ...formularioDatos.datosHuesped,
          numeroHabitacion: formularioDatos.id
        },
        fechas: {
          ...formularioDatos.fechas,
          totalPago
        }
      };
  
      // Solicitud PUT al endpoint correspondiente
      const respuesta = await clienteAxios.put(`/reserva/huesped/completa/${formularioDatos.id}`, datosActualizados);
  
      alert('Datos actualizados correctamente');
      console.log('Respuesta del servidor:', respuesta.data);
  
      // Actualizar el estado de habitaciones tras la edición
      await traerDatosHabitaciones();
  
      // Resetear el formulario y el estado relacionado
      setFormularioDatos({
        id: '',
        datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' },
        fechas: { fechaInicio: '', fechaFin: '' }
      });
      setBtnCrear(false);
      setHabitacionEditando(null);
    } catch (error) {
      console.error('Error al actualizar los datos:', error.response ? error.response.data : error.message);
      alert('Ocurrió un error al actualizar los datos.');
    }
  };

  const formatearFecha = (fecha) => {
    if (!fecha) {
      return ''; 
    }
    const fechaObj = new Date(fecha);
    if (isNaN(fechaObj)) {
      return ''; 
    }
    return fechaObj.toISOString().split('T')[0];
  };

  const traerDatosHabitaciones = async () => {
    try {
      const numerosDeHabitacion = [1, 2, 3, 4, 5, 6];
      const solicitudesFechas = numerosDeHabitacion.map(numero => clienteAxios.get(`/reservacion/fechas/${numero}`));
      const solicitudesHuespedes = numerosDeHabitacion.map(numero => clienteAxios.get(`/reserva/huesped/${numero}`));

      const [respuestasFechas, respuestasHuespedes] = await Promise.all([
        Promise.all(solicitudesFechas),
        Promise.all(solicitudesHuespedes)
      ]);

      const nuevasHabitaciones = habitaciones.map((habitacion, index) => ({
        ...habitacion,
        fechas: {
          fechaInicio: formatearFecha(respuestasFechas[index].data[0]?.fechaInicio || ''),
          fechaFin: formatearFecha(respuestasFechas[index].data[0]?.fechaFin || '')
        },
        datosHuesped: {
          nombre: respuestasHuespedes[index].data[0]?.nombre || '',
          apellidos: respuestasHuespedes[index].data[0]?.apellidos || '',
          email: respuestasHuespedes[index].data[0]?.email || '',
          telefono: respuestasHuespedes[index].data[0]?.telefono || ''
        }
      }));

      setHabitaciones(nuevasHabitaciones);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!loading) {
      actualizarTotales();
    }
  }, [habitaciones, loading]);

  const manejarEditar = (habitacionId) => {
    const habitacionSeleccionada = habitaciones.find(hab => hab.id === habitacionId);
    setFormularioDatos({
      id: habitacionSeleccionada.id, // Asigna el ID al formulario
      datosHuesped: habitacionSeleccionada.datosHuesped,
      fechas: habitacionSeleccionada.fechas
    });
    setHabitacionEditando(habitacionId);
    if(habitacionSeleccionada.datosHuesped.nombre === ''){
      setBtnCrear(false);
      return;
    }
    setBtnCrear(true);
  };

  const manejarEliminar = async (id) => {
    try {
        // Llamada al backend para eliminar la reserva completa
        await clienteAxios.delete(`/reserva/huesped/completa/${id}`);
        
        // Actualizar el estado en el front-end
        const nuevasHabitaciones = habitaciones.map(habitacion => 
            habitacion.id === id
                ? { 
                    ...habitacion, 
                    datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, 
                    fechas: { fechaInicio: '', fechaFin: '' } 
                  }
                : habitacion
        );

        setHabitaciones(nuevasHabitaciones);
        alert('Reserva eliminada exitosamente');
    } catch (error) {
        console.error('Error al eliminar la reserva:', error);
        alert('Error al eliminar la reserva');
    }
};


const manejarCambioFormulario = (e) => {
  const { name, value } = e.target;
  if (['nombre', 'apellidos', 'email', 'telefono'].includes(name)) {
    setFormularioDatos((prevState) => ({
      ...prevState,
      datosHuesped: { ...prevState.datosHuesped, [name]: value }
    }));
  } else {
    setFormularioDatos((prevState) => ({
      ...prevState,
      fechas: { ...prevState.fechas, [name]: value }
    }));
  }
};

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevasHabitaciones = habitaciones.map(hab =>
      hab.id === habitacionEditando ? { ...hab, ...formularioDatos } : hab
    );
    setHabitaciones(nuevasHabitaciones);
    setHabitacionEditando(null);
  };

  return (
    <div className='contenedor-crud'>
      <Navegacion />
      <section className='section-inputs'>
        <img className='logo-panel' src="./imagenesPaginas/logo-negro.png" alt="icono" />
        <div className='contenedor-formulario-crud'>
          <form className='form-crud' onSubmit={btnCrear? actualizarDatos : enviarDatos }>
          <fieldset>
            <label className='label-crud' htmlFor="num">N° Habitacion</label>
            <input
              type="number"
              name="id"
              id="num"
              value={formularioDatos.id}
              disabled // Hace el campo no editable
            />
          </fieldset>
            <fieldset>
              <label className='label-crud' htmlFor="nombre">Nombre</label>
              <input
                placeholder='Nombre'
                type="text"
                name='nombre'
                id='nombre'
                value={formularioDatos.datosHuesped.nombre}
                onChange={manejarCambioFormulario}
              />
            </fieldset>
            <fieldset>
              <label className='label-crud' htmlFor="apellidos">Apellidos</label>
              <input
                placeholder='Apellidos'
                type="text"
                name='apellidos'
                id='apellidos'
                value={formularioDatos.datosHuesped.apellidos}
                onChange={manejarCambioFormulario}
              />
            </fieldset>
            <fieldset>
              <label className='label-crud' htmlFor="email">Email</label>
              <input
                placeholder='Email'
                type="email"
                name='email'
                id='email'
                value={formularioDatos.datosHuesped.email}
                onChange={manejarCambioFormulario}
              />
            </fieldset>
            <fieldset>
              <label className='label-crud' htmlFor="telefono">Teléfono</label>
              <input
                placeholder='Teléfono'
                type="number"
                name='telefono'
                id='telefono'
                value={formularioDatos.datosHuesped.telefono}
                onChange={manejarCambioFormulario}
              />
            </fieldset>
            <fieldset>
              <label className='label-crud' htmlFor="fechaInicio">Fecha Inicio</label>
              <input
                type="date"
                name='fechaInicio'
                id='fechaInicio'
                value={formularioDatos.fechas.fechaInicio}
                onChange={manejarCambioFormulario}
              />
            </fieldset>
            <fieldset>
              <label className='label-crud' htmlFor="fechaFin">Fecha Fin</label>
              <input
                type="date"
                name='fechaFin'
                id='fechaFin'
                value={formularioDatos.fechas.fechaFin}
                onChange={manejarCambioFormulario}
              />
            </fieldset>
            <button className='btn-crud' type="submit">
              {btnCrear ? 'Editar' : 'Crear'}
            </button>
          </form>
        </div>
      </section>

      {loading ? (
        <div className="spinner">Cargando datos...</div>
      ) : (
        <section className='section-valores'>
          {habitaciones.map((habitacion, index) => (
            <div key={habitacion.id} className='componenteReserva'>
              <Reserva
                {...habitacion}
                total={totales[index]}
                manejarEditar={manejarEditar}
                manejarEliminar={manejarEliminar}
              />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
