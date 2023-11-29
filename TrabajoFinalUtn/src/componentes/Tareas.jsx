
import '../style.css'


 export const Funtarea = ({cosas,setCosas,eliminarTarea,realizarTarea}) => {
    
    return (
    
    <ol>{cosas.map((cosa,index)=>(

        <li key={index}><span style={{ textDecoration: cosa.estado ? 'line-through' : 'none' }}>{cosa.tarea}</span>

        <button onClick={() => eliminarTarea(cosa.id)} className="btn-eliminar">X</button>
        <button onClick={() => realizarTarea(cosa.id)} className="btn-realizado">V</button></li>
        
      ))
        
        }

      </ol>
    
    )

}

