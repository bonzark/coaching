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
        py: "100px",
        px: { xs: "25px", sm: "30px" },
      }}
    >
      <Box
        sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
      >
        <Typography
          className="borderTitle"
          variant="span"
          sx={{
            position: "relative",
            fontSize: { xs: "32px", sm: "48px" },
            color: "#671d63",
            lineHeight: "48px",
            fontFamily: "'Abril FatFace', sans-serif",
            display: "flex",
            marginBottom: { xs: "30px", md: "50px" },
            justifyContent: "center",
            "::before": {
              position: "absolute",
              bottom: { xs: "-18px", md: "-27px" },
              content: `""`,
              height: "3px",
              width: "110px",
              backgroundColor: "#671d63",
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
            lineHeight: "30px",
            paddingTop: "20px",
            paddingBottom: { sm: "15px", md: "20px" },
          }}
        >
          Are You Ready To Take Control Of Your Life and Manifest The Life You
          Truly Desire?
        </Typography>
      </Box>
      <Box sx={{ mx: { sx: "25px", md: "45px", lg: "130px" } }}>
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
                min: 976,
              },
              items: 2,
              partialVisibilityGutter: 20,
            },
            tablet: {
              breakpoint: {
                max: 976,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 10,
            },
          }}
        >
          {items.map((item, index) => (
            <ProgramCard
              key={index}
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
