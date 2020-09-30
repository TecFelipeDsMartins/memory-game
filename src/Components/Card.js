import React, { useState, useContext } from 'react'
import {Context} from '../Context/ContextCardsProvider'

const Card = () => {
    const [ poits, setPoits] = useState(0)
    const { log } = useContext(Context)
  return(
    <div>
      <div className="Container">
        <p>{ poits }</p>
        <button onClick={()=>{log()}}>play</button>
      </div>
    </div>
  )
}

export default Card