import React from "react";
import HeroBanner from "../../sections/heroBanner";
import CarouselCard from "../../sections/carousel";
import AboutSection from "../../sections/AboutSection";
import FreeMeditation from "../../sections/FreeMeditation";
import OurCoaches from "../../sections/OurCoaches";
import OurProgram from "../../sections/OurProgram";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <OurCoaches />
      <OurProgram />
      <CarouselCard />
      <FreeMeditation />
    </>
  );
};

export default Home;
