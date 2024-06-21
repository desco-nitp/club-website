import React from 'react'

import NavBar from '../components/navbar/navbar'
import WorkHero from '../components/works/works_herosection/works_hero'
import Footer from '../components/footer/footer'
import Works from '../components/works/works_section/banner_works'

function WorksPage() {
  return (
    <main className="bg-[#FEB5B5] h-[600vh] pt-6 ">
      <NavBar />

      <WorkHero />
      
      <Works />

      <Footer />

      
    </main>
  )
}

export default WorksPage