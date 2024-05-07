import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/Footer'
import YourAdve from './sections/YourAdve'
import Outdoor from './sections/Outdoor'

function Services() {
  return (
    <div>
      <PageHero title="Services"/>
      <YourAdve/>
      <Outdoor/>
      <Footer/>
    </div>
  )
}

export default Services