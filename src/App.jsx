import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import TestimonialsGallery from './components/TestimonialsGallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <NavBar />

        <div id="home">
        <Hero />
        </div>
        <div id="about">
        <About />
        </div>
        <div id="products">
        <Products />
        </div>
        <div id="service">
        <WhyChooseUs />
        </div>

        <TestimonialsGallery />
        <div id="contact">
        <Footer />
        </div>


    </div>
  )
}

export default App
