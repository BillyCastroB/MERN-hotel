import React, { useState, useEffect } from 'react';
import './Boleta.css';
import clienteAxios from '../../../../../../MERN-adminProyectos/cliente/config/axios';

export function Boleta() {
  const numero = localStorage.getItem('habitacion');
  const [datosReserva, setDatosReserva] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preparaDatos = async () => {
      try {
        // Realizar ambas solicitudes en paralelo
        const [respuestaFechas, respuestaHuesped, respuestaHabitacion] = await Promise.all([
          clienteAxios.get(`/reservacion/fechas/${numero}`),
          clienteAxios.get(`/reserva/huesped/${numero}`),
          clienteAxios.get(`/habitacion/disponibilidad/${numero}`),
        ]);

        // Construir el objeto con los datos obtenidos
        const datos = {
          nombreCompleto: respuestaHuesped.data[0]?.nombre || 'No disponible',
          apellidoscompleto: respuestaHuesped.data[0]?.apellidos || 'No disponible',
          email: respuestaHuesped.data[0]?.email || 'No disponible',
          telefono: respuestaHuesped.data[0]?.telefono || 'No disponible',
          numeroHabitacion: numero,
          precio: respuestaHabitacion.data?.precio || 'N/A',
          nombreHabitacion: respuestaHabitacion.data?.nombre || 'N/A',
          capacidad: respuestaHabitacion.data?.capacidad || 'N/A',
          fechaInicio: respuestaFechas.data[0]?.fechaInicio || 'N/A',
          fechaFin: respuestaFechas.data[0]?.fechaFin || 'N/A',
          totalPagar: respuestaFechas.data[0]?.totalPago || 'N/A',
        };

        // Mostrar los datos en la consola
        console.log('Datos de la reserva:', datos);
        console.log('Respuesta Habitacion:', respuestaHabitacion.data);
        console.log('Respuesta Habitacion:', respuestaFechas.data);
        // Actualizar el estado con los datos
        setDatosReserva(datos);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setDatosReserva(null);
      } finally {
        setLoading(false);
      }
    };

    preparaDatos();
  }, [numero]);

  const imprimir = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Preparando boleta...</p>
      </div>
    );
  }

  if (!datosReserva) {
    return <p>Error al cargar los datos. Intenta nuevamente.</p>;
  }

  return (
    <div className="container">
      <div className="boarding-pass">
        <div className="header">
          <img src="./imagenesPaginas/logo-negro.png" alt="Logo" />
          <h2>Datos de Reserva</h2>
        </div>
        
        <div className="passenger-info">
          <div className="info-container">
            {/* Fila 1 */}
            <div className="label-value" style={{ gridColumn: 'span 4' }}>
              <span className="label">Nombre Completo:</span>
              <span className="value">JOHN SMITH</span>
            </div>

            {/* Fila 2 */}
            <div className="label-value">
              <span className="label">Numero de habitacion:</span>
              <span className="value">1</span>
            </div>
            <div className="label-value"></div>
            <div className="label-value">
              <span className="label">Precio:</span>
              <span className="value">150</span>
            </div>
            <div className="label-value"></div>

            {/* Fila 3 */}
            <div className="label-value">
              <span className="label">Nombre de la habitacion:</span>
              <span className="value">Habitacion Pareja</span>
            </div>
            <div className="label-value"></div>
            <div className="label-value">
              <span className="label">Capacidad:</span>
              <span className="value">2</span>
            </div>
            <div className="label-value">
              <span className="label">Fecha de inicio</span>
              <span className="value">2024-11-15</span>
            </div>

            {/* Fila 4 */}
            <div className="label-value">
              <span className="label">Fecha fin</span>
              <span className="value" style={{ fontWeight: 'bold' }}>2024-11-20</span>
            </div>
            <div className="label-value">
              <span className="label">Total a pagar</span>
              <span className="value" style={{ fontWeight: 'bold' }}>750</span>
            </div>
          </div>
          <div className="barcode"></div>
        </div>
      </div>

      <div className="boarding-pass2">
        <div className="header2">
          <h2>Resumen de la reserva</h2>
        </div>
        
        <div className="passenger-info02">
          <div className="info-container02">
            {/* Fila 1 */}
            <div className="label-value02" style={{ gridColumn: 'span 4' }}>
              <span className="label02">Nombre completo:</span>
              <span className="value02">JOHN SMITH</span>
            </div>

            {/* Fila 2 */}
            <div className="label-value02">
              <span className="label02">Numero de habitacion:</span>
              <span className="value02">1</span>
            </div>

            {/* Fila 3 */}
            <div className="label-value02"></div>
            <div className="label-value02"></div>
            <div className="label-value02"></div>

            <div className="label-value02">
              <span className="label02">Nombre de habitacion:</span>
              <span className="value02">Habitacion Pareja</span>
            </div>
            <div className="label-value02"></div>
            <div className="label-value02"></div>
            <div className="label-value02"></div>
            <div className="label-value02">
              <span className="label02">Fecha de inicio:</span>
              <span className="value02">2024-11-15</span>
            </div>
            <div className="label-value02">
              <span className="label02">Fecha fin:</span>
              <span className="value02">2024-11-20</span>
            </div>
            <div className="label-value02">
              <span className="label02">Capacidad:</span>
              <span className="value02" style={{ fontWeight: 'bold' }}>2</span>
            </div>
          </div>
        </div>
        <button className='btn-imprimir' onClick={imprimir}>Imprimir</button>
      </div>
    </div>
  );
}
