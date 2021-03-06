/* eslint-disable import/no-anonymous-default-export */
import {
    AGREGAR_TAREAS
} from './../../types'


export default (state, action) => {
    switch(action.type){
        case AGREGAR_TAREAS:
            return {
                ...state,
                tareas: [
                    ...state.tareas, 
                    action.payload
                ]
            }

        default:
            return {
                ...state
            }
    }


}