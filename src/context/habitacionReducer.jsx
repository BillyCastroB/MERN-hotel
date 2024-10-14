import { ADQUIRIR_HABITACION } from "../types/type";
import { ALMACENAR_FECHAS } from "../types/type";

const habitacionReducer = (state, action) => {
    switch (action.type) {
    case ADQUIRIR_HABITACION:
        return{
            ...state,
            habitacion: action.payload
        }
    case ALMACENAR_FECHAS:
      return{
        ...state,
        fechas: action.payload
      }   
      default:
        return state;
    }
  };
  
  export default habitacionReducer;
  