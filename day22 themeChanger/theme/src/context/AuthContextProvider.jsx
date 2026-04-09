import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
export default function AuthContextProvider({children}) {
   let [isAuth,setIsAuth]=useState(false)
   let data={
    isAuth,
    setIsAuth
   } 
   
   return (
    <AuthContext.Provider  value={data} >
        {children}
    </AuthContext.Provider>
  )
}
