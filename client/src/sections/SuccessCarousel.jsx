import React from "react";
import Carousel from "react-material-ui-carousel";
import SuccessStories from "../components/SuccessStoriesCard";
import { Box, Typography } from "@mui/material";

const items = [
  {
    imgSrc: "./successStories.jpg",
    title: "TESTIMONIAL FROM N.O. 1",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    imgSrc: "./successStories.jpg",
    title: "TESTIMONIAL FROM N.O. 2",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    imgSrc: "./successStories.jpg",
    title: "TESTIMONIAL FROM N.O. 3",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    imgSrc: "./successStories.jpg",
    title: "TESTIMONIAL FROM N.O. 4",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
];

const CarouselCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "5",
        // "&:before": {
        //   backgroundImage: 'url("./curve2_top.png")',
        //   backgroundPosition: "top center",
        //   content: '""',
        //   width: "100%",
        //   height: "100%",
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   zIndex: 0,
        //   backgroundRepeat: "no-repeat",
        // },
        // "&:after": {
        //   backgroundImage: 'url("./curve2_bottom.png")',
        //   backgroundPosition: "top center",
        //   content: '""',
        //   width: "100%",
        //   height: "100%",
        //   position: "absolute",
        //   top: "650px",
        //   left: 0,
        //   zIndex: 0,
        //   backgroundRepeat: "no-repeat",
        // },
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(#EFE6EF, #F1E2F0)",
          py: "100px",
        }}
      >
        <Typography
          className="borderTitle"
          variant="span"
          sx={{
            position: "relative",
            fontSize: { xs: "32px", sm: "48px" },
            color: "#671d63",
            lineHeight: "50px",
            fontFamily: "'Abril FatFace', sans-serif",
            display: "flex",
            marginBottom: { xs: "30px", md: "50px" },
            justifyContent: { xs: "center", md: "flex-end" },
            marginRight: { xs: "0px", md: "230px" },
            "::before": {
              position: "absolute",
              bottom: { xs: "-18px", md: "-25px" },
              color: "black",
              content: `""`,
              height: "3px",
              width: "110px",
              backgroundColor: "#000",
            },
          }}
        >
          Success Stories
        </Typography>
        <Carousel>
          {items.map((item, index) => (
            <SuccessStories
              key={index}
              imgSrc={item.imgSrc}
              content={item.content}
              title={item.title}
            />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CarouselCard;