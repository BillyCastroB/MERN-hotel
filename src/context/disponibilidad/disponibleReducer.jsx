import { CAMBIAR_DISPONIBLE_HBAITACION1 } from "../../types/type";


export const disponibleReducer = (state, action)=>{
    switch (action.type) {
        case CAMBIAR_DISPONIBLE_HBAITACION1:
            return{
                ...state,
                dispHabitacion1: action.payload
            }
        default:
            return state;
    }
}