import React from 'react'
import Navbar from './components/navbar'
import PopupBanner from './components/PopupBanner'
import Hero from './pages/hero'
import Announcements from './components/Announcements'
import CourseCategories from './components/CourseCategories'
import AboutModulus from './components/AboutModulus'
import WhyChooseUs from './components/WhyChooseUs'
import StatsSection from './components/StatsSection'
import NewsAndDirector from './components/NewsAndDirector'
import ContactEvents from './components/ContactEvents'
import Footer from './components/footer'

import StickyEnquire from './components/StickyEnquire'

function App() {

  return (
    <>
      <PopupBanner />
      <Navbar />
      <StickyEnquire />
      <Hero />
      <Announcements />
      <CourseCategories />
      <AboutModulus />
      <WhyChooseUs />
      <StatsSection />
      <NewsAndDirector />
      <ContactEvents />
      <Footer />
    </>
  )
}

export default App

