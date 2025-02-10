import React from 'react'
import Navbar from '../ComponentsReno/Navbar'
import HomeSection from '../ComponentsReno/HomeSection'
import ShowCase from '../ComponentsReno/ShowCase'
import Localisation from '../ComponentsReno/Localisation'
import Footer from '../ComponentsReno/Footer'

function Renolux() {
  return (
    <div className=' overflow-x-hidden'>
    <Navbar/>
    <HomeSection/>
    <ShowCase/>
    <Localisation/>
    <Footer/>
    </div>
  )
}

export default Renolux