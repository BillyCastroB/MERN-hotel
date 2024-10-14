import React from 'react'
import './Portada.css';
export const Portada = () => {
  return (
    <>
        <div className="hero">
            <section className="promo">
                <h1>¿Estás listo para una nueva experiencia?</h1>
                <p>Las mejores habitaciones de la ciudad</p>
                <button><a href="/views/habitaciones">Ver Habitaciones</a></button>
            </section>
            {/* <video autoplay loop muted>
                <source src="videos/presentacion.mp4"/>
            </video> */}
            <div className="capa"></div>
        </div>
    </>
  )
}
