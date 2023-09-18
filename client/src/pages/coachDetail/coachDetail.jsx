import React, { useState } from "react";
import SuccessCarousel from "../../sections/SuccessCarousel";
import FAQAccordion from "../../components/FAQAccordion";
import HeroBanner from "../../sections/heroBanner";
import { heroListItems } from "../../utils/constant";
import BookSession from "../../components/bookSessionModel";

const CoachDetail = () => {
  const [showBookingModel, setShowBookingModel] = useState(false);

  const accordionData = [
    {
      summary: "Collapsible Group Item #1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #3",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #4",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #5",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  const btnText = <span>Book Session</span>;

  return (
    <>
      <BookSession
        open={showBookingModel}
        handleClose={() => setShowBookingModel(false)}
      />
      <HeroBanner
        header={"Discover what is blocking you from"}
        title={"Manifesting and living life you desire !"}
        imageUrl="heroBg.jpg"
        listItems={heroListItems}
        buttonText={btnText}
        buttonClick={() => setShowBookingModel(true)}
      />
      <SuccessCarousel />
      <FAQAccordion data={accordionData} />
    </>
  );
};

export default CoachDetail;
