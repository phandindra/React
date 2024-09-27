import React from 'react'
import { useNavigate } from 'react-router-dom'

function lab() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/support")
  }

  function homeHandler(){
    navigate("/");
  }
  return (
    <div>

      This is lab page 

      <button onClick={clickHandler}>Go to support </button>
      <button onClick={homeHandler}>Home</button>
    </div>
  )
}

export default lab
