import React from "react";
import Carousel from "react-multi-carousel";
import ProgramCard from "../components/ProgramCard";
import { Box, Typography } from "@mui/material";
// import { ArrowBackIcon } from "@mui/icons-material/ArrowBack";
// import { ArrowForwardIcon } from "@mui/icons-material/ArrowForward";

const items = [
  {
    title: "Book Your £19.99 Energy And Life Path Reading",
    btnText: "BOOK YOUR READING Special Offer Just at £19.99",
    imgSrc: "./Coach1.jpg",
  },
  {
    title: "Book Your £19.99 Energy And Life Path Reading",
    btnText: "BOOK YOUR READING Special Offer Just at £19.99",
    imgSrc: "./successStories.jpg",
  },
  {
    title: "Book Your £19.99 Energy And Life Path Reading",
    btnText: "BOOK YOUR READING Special Offer Just at £19.99",
    imgSrc: "./Coach1.jpg",
  },
  {
    title: "Book Your £19.99 Energy And Life Path Reading",
    btnText: "BOOK YOUR READING Special Offer Just at £19.99",
    imgSrc: "./Coach2.jpg",
  },
  {
    title: "Book Your £19.99 Energy And Life Path Reading",
    btnText: "BOOK YOUR READING Special Offer Just at £19.99",
    imgSrc: "./successStories.jpg",
  },
];

const OurProgram = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#D7CCE4, #DCD9F0)",
      }}
    >
      <Box
        sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="span"
          sx={{
            fontSize: { xs: "32px", sm: "48px" },
            color: "#671d63",
            lineHeight: "50px",
            fontFamily: "'Abril FatFace', sans-serif",
            content: '""',
            position: "relative",
            zIndex: "9999",
            "::before": {
              position: "absolute",
              top: "80px",
              content: `""`,
              height: "3px",
              width: "120px",
              backgroundColor: "black",
              marginX: "72px",
            },
          }}
        >
          Our Programs
        </Typography>
        <Typography
          className="borderTitle"
          variant="span"
          sx={{
            fontSize: { xs: "16px", sm: "22px" },
            color: "#797696",
            lineHeight: "30px",
            paddingTop: "50px",
            paddingBottom: "20px",
          }}
        >
          Are You Ready To Take Control Of Your Life and Manifest The Life You
          Truly Desire?
        </Typography>
      </Box>
      <Box sx={{ mx: "50px" }}>
        <Carousel
          sx={{ margin: "30px" }}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          // customLeftArrow={<ArrowBackIcon />}
          // customRightArrow={<ArrowForwardIcon />}
          dotListClass=""
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass="OurProgramCardItem"
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 20,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 10,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {items.map((item) => (
            <ProgramCard
              btnText={item.btnText}
              title={item.title}
              imgSrc={item.imgSrc}
            />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default OurProgram;
