import React, { useEffect, useState } from "react";
import HeroBanner from "../../sections/heroBanner";
import SuccessCarousel from "../../sections/SuccessCarousel";
import AboutSection from "../../sections/AboutSection";
import FreeMeditation from "../../sections/FreeMeditation";
import News from "../../sections/news";
import OurCoaches from "../../sections/OurCoaches";
import OurProgram from "../../sections/OurProgram";
import OfferSection from "../../sections/OffersSection";
import { heroListItems, testimonialHomeData } from "../../utils/constant";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessModal from "../../components/SuccessModal";
import FormModal from "../../sections/FormModal";

const Home = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [openCancel, setOpenCancel] = useState(search === "?cancelled=true");
  const [openSuccess, setOpenSuccess] = useState(search === "?success=true");
  const [openVerified, setOpenVerified] = useState(search === "?verify=true");
  const [privateAccess, setPrivateAccess] = useState(search === "?login=false");
  const [openInverified, setOpenInverified] = useState(
    search === "?invalid=true"
  );

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <FormModal
        open={privateAccess}
        handleClose={() => setPrivateAccess(false)}
      />
      <SuccessModal
        message={"Your pament was cancelled."}
        title={"Payment cancelled"}
        open={openCancel}
        status="cancelled"
        handleClose={() => {
          navigate("/");
          setOpenCancel(false);
        }}
      />
      <SuccessModal
        title={"Payment successful"}
        message={"Congratulations, Your session has been purchased."}
        open={openSuccess}
        handleClose={() => {
          navigate("/");
          setOpenSuccess(false);
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
        title={"Email Verified"}
        message={"Congratulations, Your registration is complete."}
        open={openVerified}
        handleClose={() => {
          navigate("/");
          setOpenVerified(false);
        }}
      />
      <SuccessModal
        message={
          "Your Email verification already done!! Please try with login."
        }
        title={"Email Already Verified"}
        open={openInverified}
        handleClose={() => {
          navigate("/");
          setOpenInverified(false);
        }}
      />
      <AboutSection />
      <OurCoaches />
      <News />
      <OurProgram />
      <SuccessCarousel testimonials={testimonialHomeData} />
      <OfferSection />
      <FreeMeditation />
    </>
  );
};

export default Home;
