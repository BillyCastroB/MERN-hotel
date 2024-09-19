import React from 'react'
import './Habitacion.css';
export const Habitacion = () => {
  return (
   <>
   <div className="adorno contenedor">
     <img
       className="adorno-img"
       src="../images/iconos/linea-removebg-preview.png"
       alt=""
     />
   </div>

   <h1 className="titulo-habitaciones text-center">HABITACIONES</h1>
   <h2 className="my-4">Habitaciones VIP</h2>

   <div className="grid-habitaciones contenedor">
     <div className="habitacion p2">
       <div className="grid-md">
         <div
           className="vc1"
           data-bs-toggle="modal"
           data-bs-target="#modal"
           data-bs-imagen="habitacion02.webp"
           data-aos="fade-down"
         >
           <img
             className="img-habitacion"
             src="imagenes/habitacion02.webp"
             alt="Habitación Doble Interior"
           />
         </div>
         <div
           className="vc2"
           data-bs-toggle="modal"
           data-bs-target="#modal"
           data-bs-imagen="ImageToStl.com_a1.avif"
           data-aos="fade-up-right"
         >
           <img
             className="img-habitacion"
             src="imagenes/ImageToStl.com_a1.avif"
             alt="Habitación Doble Interior"
           />
         </div>
         <div
           className="vc3"
           data-bs-toggle="modal"
           data-bs-target="#modal"
           data-bs-imagen="ImageToStl.com_a2.avif"
           data-aos="fade-up-left"
         >
           <img
             className="img-habitacion"
             src="imagenes/ImageToStl.com_a2.avif"
             alt="Habitación Doble Interior"
           />
         </div>
       </div>
       <div
         className="card"
         data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1000"
       >
         <div className="contenedor-descripcion">
           <h2 className="subtitulo-habitacion">Habitación Doble Interior</h2>
           <p className="descripcion-habitacion">
             Esta amplia habitación está elegantemente decorada con muebles de alta gama y acabados sofisticados. Disfruta de una cama king size con ropa de cama premium, un baño privado con jacuzzi, y una vista panorámica impresionante de la ciudad.
           </p>
           <div>
             <div className="cont-precio">
               <p className="precio"><strong>S/.100.00</strong></p>
               <p>la noche</p>
             </div>
             <a
               className="btn-reservar btn-vip2 text-center"
               data-bs-id="2"
               data-bs-imagen="habitacion02.webp"
               href="/views/vip1"
               role="button"
             >
               Reservar
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </>
  )
}
