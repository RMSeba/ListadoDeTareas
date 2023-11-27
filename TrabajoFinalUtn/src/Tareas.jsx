import { useEffect, useState,  } from "react"
import './style.css'


 export const Funtarea = () => {
    const [metas, setMetas ]=useState([{tarea:"terminar el tp",id:0,estado:false}]);
    
    useEffect(()=>{
       console.log('se a modificado el array de metas')
       console.log('Nuevo estado de tarea:', metas);
    },[metas])
    
    const eliminar=(id)=>{
        const nuevasMetas=metas.filter(meta=>meta.id !== id)
        setMetas(nuevasMetas)
    }
    const realizado = (id) => {
        const nuevasMetas = metas.map(meta => {
          if (meta.id === id) {
            return { ...meta, estado: true };
          } else {
            return meta;
          }
        });
        setMetas(nuevasMetas);
    }
   
    
    return (
    
    <ol>{metas.map((meta,index)=>(

        <li key={index}><span style={{ textDecoration: meta.estado ? 'line-through' : 'none' }}>{meta.tarea}</span>

        <button onClick={() => eliminar(meta.id)} className="btn-eliminar">X</button>
        <button onClick={() => realizado(meta.id)} className="btn-realizado">V</button></li>
        
      ))
        
        }

      </ol>
    
    )

}

