import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const Lobby = (props) => {
  
    const { players } = props
    const [ playersArr, setPlayersArr ] = useState([])
    
    const navigate = useNavigate()

   
  
    return (
    <div>
      <h1>Waiting for players</h1>
        <button>Start</button>
    </div>
  )
}

export default Lobby
