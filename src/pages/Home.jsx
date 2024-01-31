import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/ServiceSection'
import Certificate from '../components/Certificate'
import ServiceSection from '../components/ServiceSection'
import Certif from '../components/Certif'
import Projects from '../components/Projects'

function Home() {
  return (
    <>
     <HeroSection /> 
     
     <ServiceSection />
     <Projects />
     <Certif />
    </>
  )
}

export default Home
