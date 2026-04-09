import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Text from './component/Text'
import { themeContext } from './context/ThemeContextProvider'

export default function App() {
let {value}=useContext(themeContext)


  return (
    <div style={{
            
            backgroundColor : value ? "black" :"white",
            color: value ? "white" :"black"

        }} >
      <Navbar/>
      <Text/>


    </div>
  )
}
