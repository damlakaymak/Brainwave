import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"

import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collobration from './components/Collobration'
import Services from './components/Services'
import Pricing from "./components/Pricing"
import Roadmap from './components/Roadmap'
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className=''>

      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>

      <Header/>

      <Hero/>
      <Benefits/>
      <Collobration/>
      <Services/>
      <Pricing/>
      <Roadmap/>

    <Footer/>
      </div>

      <ButtonGradient/>
    </div>
  )
}

export default App