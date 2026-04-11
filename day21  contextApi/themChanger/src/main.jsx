import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

export const cartValue=createContext();

createRoot(document.getElementById('root')).render(
<cartValue.Provider  value={{count:1}}>
 
 <App />

</cartValue.Provider>
    
  
)
