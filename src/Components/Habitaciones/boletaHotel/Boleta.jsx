import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import './Boleta.css';
import { cliente } from './Cliente';

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
          id: respuestaHuesped.data[0]?._id,
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
              <span className="value">{datosReserva.nombreCompleto} {datosReserva.apellidoscompleto}</span>
            </div>
  
            {/* Fila 2 */}
            <div className="label-value">
              <span className="label">Numero de habitacion:</span>
              <span className="value">{datosReserva.numeroHabitacion}</span>
            </div>
            <div className="label-value"></div>
            <div className="label-value">
              <span className="label">Precio por Noche:</span>
              <span className="value">{datosReserva.precio}</span>
            </div>
            <div className="label-value"></div>
  
            {/* Fila 3 */}
            <div className="label-value">
              <span className="label">Nombre de la habitacion:</span>
              <span className="value">{datosReserva.nombreHabitacion}</span>
            </div>
            <div className="label-value"></div>
            <div className="label-value">
              <span className="label">Capacidad:</span>
              <span className="value">{datosReserva.capacidad}</span>
            </div>
            <div className="label-value">
              <span className="label">Fecha de inicio:</span>
              <span className="value">{datosReserva.fechaInicio.slice(0,10)}</span>
            </div>
  
            {/* Fila 4 */}
            <div className="label-value">
              <span className="label">Fecha fin:</span>
              <span className="value" style={{ fontWeight: 'bold' }}>{datosReserva.fechaFin.slice(0,10)}</span>
            </div>
            <div className="label-value">
              <span className="label">Total a pagar:</span>
              <span className="value" style={{ fontWeight: 'bold' }}>{datosReserva.totalPagar}</span>
            </div>
            <div className="label-value qr">
              {<QRCode value={ "Codigo de reserva = " + datosReserva.id} />}
            </div>
          </div>
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
              <span className="value02">{datosReserva.nombreCompleto} {datosReserva.apellidoscompleto}</span>
            </div>
  
            {/* Fila 2 */}
            <div className="label-value02">
              <span className="label02">Numero de habitacion:</span>
              <span className="value02">{datosReserva.numeroHabitacion}</span>
            </div>
  
            {/* Fila 3 */}
            <div className="label-value02"></div>
            <div className="label-value02"></div>
            <div className="label-value02"></div>
  
            <div className="label-value02">
              <span className="label02">Nombre de habitacion:</span>
              <span className="value02">{datosReserva.nombreHabitacion}</span>
            </div>
            <div className="label-value02"></div>
            <div className="label-value02"></div>
            <div className="label-value02"></div>
            <div className="label-value02">
              <span className="label02">Fecha de inicio:</span>
              <span className="value02">{datosReserva.fechaInicio.slice(0,10)}</span>
            </div>
            <div className="label-value02">
              <span className="label02">Fecha fin:</span>
              <span className="value02">{datosReserva.fechaFin.slice(0,10)}</span>
            </div>
            <div className="label-value02">
              <span className="label02">Capacidad:</span>
              <span className="value02" style={{ fontWeight: 'bold' }}>{datosReserva.capacidad}</span>
            </div>
          </div>
        </div>
        <button className="btn-imprimir" onClick={imprimir}>Imprimir</button>
      </div>
    </div>
  );  
}
