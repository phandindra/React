
import { useState } from 'react';
import './App.css'

function App() {
 const [counter, setCounter]= useState(5)
 
  
 const  addvalue = ()=>{
  if(counter<20){
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    

    console.log("clicked")
  }
  }

  const removevalue=()=>{
   if(counter>0){

    setCounter(counter-1);
    console.log("clicked")
    
   }
  }

  return (
    <>
        <h1>Counter</h1>

        <h2>current value :{counter}</h2>

        <button onClick={addvalue}>ADD</button>
        
        <button onClick={removevalue}>Remove</button>

    </>
  )
}

export default App
