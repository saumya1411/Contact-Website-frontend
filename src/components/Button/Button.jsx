
import React from 'react'
import {AiFillMessage} from "react-icons/ai"
import Style from './Button.module.css'
const Button = (props) => {
  

  return (
    
    <button clasName = {Style.primary_btn}>
       
    
    {props.icon}
    {props.text}
    </button>
       
        
  )
}

export default Button
