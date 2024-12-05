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
            <h3 className='footer-h3'>Sobre Nosotros</h3>
            <p className='parrafo-footer'>
              Nos dedicamos a brindar experiencias únicas, combinando comodidad, elegancia y un servicio excepcional.
            </p>
          </div>

          {/* Sección Redes Sociales */}
          <div className="footer-redes">
            <h3 className='footer-h3'>Conéctate con nosotros</h3>
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
            <h3 className='footer-h3'>Tu opinión es importante</h3>
            <ul>
              <li>
                <img src="./imagenesPaginas/libro.png" alt="Libro de reclamaciones" className="icono-redes" />
                Libro de reclamaciones
              </li>
            </ul>
          </div>


          {/* Sección Horario */}
          <div className="footer-atencion">
            <h3 className='footer-h3'>Horario de Atención</h3>
            <p>De Lunes a Viernes</p>
            <p>De 7am - 7pm</p>
          </div>
        </div>
      </footer>


    </>
  );
}
