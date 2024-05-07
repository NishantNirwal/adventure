import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import UpcomingEvent from './sections/UpcomingEvent'
import ExploreWorld from './sections/ExploreWorld'
import UpcomingTour from './sections/UpcomingTour'

function Home() {
  return (
    <div>
      <Hero/>
     <UpcomingEvent/>
     <ExploreWorld/>
     <UpcomingTour/>
      <Footer/>
    </div>
  )
}

export default Home