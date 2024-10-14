import React from 'react'
import './MainInicio.css'
export const MainInicio = () => {
  return (
    <>
    <main className="">
        <section className="servicios container">
            <div className="servicios-box1" data-aos="zoom-in" data-aos-duration="2000">
                <img className="servicios-img" src="images/vistaExterior.avif" alt="Servicios"/>
            </div>
            <div className="servicios-box2" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                <h3 className="servicios-titulo text-center">SMART TV CON CABLE / TELEFONO / WIFI ALTA VELOCIDAD</h3>
                <p className="servicios-text">Todas las habitaciones cuentan con TV CABLE y todos los canales disponibles. Garantizamos su buena atención, contamos con el servicio de WI-FI de alta velocidad gratis en las habitaciones y en todo el hotel. Siéntete cómodo con el servicio de baño privado, agua fría y caliente en todas las habitaciones, también contamos con estacionamiento.
                </p>
                <div>
                    {/* <img src="images/iconos/image-removebg-preview (17).png" alt=""/> */}
                </div>
            </div>
        </section>
        
        <section className="container">
            <div className="atencion-grid">
                <div className="atencion-img" data-aos="fade-right" data-aos-duration="2000">
                    <img src="images/atencion2.avif" alt=""/>
                </div>
                <div className="atencion-textos" data-aos="fade-left">
                    <h4>EXTERIOR</h4>
                    <hr className="hr"/>
                    <h3>Moderno & Acogedor</h3>
                    <p className="atencion-descripcion">Nuestro hotel combina diseño urbano y comercial para ofrecer un ambiente moderno y acogedor. Las áreas comunes están diseñadas para brindar una experiencia visualmente atractiva y funcional, ideal tanto para viajeros de negocios como para turistas.El diseño arquitectónico del hotel combina elementos contemporáneos y tradicionales, creando una fachada impactante que se integra perfectamente en el entorno urbano. La modernidad de nuestra estructura refleja un estilo elegante y sofisticado.Los interiores del hotel están diseñados para ser funcionales y estéticamente agradables. Los espacios comunes, como el lobby y las áreas de descanso, están equipados con muebles cómodos y decoraciones modernas que crean un ambiente acogedor y relajante.</p>
                </div>
            </div>
        </section>
    </main>

    </>
  )
}
