import React from "react";
import OurCoachesCard from "../../components/OurCoachesCard";
import PageBanner from "../../sections/PageBanner";
import SuccessCarousel from "../../sections/SuccessCarousel";
import { testimonialOurCoachesData } from "../../utils/constant";

const AllCoaches = () => {
  return (
    <>
      <PageBanner heading="Know more about our coaches" imgSrc="./coach.jpg" />
      <OurCoachesCard />
      <SuccessCarousel testimonials={testimonialOurCoachesData} />
    </>
  );
};

export default AllCoaches;
