import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/TItle/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title/>
      <Programs/>
      <About/>
      <Gallery/> 
      <Testimonials/> 
      <ContactUs/> 
      <Footer/>   
      </div>
      </div>
  )
}

export default App
