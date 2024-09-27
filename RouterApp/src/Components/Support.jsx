import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate()
  function clickHandler(){
    navigate("/about");
  }
  return (
    <div>
      This is support page
      <button onClick={clickHandler}>
        go to about
      </button>
    </div>
  )
}

export default Support
