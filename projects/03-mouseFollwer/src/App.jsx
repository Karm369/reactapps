import { useState,useEffect } from 'react'

function App() {
  
    const [enabled, setEnabled] = useState(false)
    const [position,setPosition] = useState({x:0, y:0})

    useEffect(()=>{
  
      console.log("efecto ",{enabled})

      //event to set x,y from pointermove function 
      const handleMove =(event)=>{
        const {clientX,clientY}=event
        //console.log("handleMove ",{clientX,clientY})
        setPosition({x:clientX, y:clientY})
      }
      //suscription
      if(enabled){
        window.addEventListener("pointermove",handleMove)
      
      }
      //clean
      return()=>{window.removeEventListener("pointermove",handleMove)}
 
    },[enabled])

    return (
      <main>
      <div style={{ 
      visibility:`${enabled? "visible":"hidden"}`,
      position: "absolute",
      //TODO: add change color relative to x position
      backgroundColor: "#09f",
      borderRadius:"50%",
      opacity:0.3,
      pointerEvents:"none",
      left:-20,
      top:-20,
      width:40,
      height: 40,
      transform:`translate(${position.x}px, ${position.y}px)`
      }
        
      }/>
      <button onClick={()=>setEnabled(!enabled)}> {enabled?"Desactivar ":"Activar "}Zona</button>
      </main>
    )
}

export default App
