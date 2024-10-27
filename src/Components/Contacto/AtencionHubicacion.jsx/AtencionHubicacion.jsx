import React from 'react';
import './AtencionHubicacion.css';

export const AtencionHubicacion = () => {
  return (
    <>
      <main className="contenedor">
        <section className="section-atencion">
          <h2 className="subtittle">Horarios de atención</h2>
          <div className="horario-flex">
            <div className="horario horario-dias">
              <h4>Lunes - Viernes</h4>
              <ul>
                <li>10:00 am – 1:00 pm</li>
                <li>4:00 pm – 10:30 pm</li>
              </ul>
              <hr className="linea" />
              <h4>Sábado</h4>
              <ul>
                <li>10:00 am – 1:00 pm</li>
                <li>4:00 pm – 10:30 pm</li>
              </ul>
              <hr className="linea" />
              <h4>Domingo</h4>
              <ul>
                <li>10:00 am <span>--</span> 1:00 pm</li>
                <li>4:00 pm <span>--</span> 10:30 pm</li>
              </ul>
            </div>
            <div className="horario horario-img">
              {/* <img className="img-horario" src="../images/horario.svg" alt="Horario de atención" /> */}
            </div>
          </div>
        </section>

        <div id="map-contenedor">
          <h2 className="subtittle">Ubicación:</h2>
          <p className="descripcion">Visítanos y descubre dónde estamos ubicados para ofrecerte nuestro mejor servicio.</p>
        </div>
      </main>
    </>
  );
};
