import{Formulario} from './Form'

import{Funtarea} from './Tareas'


export const Lista = () => {

  
  return (
    < >
      
      <h1 className='textoCentrado'>Lista de tareas</h1>
      <div className='cont-padre'>
            <Formulario></Formulario>
            <div className='contenedor'>
             <Funtarea></Funtarea>
            </div>
      </div>

             
      
    </>
  )
}
