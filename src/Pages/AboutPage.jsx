import Section from '@/components/Home/Section'
import ShowRoom from '@/components/Home/ShowRoom'
import Footer from '@/components/Navbar/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className='max-md:mt-20'></div>
      <Section/>
      <ShowRoom/>
      <Footer/>
    </div>
  )
}

export default AboutPage
