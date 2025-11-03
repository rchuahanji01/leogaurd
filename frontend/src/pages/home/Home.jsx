import React from 'react'
import Carousel from '../../components/carsole/Carasole'
import AboutSection from '../../components/Aboutsection/AboutSection'
import ProductCarousel from '../../products/productcard/ProductCard'
import Who from '../Whoweare/Who'
import Testimonial from '../testimonials/Testimonial'
import CompanyIntro from '../../components/CompanyIntro/CompanyIntro'
import BrandStory from '../BrandStory/BrandStory'
import BrandClosing from '../BrandClosing/BrandClosing'
import WelcomeSection from '../WelcomeSection/WelcomeSection'
// import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  return (
    <>
    
    <Carousel/>
    {/* <BrandClosing/>
    <CompanyIntro/>
    <BrandStory/> */}
    <WelcomeSection/>
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
