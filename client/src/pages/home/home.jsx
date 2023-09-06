import React from "react";
import HeroBanner from "../../sections/heroBanner";
import CarouselCard from "../../sections/carousel";
import AboutSection from "../../sections/AboutSection";
import News from "../../sections/news";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <CarouselCard />
      <News />
    </>
  );
};

export default Home;
