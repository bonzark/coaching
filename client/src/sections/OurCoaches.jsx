import { Box, Button, Typography } from "@mui/material";
import React from "react";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel";
import CoachCarouselCard from "../components/CoachCarouselCard";

const OurCoaches = () => {
  const items = [
    {
      title: "Joan Deo",
      subtitle: "Accelerated Learning Coach",
      imgSrc: "./Coach1.jpg",
    },
    {
      title: "Joan Deo",
      subtitle: "Accelerated Learning Coach",
      imgSrc: "./Coach2.jpg",
    },
    {
      title: "Joan Deo",
      subtitle: "Accelerated Learning Coach",
      imgSrc: "./Coach1.jpg",
    },
    {
      title: "Joan Deo",
      subtitle: "Accelerated Learning Coach",
      imgSrc: "./Coach2.jpg",
    },
    {
      title: "Joan Deo",
      subtitle: "Accelerated Learning Coach",
      imgSrc: "./Coach1.jpg",
    },
  ];

  return (
    <>
      <Box
        sx={{
          paddingY: "30px",
        }}
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
            marginBottom: "75px",
            justifyContent: "center",
            "::before": {
              position: "absolute",
              bottom: "-40px",
              content: `""`,
              height: "3px",
              width: "110px",
              backgroundColor: "#671d63",
            },
          }}
        >
          Our Coaches
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            width: { md: "60%", xs: "90%" },
            mx: "auto",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          We brings you the world's best teachers in every category of your
          transformation. Whether it's creative problem solving, emotional
          intelligence, human literacy or career readiness - we seek out the top
          trainers in the world and bring them into our ecosystem so you always
          learn from the very best in the field.
        </Typography>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
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
          sliderClass="CoachCarouselCardItem"
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 50,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
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
            <CoachCarouselCard
              title={item.title}
              subtitle={item.subtitle}
              imgSrc={item.imgSrc}
            />
          ))}
        </Carousel>

        <Button
          variant="outlined"
          sx={{
            color: "#671d63",
            margin: "20px auto",
            fontWeight: "bolder",
            border: "none",
            backgroundColor: "#EFE6EF",
            "&:hover": {
              backgroundColor: "#671d63",
              color: "white",
              border: "none",
            },
            display: { xs: "none", md: "block" },
          }}
        >
          SEE ALL PROGRAMS
        </Button>
      </Box>
    </>
  );
};

export default OurCoaches;
