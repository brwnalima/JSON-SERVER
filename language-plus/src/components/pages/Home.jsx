import React from 'react'
import '../../App.css'
import Cards from '../cards/Cards'
import Footer from '../footer/Footer'
import VideoSection from '../video/VideoSection'

// corpo do site 

function Home() {
  return (
    <>
      <VideoSection />
      <Cards />
      <Footer />
    </>
  )
}

export default Home

