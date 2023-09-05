import React from 'react';
import HeroBanner from '../../sections/heroBanner';
import AboutSection from "../../sections/AboutSection"
import ServiceSection from '../../sections/Service';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServiceSection />
    </>
  );
};

export default Home;
