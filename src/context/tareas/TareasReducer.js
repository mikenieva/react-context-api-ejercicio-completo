/* eslint-disable import/no-anonymous-default-export */
import {
    LEER_TAREAS
} from './../../types'


export default (state, action) => {
    switch(action){
        case LEER_TAREAS:
            return {
                ...state
            }

        default:
            return {
                ...state
            }
    }


}