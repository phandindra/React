
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [width,setWidth] = useState(window.innerWidth);
  const[height,setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    console.log("use effect hit")
    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    })

  },[width,height]);
  

  return (
    <div>
    <h1>width :{width} px</h1>
    <h1>Height :{height} px</h1>
    </div>
  )
}

export default App
