import React, {useReducer} from 'react'
import { LEER_TAREAS } from '../../types'

import TareasContext from './TareasContext'
import TareasReducer from './TareasReducer'

export default function TareasState (props){

    // 1. INITIAL STATE (ESTADO INICIAL)
    // Siempre es un objeto
    const initialState = {
        tareas: [
            {id: 1, nombre: "Aprender Context API"}
        ]
    }


    // 2. CONFIGURACIÓN - VÍNCULO DE ESTADO CON ACCIONES DEL USUARIO (REDUCERS)

    // LOS DISPATCH SON "PERSONITAS" QUE AUTORIZAN LA MANIPULACIÓN DEL ESTADO, A TRAVÉS DE LOS REDUCERS

    // REDUCER - UNA MISIÓN. MANIPULAR EL ESTADO
    // DISPATCH - JUNTAR TODAS LAS ACCIONES Y AUTORIZAR LA MANIPULACIÓN DEL ESTADO. GATILLO.
    const [state, dispatch] = useReducer(TareasReducer,initialState)


    // 3. FUNCIONES QUE DISPARAN LOS REDUCERS

    const leerTareas = () => {
        dispatch({
            type: LEER_TAREAS,
            payload: null
        })
    }


    // 4. SURTIDO DE DATOS - ENTREGA DE DATOS
    return (
        <TareasContext.Provider
            value={{
                tareas: state.tareas,
                leerTareas
            }}
        >
            {props.children}
        </TareasContext.Provider>
    )

}