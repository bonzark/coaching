import React from "react";
import HeroBanner from "../../sections/heroBanner";
import CarouselCard from "../../sections/carousel";
import AboutSection from "../../sections/AboutSection";
import OurCoaches from "../../sections/OurCoaches";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <OurCoaches />
      <CarouselCard />
    </>
  );
};

export default Home;
