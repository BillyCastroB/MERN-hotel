import React, { useReducer } from 'react';
import { HabitacionContext } from './habitacionContext';
import habitacionReducer from './habitacionReducer';
import { ADQUIRIR_HABITACION, ALMACENAR_FECHAS } from '../../types/type';

export const HabitacionState = (props) => {
  const initialState = {
    habitacion: null,
    fechas: null
  };

  const [state, dispatch] = useReducer(habitacionReducer, initialState);


    // funciones del context
    const obtenerHabitacion = (habitacion) =>{
        dispatch({
            type: ADQUIRIR_HABITACION,
            payload: habitacion
        })
    }
    const almacenarFechas = (dias) =>{
        dispatch({
            type: ALMACENAR_FECHAS,
            payload: dias
        })
    }

  return (
    <HabitacionContext.Provider 
        value={{ 
            habitacion: state.habitacion,
            fechas: state.fechas,
            almacenarFechas,
            obtenerHabitacion,
            }}>
      {props.children}
    </HabitacionContext.Provider>
  );
};

