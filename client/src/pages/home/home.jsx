import React from "react";
import HeroBanner from "../../sections/heroBanner";
import CarouselCard from "../../sections/carousel";
import AboutSection from "../../sections/AboutSection";
import FreeMeditation from "../../sections/FreeMeditation";
import News from "../../sections/news";
import OurCoaches from "../../sections/OurCoaches";
import OfferSection from "../../sections/OffersSection";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <OurCoaches />
      <CarouselCard />
      <News />
      <OfferSection />
      <FreeMeditation />
    </>
  );
};

export default Home;
