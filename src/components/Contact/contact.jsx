import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

      
      <div className=" contact__options">
        <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>ruhamahkamso25@gmail.com</h5>
          <a href="mailto:ruhamahkamso25@gmail.com" target="_blank">Send a Message</a>

        </article>
        <article className="contact__option">
        <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>Ruhamah kamso</h5>
          <a href="https://n.me/ruhamah.kamso"  target="_blank">Send a Message</a>

        </article>
        <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>+2348139560435</h5>
          <a href="https://api.whatsapp.com/send?phone=+2348139560435"  target="_blank">Send a Message</a>

        </article>
      </div>
      {/* END OF CONTACT OPTION */}
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <botton type="Submit" className="btn btn-primary">Send Message</botton>

      </form>
   </div>
    </section>
  )
}

export default contact