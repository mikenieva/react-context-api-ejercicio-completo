import React, {useReducer} from 'react'
import { AGREGAR_TAREAS } from '../../types'

import TareasContext from './TareasContext'
import TareasReducer from './TareasReducer'

export default function TareasState (props){

    // 1. INITIAL STATE (ESTADO INICIAL)
    // Siempre es un objeto
    const initialState = {
        tareas: []
    }


    // 2. CONFIGURACIÓN - VÍNCULO DE ESTADO CON ACCIONES DEL USUARIO (REDUCERS)

    // LOS DISPATCH SON "PERSONITAS" QUE AUTORIZAN LA MANIPULACIÓN DEL ESTADO, A TRAVÉS DE LOS REDUCERS

    // REDUCER - UNA MISIÓN. MANIPULAR EL ESTADO
    // DISPATCH - JUNTAR TODAS LAS ACCIONES Y AUTORIZAR LA MANIPULACIÓN DEL ESTADO. GATILLO.
    const [state, dispatch] = useReducer(TareasReducer,initialState)


    // 3. FUNCIONES QUE DISPARAN LOS REDUCERS

    const agregarTareas = (e, data) => {
        e.preventDefault()

        dispatch({
            // SON EL action.XXXXXX
            type: AGREGAR_TAREAS,
            payload: data
        })
    }


    // 4. SURTIDO DE DATOS - ENTREGA DE DATOS
    return (
        <TareasContext.Provider
            value={{
                tareas: state.tareas,
                botellasDeAgua: 15,
                agregarTareas
            }}
        >
            {props.children}
        </TareasContext.Provider>
    )

}