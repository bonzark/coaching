import React from "react";
import Carousel from "react-material-ui-carousel";
import SuccessStories from "../components/SuccessStories";
import { Box, Typography } from "@mui/material";

const items = [
  {
    title: "TESTIMONIAL FROM N.O. 1",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    title: "TESTIMONIAL FROM N.O. 2",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    title: "TESTIMONIAL FROM N.O. 3",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
  {
    title: "TESTIMONIAL FROM N.O. 4",
    content:
      "I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀",
  },
];

const CarouselCard = () => {
  return (
    <Box sx={{
      position: "relative",
      zIndex: "5",
      minHeight: "60vh",
      "::before": {
        position: "absolute",
        backgroundColor: "black",
        zIndex: "9999"
      },
    }}>
      <Box
        sx={{
          backgroundColor: "#f0e2ef",
          py: 19,
          minHeight: "50vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", sm: "48px" },
            color: "#671d63",
            lineHeight: "48px",
            fontFamily: "'Abril FatFace', sans-serif",
            marginRight: { xs: "60px", lg: "350px" },
            marginBottom: "10px",
            display: "flex",
            justifyContent: "flex-end",
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
              "::before": {
                position: "absolute",
                top: "60px",
                content: `""`,
                height: "3px",
                width: "110px",
                backgroundColor: "black",
              },
            }}
          >
            Success
          </Typography>
          &nbsp; Stories
        </Typography>
        <Carousel>
          {items.map((item) => (
            <SuccessStories content={item.content} title={item.title} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CarouselCard;
