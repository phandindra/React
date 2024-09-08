import React, { useState } from 'react';

import './App.css'

function App() {

  let [counter,setCounter] = useState(15);
  
  function decreaseHandler(){
    setCounter(counter--);
  }
   function increaseHandler(){
    
    setCounter(counter++);
   }
  return (
   <div className='flex flex-col items-center justify-center'>
    <h1 className='text-6xl'>Counter App</h1>
    <div className='flex gap-9  items-center justify-center mt-5 '>
      <button onClick={decreaseHandler} className='text-5xl mr-5  bg-white text-black cursor-pointer'>-</button>
      <div className='ml-5 mr-5 text-9xl'>{counter}</div>
      <button onClick={increaseHandler} className='text-5xl ml-5  bg-white text-black cursor-pointer'>+</button>
    </div>
   </div>
  )
}

export default App
