import React from 'react'
import './Footer.css';
export const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-content">
                <div>
                    <img src="../images/logo/logo-blanco.png" alt=""/>
                    <h4 className="t4footer">Sobre nosotros</h4>
                    <p>Un ambiente acogedor y sofisticado que te invita a relajarte.</p>
                </div>
                <div>
                    <h4 className="t4footer">Encuéntranos:</h4>
                    <div className="icons">
                        <a href="#"><i className="fas fa-map-marker-alt"></i>El Tambo</a>
                        <a href="#"><i className="fas fa-phone"></i>983026278</a>
                        <a href="#"><i className="fas fa-envelope"></i>palomar@gmail.com</a>
                    </div>
                </div>
                <div>
                    <h4 className="t4footer">links de ayuda</h4>
                    <p className="libro-reclamaciones"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                        <path d="M9 8h6" />
                    </svg><a href='/views/terminoscondiciones'>Terminos y condiciones</a></p>
                    <p className="libro-reclamaciones"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-upload" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
                        <path d="M11 16h-5a2 2 0 0 0 -2 2" />
                        <path d="M15 16l3 -3l3 3" />
                        <path d="M18 13v9" />
                    </svg><a href='/views/libroreclamaciones'>Libro de Reclamaciones</a></p>
                </div>
                
            </div>
            <hr/>
            <div className="f-end">
                <div></div>
                <div className="icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <div>
                    <p>2024 c Todos los derechos reservados</p>
                </div>
            </div>

        </footer>

    </>
  )
}
