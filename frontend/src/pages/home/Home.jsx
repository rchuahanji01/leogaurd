import React from 'react'
import Carousel from '../../components/carsole/Carasole'
import AboutSection from '../../components/Aboutsection/AboutSection'
import ProductCarousel from '../../products/productcard/ProductCard'
import Who from '../Whoweare/Who'
import Testimonial from '../testimonials/Testimonial'
const Home = () => {
  return (
    <>
    <Carousel/>
    <AboutSection/>
    <ProductCarousel/>
    <Who/>
    <Testimonial/>
    </>
  )
}

export default Home
