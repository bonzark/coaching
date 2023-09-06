import React from "react";
import HeroBanner from "../../sections/heroBanner";
import CarouselCard from "../../sections/carousel";
import AboutSection from "../../sections/AboutSection";
import FreeMeditation from "../../sections/FreeMeditation";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <CarouselCard />
      <FreeMeditation />
    </>
  );
};

export default Home;
