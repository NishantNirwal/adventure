import React from 'react'
import './styles/ContactForm.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function ContactForm() {
  return (
    <section className='contactinfo'>

      <div className='contact-div1'>
        <h2>We're Ready, Let's Talk.</h2>

        <form className='contact-form'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <textarea placeholder='Message' rows={5} />
          <div>
            <button className='main-btn'>SEND MESSAGE</button>
          </div>
        </form>
      </div>


      <div className='contact-div2'>
        <h2>Contact Info</h2>

        <div className='contact-divi'>
          <h5>Address</h5>
          <p>123 Fifth Avenue, NY 10160, New York, USA</p>
        </div>

        <div className='contact-divi'>
          <h5>Email Us</h5>
          <p>contact@example.com</p>
        </div>

        <div className='contact-divi'>
          <h5>Call Us</h5>
          <p>800-123-456</p>
        </div>

        <div className='contact-divi' >
        <h5>Follow Us</h5>
        <div className='social-icons'>

          <div><FaFacebookF /></div>
          <div><FaTwitterSquare /></div>
          <div><FaYoutubeSquare /></div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm