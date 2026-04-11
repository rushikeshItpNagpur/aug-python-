
import React, { createContext, useState } from 'react'

export const themeContext = createContext()

export default function ThemeContextProvider({children}) {
let [theme, setTheme] = useState(false)

let obj = {
    value : theme,
    changeTheme : setTheme
}

  return (
    <themeContext.Provider value={obj}>
        {children}
    </themeContext.Provider>
  )
}
