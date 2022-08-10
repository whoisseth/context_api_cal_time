import { createContext, useState } from 'react'

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [color, setColor] = useState(false)
  function toggleColor() {
    setColor(!color)
  }

  return (
    <Context.Provider value={{ color, setColor, toggleColor }}>
      {children}
    </Context.Provider>
  )
}
