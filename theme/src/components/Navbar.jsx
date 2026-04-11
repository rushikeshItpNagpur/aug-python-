
import React, { useContext, useState } from 'react'
import { themeContext } from '../context/ThemeContextProvider'
import { AuthContext } from '../context/AuthContextProvider'

export default function Navbar() {
    let {value, changeTheme} = useContext(themeContext)
    let [text, setText] = useState(value ? 'light theme' : 'dark theme')

    function handleChange(){
        changeTheme(value ? false :true)
        setText(value ? 'light theme' : 'dark theme')
    }

    let {isAuth, setIsAuth} = useContext(AuthContext)
    let [status, setStatus] = useState( isAuth ? "logout" : "logout")
    function handleStatus(){
        setIsAuth(function(prev){
            return prev ? false : true
        })
        setStatus(isAuth ? 'login' : 'logout')
    }
  return (
    <div>
        <button disabled={isAuth ? false : true} onClick={handleChange}>{text}</button>
        <button onClick={handleStatus}>{status}</button>
    </div>
  )
}
