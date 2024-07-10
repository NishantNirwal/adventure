import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/Footer'
import ContactForm from './sections/ContactForm'
import Heroimg from '../../assets/hero-bg.jpg'

function Contact() {
  return (
    <div>
      <PageHero title="Contact Us" img={Heroimg}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact