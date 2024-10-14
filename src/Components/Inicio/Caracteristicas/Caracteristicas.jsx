import React from 'react'
import './Caracteristicas.css';
export const Caracteristicas = () => {
  return (
    <>
        <section className="caracteristicas">
            <div className="gradiente">
                <h4 className="caracteristicas-titulo">Lo que nos identifica</h4>
                <p className="descripcion">Bienvenidos a El Palomar, donde la elegancia se encuentra con la comodidad. Situado en el corazón de la ciudad, nuestro hotel ofrece una experiencia única y memorable para cada uno de nuestros huéspedes. Ya sea que viaje por negocios o por placer, nuestra misión es hacer de su estancia una experiencia inigualable, llena de confort, lujo y un servicio excepcional.</p>
                <div className="iconos">
                    <div>
                        {/* <img src="images/architecture-firm-01.png" alt=""/> */}
                        <h4>Residential Design</h4>
                        <p>Nuestro enfoque en el diseño residencial se basa en crear espacios que combinan confort y estilo. Las habitaciones están equipadas con muebles modernos y funcionales, cuidadosamente seleccionados para garantizar la máxima comodidad.
                        </p>
                    </div>
                    <div>
                        {/* <img src="images/architecture-firm-02 (1).png" alt=""/> */}
                        <h4>Residential Design</h4>
                        <p>Las áreas comunes de nuestro hotel están diseñadas para ser espacios multifuncionales que se adaptan a las necesidades de todos nuestros huéspedes.Cada espacio está pensado para ofrecerte una experiencia confortable y agradable.</p>
                    </div>
                    <div>
                        {/* <img src="images/architecture-firm-04.png" alt=""/> */}
                        <h4>Residential Design</h4>
                        <p>Nuestro restaurante, La Vista, es un reflejo de nuestra dedicación a la excelencia culinaria. Ofrecemos una variedad de platos que combinan lo mejor de la cocina peruana tradicional con innovadoras fusiones que deleitarán tu paladar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
