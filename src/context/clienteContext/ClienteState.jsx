import React from 'react'
import { useReducer } from 'react'
import { clienteReducer } from './clienteReducer'
import { ClienteContext } from './clienteContext'
import { clienteAxios } from '../../../config/clienteAxios'

export const ClienteState = (props) => {
    const initialState = {
        habitacion: null,
        huesped: null,
        fechas: null
    }
    const [ state, dispatch ] = useReducer( clienteReducer,initialState )

    const confirmarHuesped = async (huesped)=>{
      try {
         const resultado = await clienteAxios.post('/reserva/huesped', huesped);
         console.log(resultado) 
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <ClienteContext.Provider value={{
        habitacion: state.habitacion,
        huesped: state.huesped,
        fechas: state.fechas,
        confirmarHuesped
    }}>
        {props.children}
    </ClienteContext.Provider>
  )
}
