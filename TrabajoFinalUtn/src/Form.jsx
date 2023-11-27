import {Funtarea} from './Tareas';
import './style.css'

export const Formulario = () => {
    

    const {metas,setMetas} = Funtarea();
    
    const agregar = (event) => {
        console.log(event.target.tar.value);
        setMetas([...metas, { tarea: event.target.tar.value, id: metas.length + 1, estado: false }]); 
        event.stopPropagation();
      }
    
     return (
    <form onSubmit={agregar}>
                <input type="text" name='tar' placeholder='Ingrese una tarea'/>
                <button type='submit' className='btn-agregar' >Agregar tarea</button>
    </form>
  )
}
