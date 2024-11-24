import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Habitacion.css';
import { clienteAxios } from '../../../../config/clienteAxios';
import { HabitacionContext } from '../../../context/habitaciones/habitacionContext';
import DisponibleContext from '../../../context/disponibilidad/disponibleContext';

export const Habitacion = ({ habitacion }) => {
  const habitacionesContext = useContext(HabitacionContext);
  const { obtenerHabitacion, almacenarFechas } = habitacionesContext;

  const dispdHabitaciones = useContext(DisponibleContext);
  const { desHabilitar1 } = dispdHabitaciones;

  const { id, nombre, descripcion, imagen_1, imagen_2, imagen_3, precio, capacidad } = habitacion;

  const [diasFecha, setDiasFecha] = useState({
    diaInicio: '',
    diaFin: '',
  });

  const [disponible, setDisponible] = useState(null); // null: no se ha verificado, true: disponible, false: no disponible

  const escucharFechas = (e) => {
    setDiasFecha({
      ...diasFecha,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerFechas = async (e) => {
    e.preventDefault();
    almacenarFechas(diasFecha);

    try {
      const respuesta = await clienteAxios.get(`/reserva/huesped/${id}`);
      const nombreHuesped = respuesta.data[0]?.nombre || null;

      setDisponible(!nombreHuesped); // Disponible si no hay nombre
    } catch (error) {
      console.error('Error al verificar disponibilidad:', error);
      setDisponible(false); // En caso de error, se asume no disponible
    }
  };

  return (
    <div className="contenedor">
      <div className="habitacion">
        <div className="grid-habitaciones">
          <div className="vc1">
            <img className="img-habitacion" src={`./imagenesHabitaciones/${imagen_1}`} alt="Habitación 1" />
          </div>
          <div className="vc2">
            <img className="img-habitacion" src={`./imagenesHabitaciones/${imagen_2}`} alt="Habitación 2" />
          </div>
          <div className="vc3">
            <img className="img-habitacion" src={`./imagenesHabitaciones/${imagen_3}`} alt="Habitación 3" />
          </div>
        </div>

        <div className="card">
          <div className="contenedor-descripcion">
            <h2 className="subtitulo-habitacion">{nombre}</h2>
            <p className="descripcion-habitacion">{descripcion}</p>
            <div className="habitacion__descripcion">
              <div className="cont-precio">
                <p className="precio">
                  <strong>S/. {precio}.00</strong>
                </p>
                <p>la noche</p>
                <p>Cap. Max {capacidad}</p>
              </div>
              <form>
                <div className="formulario_dato">
                  <label htmlFor="diaInicio">Fecha inicio</label>
                  <input
                    type="date"
                    name="diaInicio"
                    value={diasFecha.diaInicio}
                    onChange={escucharFechas}
                  />
                </div>
                <div className="formulario_dato">
                  <label htmlFor="diaFin">Fecha fin</label>
                  <input
                    type="date"
                    name="diaFin"
                    value={diasFecha.diaFin}
                    onChange={escucharFechas}
                  />
                </div>
                <button
                  className={
                    diasFecha.diaInicio && diasFecha.diaFin
                      ? 'btn-disponibilidad usable'
                      : 'btn-disponibilidad no-usable'
                  }
                  type="submit"
                  onClick={obtenerFechas}
                >
                  Ver Disponibilidad
                </button>
              </form>
              <div className="verObjDisponibles">
                {disponible === null && null}
                {disponible === true && (
                  <div>
                    <p className="disponible">Disponible</p>
                    <Link
                      className="btn-reservar"
                      to="/reservar"
                      role="button"
                      onClick={() => obtenerHabitacion(habitacion)}
                    >
                      Reservar
                    </Link>
                  </div>
                )}
                {disponible === false && (
                  <p className="Nodisponible">No Disponible en este momento</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
