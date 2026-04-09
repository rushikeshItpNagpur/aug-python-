import React, { use, useState } from 'react'
import { themeContext } from '../context/ThemeContextProvider'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
export default function Navbar() {
    // let data=useContext(themeContext)
     let {value,changeTheme}=useContext(themeContext)
     let {isAuth,setIsAuth}=useContext(AuthContext)
    console.log(value,changeTheme) 


    let [text,setText]=useState( value ? "light theme" : "Dark theme")
  let [status,setStatus]=useState( isAuth ? "logout":"login")
    function handleClick(){
    changeTheme(value ? false :true )
    setText( value ? "light theme" : "Dark theme")
    
}

function handleStatus(){
    setIsAuth(function(prev){
      return prev ?false :true
    })

    setStatus(isAuth ? "login" : "logout")
}




return (
    <div style={{
        width:"100%",
        border:"1px solid red",
        height:"80px"
    }} >
        <button disabled={isAuth ? false :true}  onClick={handleClick} >{text}</button>
         <button onClick={handleStatus} >{status}</button>
    </div>
  )
}
