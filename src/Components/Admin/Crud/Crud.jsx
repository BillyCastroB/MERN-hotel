import React, { useEffect, useState } from 'react';
import './Crud.css';
import { Reserva } from './Reserva';
import { Navegacion } from '../../Layout/Navegacion';
import { clienteAxios } from '../../../../config/clienteAxios';

export const Crud = () => {
  const [habitaciones, setHabitaciones] = useState([
    { id: 1, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 2, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 3, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 4, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 5, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
    { id: 6, datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' }, fechas: { fechaInicio: '', fechaFin: '' } },
  ]);
  const [loading, setLoading] = useState(true);
  const [formularioDatos, setFormularioDatos] = useState({
    datosHuesped: { nombre: '', apellidos: '', email: '', telefono: '' },
    fechas: { fechaInicio: '', fechaFin: '' }
  });
  const [habitacionEditando, setHabitacionEditando] = useState(null);

  useEffect(() => {
    traerDatosHabitaciones();
  }, []);

  const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha);
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

  const manejarEditar = (habitacionId) => {
    const habitacionSeleccionada = habitaciones.find(hab => hab.id === habitacionId);
    setFormularioDatos(habitacionSeleccionada);
    setHabitacionEditando(habitacionId);
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
          <form className='form-crud' onSubmit={manejarSubmit}>
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
            <button className='btn-crud' type="submit">Guardar</button>
          </form>
        </div>
      </section>

      {loading ? (
        <div className="spinner">Cargando datos...</div>
      ) : (
        <section className='section-valores'>
          {habitaciones.map((habitacion) => (
            <div key={habitacion.id} className='componenteReserva'>
              <Reserva
                {...habitacion}
                manejarEditar={manejarEditar}
                manejarEliminar={manejarEliminar} // Pasa la función manejarEliminar
              />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
