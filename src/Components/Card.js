import React, { useState } from 'react'
import Score from './Score'

const Card = () => {
    const [ poits, setPoits] = useState(0)
  return(
    <div>
      <div className="Container">
        <Score poits={poits}/>
        <p>{ poits }</p>
        <button onClick={()=>{setPoits(poits +1)}}>play</button>
      </div>
    </div>
  )
}

export default Card