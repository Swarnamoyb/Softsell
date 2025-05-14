import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Testimonials from './components/Testimonials/Testimonials'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import HowItWorks from './components/HowItWorks/HowItWorks'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App
