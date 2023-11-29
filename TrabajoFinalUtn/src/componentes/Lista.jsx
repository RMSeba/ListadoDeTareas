import {  useEffect, useState } from 'react';
import{Formulario} from './Form'
import{ContadorTareas} from './Contador'
import{Funtarea} from './Tareas'


export const Lista = () => {
  const [cosas, setCosas] = useState([]);
  useEffect(()=>{
    console.log('se a modificado el array de cosas')
    console.log('Nuevo estado de cosas:', cosas);
 },[cosas])

 
  return (
    < >
      
      <h1 className='textoCentrado'>Lista de tareas</h1>
      <ContadorTareas cosas={cosas}></ContadorTareas>
      <div className='cont-padre'>
            <Formulario cosas={cosas} setCosas={setCosas}></Formulario>
            <div className='contenedor'>
             <Funtarea cosas={cosas} setCosas={setCosas}></Funtarea>
             <p></p>
            </div>
      </div>

             
      
    </>
  )
}
