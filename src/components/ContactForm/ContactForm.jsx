
import React from 'react'
import Style from './ContactForm.module.css'
import Button from '../Button/Button'
import {AiFillMessage} from "react-icons/Ai"
import {FaPhoneAlt} from "react-icons/Fa"
import {useState} from "react"

const ContactForm = () => {

  const [Name, setName] = useState("Sam")
      let name
      let email
      let text



     const onViaCallSubmit = () => {
        console.log("Wanna call?")
     }
 const onSubmit = (event) => {
       event.preventDefault()
       setName = event.target[0].value
       email = event.target[1].value
       text = event.target[2].value

       console.log("name", event.target[0].value)
       console.log("email", event.target[1].value)
       console.log("text", event.target[2].value)

       console.log({
           name,
           email,
           text,
       })
 } 


  return(
    <>
    <section className = {Style.container}>
      <div className = {Style.contact_form}> 

        <div className = {Style.top_btn}>
         <Button text=" VIA SUPPORT CHAT" icon ={ <AiFillMessage fontSize = "24px" />}/>
         <Button  
         onClick = {onViaCallSubmit}
          text=" VIA CALL" icon ={ <FaPhoneAlt fontSize = "24px" />}/>
       </div> 


         <form onSubmit={onSubmit}>
          <div className = {Style.form_Control}>
           <label htmlfor  = "Name">Name</label>
           <input type = "text" name = "name"/>
           </div>

           <div className = {Style.form_Control}>
           <label htmlfor  = "email">Email</label>
           <input type = "email" name = "email"/>
           </div>

           <div className = {Style.form_Control}>
           <label htmlfor  = "text">Text here</label>
           <textarea name = "text"/>
           </div>

            <div style = {{ display: 'flex',  justifyContent: "end"}}>
              <Button
               text = "SUBMIT"/>
            </div>

             <div>{name + " " + email + " " + text + " " }</div>

         </form>
      
   
      </div>
      
      <div className = {Style.contact_image}>
       
      </div>
    </section>
  </>
  )
}

export default ContactForm