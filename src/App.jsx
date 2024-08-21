import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import for Routes
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Registration from './Components/Registration/Registration';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={(
          <>
            <Hero />
            <div className="container">
              <Title />
              <Programs />
              <About />
              <Gallery />
              <Testimonials />
              <ContactUs />
              <Footer />
            </div>
          </>
        )} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
