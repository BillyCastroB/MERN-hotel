import React from 'react';
import './Boleta.css';

export function Boleta() {

  const imprimir = ()=>{
    window.print();
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

