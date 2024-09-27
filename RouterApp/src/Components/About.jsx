import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/lab");
  }
  return (
    <div>
      This is about page
      <button onClick={clickHandler}>
        Go to lab
      </button>
    </div>
  )
}

export default About
