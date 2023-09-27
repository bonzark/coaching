import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import CoachCarouselCard from "../components/CoachCarouselCard";
import { NavLink } from "react-router-dom";

const OurCoaches = () => {
  const items = [
    {
      id: "4",
      title: "HELEN",
      subtitle: "Anxiety UK Approved Therapist",
      imgSrc: "./HELEN.jpg",
    },
    {
      id: "1",
      title: "Brandi",
      subtitle: "A spiritual mentor",
      imgSrc: "./Brandi.jpg",
    },
    {
      id: "2",
      title: "Sarah",
      subtitle: "An Energy Healer",
      imgSrc: "./Sarah.jpg",
    },
    {
      id: "3",
      title: "Jacqueline",
      subtitle: "Minset Coach And Intuitive Healer",
      imgSrc: "./Jacqueline.jpg",
    },
    {
      id: "5",
      title: "Rita",
      subtitle: "Accelerated Learning Coach",
      imgSrc: "./Coach2.jpg",
      redirectLink: "/coaching-with-rita",
    },
  ];

  return (
    <Box
      sx={{
        paddingY: "30px",
        backgroundColor: "whitesmoke",
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
          fontFamily: "'montserrat', sans-serif",
          display: "flex",
          marginTop: "30px",
          marginBottom: { xs: "40px", md: "75px" },
          justifyContent: "center",
          "::before": {
            content: `""`,
            position: "absolute",
            bottom: { xs: "-10px", md: "-40px" },
            height: "3px",
            width: "110px",
            backgroundColor: "#671d63",
          },
        }}
      >
        Our Coaches
      </Typography>
      <Typography
        paragraph
        sx={{
          fontSize: "20px",
          width: { md: "60%", xs: "90%" },
          mx: "auto",
          marginBottom: "50px",
          textAlign: { xs: "left", sm: "justify" },
          textAlignLast: { xs: "left", sm: "center" },
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
        {items?.map((item) => (
          <CoachCarouselCard
            id={item?.id}
            key={item?.title}
            title={item?.title}
            subtitle={item?.subtitle}
            imgSrc={item?.imgSrc}
            redirectLink={item?.redirectLink}
          />
        ))}
      </Carousel>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Link
          component={NavLink}
          to="/our-coaches"
          variant="button"
          sx={{
            color: "#671d63",
            width: "max-content",
            textDecoration: "none",
            margin: "20px auto",
            fontWeight: "bolder",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            transition: "all 0.25s linear",
            backgroundColor: "#EFE6EF",
            "&:hover": {
              backgroundColor: "#671d63",
              color: "white",
              border: "none",
            },
            display: "block",
          }}
        >
          SEE ALL COACHES
        </Link>
      </Box>
    </Box>
  );
};

export default OurCoaches;
