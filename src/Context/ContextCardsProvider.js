import React, { createContext } from 'react'

export const Context = createContext()

const ContextCardsProvider = (props) => {
  const log = () => {
    console.log("Card image")
  }
  return(
    <Context.Provider value={{log}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextCardsProvider