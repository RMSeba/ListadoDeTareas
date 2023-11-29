import { useEffect, useState,  } from "react"
import '../style.css'


 export const Funtarea = ({cosas,setCosas}) => {
    
    const [metas, setMetas ]=useState(cosas);
    
    useEffect(() => {
      setMetas(cosas);
      console.log("se actualizo metas")
    }, [cosas]);
    
    
    
    const eliminar=(id)=>{
        const nuevasMetas=metas.filter(meta=>meta.id !== id)
        setMetas(nuevasMetas)
        setCosas(nuevasMetas)
    }
    const realizado = (id) => {
      const nuevasMetas = metas.map(meta => {
        if (meta && meta.id === id) {
          return { ...meta, estado: !meta.estado };
        }
        else if (meta.id === id && meta.estado===true){
          return  { ...meta, estado: !meta.estado };
        }
        return meta;
        });
        setMetas(nuevasMetas);
        setCosas(nuevasMetas);
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

