import React from 'react'
import './MainInicio.css'
export const MainInicio = () => {
  return (
    <>
    <main className="">
        <section className="servicios">
            <div className="servicios-box2">
                <p className='servicios-texto'>Calidad en Todas Nuestras Habitaciones</p>
                <h3 className="servicios-titulo text-center">   
                Disfruta de espacios modernos y funcionales, diseñados para brindar     comodidad y elegancia.
                </h3>
            </div>
            <div className='servicios-box1'>
                <img className="servicios-img" src="./imagenesPaginas/hotelsin_fondo.png" alt="Servicios"/>
            </div>
        </section>
        
        <section className='my'>
            <div className='grid-mid'>
                <div className='cont1 cont-img'>
                    <img className='img-cont1' src="./imagenesPaginas/vista1.webp" alt="imagen-ref1" />
                </div>
                <div className='cont2'>
                    <img className='estrella' src="./imagenesPaginas/estrella.png" alt="imagen-adorno" />
                    <h3>Si lo puedes imaginar <br /> ..lo puedes programar</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis nesciunt corporis autem optio repellendus consequuntur consequatur eum accusantium.
                    </p>
                </div>
                <div className='cont3 cont-img'>
                    <img className='img-cont3' src="./imagenesPaginas/vista2.jpg" alt="imagen-ref1" />
                </div>
            </div>
        </section>


        {/* <section className="container">
            <div className="atencion-grid">
                <div className="atencion-img" data-aos="fade-right" data-aos-duration="2000">
                    <img src="./imagenesPaginas/atencion2.webp" alt=""/>
                </div>
                <div className="atencion-textos" data-aos="fade-left">
                    <h4>EXTERIOR</h4>
                    <hr className="hr"/>
                    <h3>Moderno & Acogedor</h3>
                    <p className="atencion-descripcion">Nuestro hotel combina diseño urbano y comercial para ofrecer un ambiente moderno y acogedor. Las áreas comunes están diseñadas para brindar una experiencia visualmente atractiva y funcional, ideal tanto para viajeros de negocios como para turistas.El diseño arquitectónico del hotel combina elementos contemporáneos y tradicionales, creando una fachada impactante que se integra perfectamente en el entorno urbano. La modernidad de nuestra estructura refleja un estilo elegante y sofisticado.Los interiores del hotel están diseñados para ser funcionales y estéticamente agradables. Los espacios comunes, como el lobby y las áreas de descanso, están equipados con muebles cómodos y decoraciones modernas que crean un ambiente acogedor y relajante.</p>
                </div>
            </div>
        </section> */}
    </main>

    </>
  )
}
