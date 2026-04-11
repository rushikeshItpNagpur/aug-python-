import React from 'react'
import CompTow from './CompTow'
import Com from './Com'
import { useContext } from 'react'
import { cartValue } from '../main'


export default function Compth() {
      let data=useContext(cartValue);
      console.log(data)                                         
  return (
    <div>
      <Com/>
    </div>
  )
}
