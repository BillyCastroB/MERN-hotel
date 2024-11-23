import React from 'react';
import './AtencionHubicacion.css';

export const AtencionHubicacion = () => {
  return (
    <>
      <div className='mapa'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1160.2672406265133!2d-75.25265833297583!3d-11.998132467822225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910ebe7dfc4c9b2d%3A0xc94b5580e6d753d2!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20Tecnol%C3%B3gico%20P%C3%BAblico%20Andr%C3%A9s%20Avelino%20C%C3%A1ceres%20Dorregaray!5e0!3m2!1ses!2spe!4v1732384476946!5m2!1ses!2spe"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa del Instituto"
      ></iframe>
      </div>
    
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
              <form className='form-contacto' id="formulario" action="#">
                <div className="campo">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="campo">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="campo">
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea id="mensaje" name="mensaje" required></textarea>
                </div>
                <div className="campo">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </section>

    </>
  );
};
