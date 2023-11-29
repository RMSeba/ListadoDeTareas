

import '../style.css'

export const Formulario = ({cosas,setCosas}) => {
    
    // const {metas,setMetas}=Funtarea();
    // const [cosas,setCosas] = useState(metas);
    
    const agregar = (event) => {
      event.preventDefault();
        console.log(event.target.tar.value);
        const nuevatarea={tarea:event.target.tar.value,estado:false,id:cosas ? cosas.length + 1 : 1} 
        setCosas([...cosas ,nuevatarea])
        
        console.log(cosas)
        event.stopPropagation();
        event.target.tar.value="";
      }
    
     return (
    <form onSubmit={agregar}>
                <input type="text" name='tar' placeholder='Ingrese una tarea'/>
                <button type='submit' className='btn-agregar' >Agregar tarea</button>
    </form>
  )
}
