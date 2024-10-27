import React, {useReducer} from 'react'
import { Autentificacion } from './authContext'
import { authReducer } from './authReducer'
export const authState = (props) => {
    const initialState={
        usuario: null
    }

    const [state, dispatch] = useReducer( authReducer, initialState);

    
  return (
    <Autentificacion.Provider
        value={{
            usuario: state.usuario
        }}
    >
        {props.children}
    </Autentificacion.Provider>
  )
}
