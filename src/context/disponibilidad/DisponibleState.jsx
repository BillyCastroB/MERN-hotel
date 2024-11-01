import React, {useContext, useEffect, useState, useReducer} from 'react'
import DisponibleContext from './disponibleContext'
import { disponibleReducer } from './disponibleReducer'
import { CAMBIAR_DISPONIBLE_HBAITACION1 } from '../../types/type'


export const DisponibleState = (props) => {
    const inititalState = {
        dispHabitacion1 : false,
        dispHabitacion2 : false,
        dispHabitacion3 : false,
        dispHabitacion4 : false,
        dispHabitacion5 : false,
        dispHabitacion6 : false,
    }
    const [ state, dispatch] = useReducer( disponibleReducer, inititalState);

    const desHabilitar1 = (numero)=>{
        dispatch({
            type: CAMBIAR_DISPONIBLE_HBAITACION1,
            payload: numero
        })
    }
    
  return (
    <DisponibleContext.Provider value={{
        dispHabitacion1: state.dispHabitacion1,
        dispHabitacion2: state.dispHabitacion2,
        dispHabitacion3: state.dispHabitacion3,
        dispHabitacion4: state.dispHabitacion4,
        dispHabitacion5: state.dispHabitacion5,
        dispHabitacion6: state.dispHabitacion6,
        desHabilitar1
    }}>
        {props.children}
    </DisponibleContext.Provider>
  )
}
