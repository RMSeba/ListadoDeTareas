import { useEffect, useState } from "react"
import '../style.css'


export const ContadorTareas = ({cosas}) => {
    
    const[contador,setContador]=useState(0);
    
    
      const[realizada,setRealizada]=useState(0);
      useEffect(() => {
          setContador(cosas.length);
          let tareaRealizada=0;
          let tareaPendiente=cosas.length;
          cosas.forEach(cosa=> {

            if(cosa.estado===true  ){
              tareaRealizada+=1;
              tareaPendiente-=1;
            }
            
         }); 
          

         setRealizada(tareaRealizada)
         setContador(tareaPendiente)
        
        
      }, [cosas]);

    
  return (
    <div className="contCont">
        <p className="contadorP">Tareas Pendientes = {contador}</p>
        <p className="contadorP">Tareas Realizadas = {realizada}</p>
    </div>
  )
}
