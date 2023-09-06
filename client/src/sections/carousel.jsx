import React from "react";
import Carousel from "react-material-ui-carousel";
import SuccessStories from "../components/SuccessStories";
import { Box, Typography } from "@mui/material";

const items = [
  {
    src: "./succesStories.png",
    title: "TESTIMONIAL FROM N.O. 1",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    src: "./succesStories.png",
    title: "TESTIMONIAL FROM N.O. 2",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    src: "./succesStories.png",
    title: "TESTIMONIAL FROM N.O. 3",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    src: "./succesStories.png",
    title: "TESTIMONIAL FROM N.O. 4",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
];

const CarouselCard = () => {
  return (
    <Box
      className="carouselSuccess"
      sx={{
        minHeight: "100vh",
        position: "relative",
        zIndex: "5",
        // "&:before": {
        //   backgroundImage: 'url("./curve2_top.png")',
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
        //   content: '""',
        //   width: "100%",
        //   height: "100%",
        //   position: "absolute",
        //   top: "850px",
        //   left: 0,
        //   zIndex: 0,
        //   backgroundRepeat: "no-repeat",
        // },
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(#EFE6EF, #F1E2F0)",
          py: { xs: 40, md: 35 },
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
            marginRight: { xs: "60px", lg: "350px" },
            marginBottom: "10px",
            justifyContent: "flex-end",
            content: '""',
            zIndex: "9999",
            "::before": {
              position: "absolute",
              top: "60px",
              content: `""`,
              height: "3px",
              width: "110px",
              backgroundColor: "black",
              marginRight: { xs: "60px", lg: "225px" },
            },
          }}
        >
          Success Stories
        </Typography>
        <Carousel>
          {items.map((item, index) => (
            <SuccessStories
              key={index}
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
