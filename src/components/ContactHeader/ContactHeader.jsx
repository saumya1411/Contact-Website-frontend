import React from 'react'
import Style from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className = {`container ${Style.contact_section}`}>
        <h1> CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR <br></br>JUST WANT TO CHAT ,YOU CAN 
           REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, 
           EMAIL, OR<br></br> SOCIAL MEDIA.{"  "} </p>

    </div>
  )
}

export default ContactHeader