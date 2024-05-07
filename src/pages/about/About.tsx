import React from 'react'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import OurMission from './sections/OurMission'
import Experiences from './sections/Experiences'

function About() {
  return (
    <div>
      <PageHero title="Who We Are?"/>
      <OurMission/>
      <Experiences/>
      <Footer/>
    </div>
  )
}

export default About