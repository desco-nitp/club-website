import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

import Events from '../components/events/events_hero'
import EventBanner from '../components/events/banner'
import UpcomingEventBanner from '../components/events/upcoming_banner'




function EventsPage() {
  return (
    
    <main className="bg-[#FEB5B5] md:h-[375vh] pt-6 ">
      <NavBar />
      <Events />
      <EventBanner imageCount={3} />
      <UpcomingEventBanner imageCount={1} />
      <Footer />
      

      

    </main>
  )
}

export default EventsPage