import React,{ useState, useContext} from 'react'
import TareasContext from './../context/tareas/TareasContext'

export default function Tareas() {

    const [data, setData] = useState({
        name: ""
    })

    // OBTENCIÓN DEL CONTEXTO (LUZ DEL SOL)
    const ctx = useContext(TareasContext)
    console.log(ctx)


    // FUNCIONES CRUD

    const manejarCambios = (e) => {
        console.log(e)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    console.log(data)

    return (
        <div>
            {
                ctx.tareas.map((e, i) => {
                    return(
                        <p>{e.id} - {e.name}</p>
                    )
                })
            }

            
            <form>
                <input 
                    name="name"
                    type="text"
                    onChange={(e) => manejarCambios(e)}
                />
                <button onClick={(e) => ctx.agregarTareas(e, data)}>
                    Crear tareas
                </button>
            </form>

            
        </div>
    )
}
