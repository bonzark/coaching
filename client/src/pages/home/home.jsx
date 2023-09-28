import React, { useState } from "react";
import HeroBanner from "../../sections/heroBanner";
import SuccessCarousel from "../../sections/SuccessCarousel";
import AboutSection from "../../sections/AboutSection";
import FreeMeditation from "../../sections/FreeMeditation";
import News from "../../sections/news";
import OurCoaches from "../../sections/OurCoaches";
import OurProgram from "../../sections/OurProgram";
import OfferSection from "../../sections/OffersSection";
import { heroListItems } from "../../utils/constant";
import CancelModal from "../../sections/CancelModal";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessModal from "../../components/SuccessModal";

const Home = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [openCancel, setOpenCancel] = useState(search === "?cancel=true");
  const [openSuccess, setOpenSuccess] = useState(search === "?success=true");
  return (
    <>
      <CancelModal
        cancelMessage={"payment cancelled!!!"}
        open={openCancel}
        onClose={() => {
          navigate("/");
          setOpenCancel(false);
        }}
      />
      <HeroBanner
        header={"Discover what is blocking you from"}
        title={"Manifesting and living life you desire !"}
        imageUrl="./heroBg2.jpg"
        listItems={heroListItems}
        buttonText="Book Now"
      />
      <SuccessModal
        successMessage={"Congratulations, Your session has been purchased."}
        open={openSuccess}
        handleClose={() => {
          navigate("/");
          setOpenSuccess(false);
        }}
      />
      <AboutSection />
      <OurCoaches />
      <News />
      <OurProgram />
      <SuccessCarousel />
      <OfferSection />
      <FreeMeditation />
    </>
  );
};

export default Home;
