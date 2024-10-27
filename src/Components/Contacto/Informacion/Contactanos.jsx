import React from 'react';
import './Contactanos.css';

export const Contactanos = () => {
  return (
    <>
      <section>
        <h2 className="subtittle">Contáctanos</h2>
        <div>
          <p className="descripcion">
            ¡Nos encantaría conocerte! Si quieres ponerte en contacto con nosotros, no dudes en enviarme un mensaje. 
            Estamos disponibles y emocionados por hablar contigo.
          </p>
        </div>
      </section>
      <section className="section-contacto">
        <div className="contacto-info">
          <h3>Comunícate mediante:</h3>
          <p>Para asistencia inmediata,<br /> contáctanos por teléfono o correo electrónico.</p>
          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8B0E0E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              13005 Greenville Avenue
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8B0E0E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              +51910202020
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8B0E0E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              hotelito.@gmail.com
            </div>
          </div>
        </div>
        <div className="contenedor-formulario">
          <h2 className="subtittle">Formulario de Contacto</h2>
          <form id="formulario" action="#">
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
      </section>
    </>
  );
};
