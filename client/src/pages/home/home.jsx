import React from 'react';
import HeroBanner from '../../sections/heroBanner';
import CarouselCard from '../../sections/carousel';
import AboutSection from "../../sections/AboutSection"

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <CarouselCard />
    </>
  );
};

export default Home;
