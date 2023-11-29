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

 const eliminar=(id)=>{
  const nuevasMetas=cosas.filter(cosa=>cosa.id !== id)
  
  setCosas(nuevasMetas)
}
const realizado = (id) => {
    const nuevasMetas = cosas.map(cosa => {
      if (cosa && cosa.id === id) {
        return { ...cosa, estado: !cosa.estado };
      }
      else if (cosa.id === id && cosa.estado===true){
        return  { ...cosa, estado: !cosa.estado };
      }
      return cosa;
      });
      
      setCosas(nuevasMetas);
  }
 
  return (
    < >
      
      <h1 className='textoCentrado'>Lista de tareas</h1>
      <ContadorTareas cosas={cosas}></ContadorTareas>
      <div className='cont-padre'>
            <Formulario cosas={cosas} setCosas={setCosas}></Formulario>
            <div className='contenedor'>
             <Funtarea cosas={cosas} setCosas={setCosas}realizarTarea={realizado} eliminarTarea={eliminar}></Funtarea>
             <p></p>
            </div>
      </div>

             
      
    </>
  )
}
