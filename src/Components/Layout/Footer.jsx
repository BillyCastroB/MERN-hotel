import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <>
      
      <footer>
        <div className="footer-contenedor">
          {/* Sección "Sobre Nosotros" con el logo dentro */}
          <div className="footer-nosotros">
            <div className="footer-logo-container">
              <img src="./imagenesPaginas/logo.png" alt="logo de la empresa" className="footer-logo" />
            </div>
            <h3>Sobre Nosotros</h3>
            <p>
              Nos dedicamos a brindar experiencias únicas, combinando comodidad, elegancia y un servicio excepcional.
            </p>
          </div>

          {/* Sección Redes Sociales */}
          <div className="footer-redes">
            <h3>Conéctate con nosotros</h3>
            <ul>
              <li>
                <img src="./imagenesPaginas/fb.png" alt="Facebook" className="icono-redes" />
                Facebook
              </li>
              <li>
                <img src="./imagenesPaginas/insta.png" alt="Instagram" className="icono-redes" />
                Instagram
              </li>
              <li>
                <img src="./imagenesPaginas/tiktok.png" alt="Tiktok" className="icono-redes" />
                Tiktok
              </li>
            </ul>
          </div>

          {/* Sección "Importante" */}
          <div className="footer-important">
            <h3>Tu opinión es importante</h3>
            <ul>
              <li>
                <img src="./imagenesPaginas/libro.png" alt="Libro de reclamaciones" className="icono-redes" />
                Libro de reclamaciones
              </li>
            </ul>
          </div>

          {/* Sección Contacto */}
          <div className="footer-contact">
            <h3>Contáctanos</h3>
            <p>
              <img src="./imagenesPaginas/ubi.png" alt="Ubicación" className="icono-contacto" />
              Av. Mariscal Castilla 233, San Agustín de Cajas 12100, Perú · 05 km
            </p>
            <p>
              <img src="./imagenesPaginas/celular.png" alt="Celular" className="icono-contacto" />
              N° de celular: 921851630
            </p>
          </div>

          {/* Sección Horario */}
          <div className="footer-atencion">
            <h3>Horario de Atención</h3>
            <p>De Lunes a Viernes</p>
            <p>De 7am - 7pm</p>
          </div>
        </div>
      </footer>


    </>
  );
}
