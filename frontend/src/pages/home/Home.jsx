import React from 'react'
import Carousel from '../../components/carsole/Carasole'
import AboutSection from '../../components/Aboutsection/AboutSection'
import ProductCarousel from '../../products/productcard/ProductCard'
import Who from '../Whoweare/Who'
import Testimonial from '../testimonials/Testimonial'
import CompanyIntro from '../../components/CompanyIntro/CompanyIntro'
import BrandStory from '../BrandStory/BrandStory'
import BrandClosing from '../BrandClosing/BrandClosing'
// import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  return (
    <>
    
    <Carousel/>
    {/* <BrandClosing/>
    <CompanyIntro/>
    <BrandStory/> */}
    <ParallaxProvider>
      <CompanyIntro />
      <BrandStory />
      <BrandClosing />
    </ParallaxProvider>
    <AboutSection/>
    <ProductCarousel/>
    <Who/>
    <Testimonial/>
    </>
  )
}

export default Home
