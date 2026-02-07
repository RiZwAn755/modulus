import React from 'react'
import Navbar from './components/navbar'
import PopupBanner from './components/PopupBanner'
import Hero from './pages/hero'

import StickyEnquire from './components/StickyEnquire'

function App() {

  return (
    <>
      <PopupBanner />
      <Navbar />
      <StickyEnquire />
      <Hero />
    </>
  )
}

export default App

