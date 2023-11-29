

import { useState } from 'react'
import '../style.css'

export const Formulario = ({cosas,setCosas}) => {
    
  const [error,setError]=useState(false)
  const avisarError=()=>{
      if(error){
        return <p className='error-mensaje'>Ingrese una tarea</p>

      }
    }
    
    const agregar = (event) => {
        event.preventDefault();
        console.log(event.target.tar.value);
        if(event.target.tar.value===""){
          setError(true)
        }
        else{
          const nuevatarea={tarea:event.target.tar.value,estado:false,id:cosas ? cosas.length + 1 : 1} 
          setCosas([...cosas ,nuevatarea])
          setError(false)

        }
        
        console.log(cosas)
        event.stopPropagation();
        event.target.tar.value="";
      }
    
     return (
      <>
    <form onSubmit={agregar}>
                <input type="text" name='tar' placeholder='Ingrese una tarea'/>
                <button type='submit' className='btn-agregar' >Agregar tarea</button>
    </form>
      <div className='error'>
        {avisarError()}
      </div>
      
      </>
    
  )
}
