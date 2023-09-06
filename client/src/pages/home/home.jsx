import React from 'react';
import HeroBanner from '../../sections/heroBanner';
import CarouselCard from '../../sections/carousel';
import AboutSection from "../../sections/AboutSection"
import OfferSection from '../../sections/OffersSection';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <OurCoaches />
      <CarouselCard />
      <OfferSection />
    </>
  );
};

export default Home;
