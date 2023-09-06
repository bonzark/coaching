import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { PrimaryBtn } from "../components/PrimaryBtn";

const images = [
  "./traveler.png",
  "./entrepreneur.png",
  "./bustle.png",
  "./poosh.png",
  "./goop.png",
  "./vogue.png",
];

const AboutSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "5rem",
        // "&:before": {
        //   backgroundImage: 'url("./curve1-left.png")',
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
        //   backgroundImage: 'url("./curve1-right.png")',
        //   content: '""',
        //   width: "400px",
        //   height: "100%",
        //   position: "absolute",
        //   top: 0,
        //   right: 0,
        //   zIndex: 0,
        //   backgroundRepeat: "no-repeat",
        // },
      }}
    >
      <Box className="about-us" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Grid
            container
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: { sm: "space-around", xl: "flex-start" },
            }}
          >
            <Grid item xs={12} md={8} margin={"0 auto"}>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: {
                    xs: "30px 15px",
                    sm: "50px 15px",
                    md: "80px 15px",
                    lg: "100px 15px",
                  },
                }}
              >
                {images?.map((imageUrl) => {
                  return (
                    <img
                      key={imageUrl}
                      src={imageUrl}
                      alt="#"
                      className="about-img"
                    />
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: {
                    xs: "300px",
                    sm: "400px",
                    xl: "600px",
                  },
                  width: { xs: "300px", sm: "400px", xl: "600px" },
                  margin: { xs: "0 auto", md: "0 0 0 auto" },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  objectFit: "cover",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    objectPosition: "0 -65px",
                  }}
                  src="./about.JPG"
                  alt="about"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "20px",
                textAlign: "justify",
                fontSize: "20px",
                lineHeight: "24px",
                padding: { xs: "0 18px", md: "0 10px 0 80px" },
              }}
            >
              <Typography
                component={"h1"}
                sx={{
                  position: "relative",
                  color: "#671d63",
                  fontSize: "42px",
                  fontFamily: "'Abril Fatface', cursive",
                  "::before": {
                    position: "absolute",
                    bottom: "0",
                    content: `""`,
                    height: "5px",
                    width: "150px",
                    backgroundColor: "goldenrod",
                  },
                }}
              >
                Hi, I'm Rita
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                Hi, My name is Rita S A de Castro and I'm your mindset,
                spirituality. and energy reader & coach.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                Thelp people transform their lives and live with purpose because
                everyone has the power to create the life they desire.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In this
                <Typography
                  component={"span"}
                  sx={{
                    color: "#671d63",
                    fontWeight: "bolder",
                    padding: "0 5px",
                  }}
                >
                  Become Your Creator Guide
                </Typography>
                , my goal will be to turn you into a master creator of your own
                life by helping depict the reasons why you've been failing at
                manifesting the life your truly desire and how to fix that.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                You'll also be able to see significant results
                <Typography
                  component={"span"}
                  sx={{
                    color: "#671d63",
                    fontWeight: "bolder",
                    padding: "0 5px",
                  }}
                >
                  in just 30 days or even less!
                </Typography>
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                Start living the life you desire. Click below to download your
                <Typography
                  component={"span"}
                  sx={{
                    color: "#671d63",
                    fontWeight: "bolder",
                    padding: "0 5px",
                  }}
                >
                  Free
                </Typography>
                copy and
                <Typography
                  component={"span"}
                  sx={{
                    color: "#671d63",
                    fontWeight: "bolder",
                    padding: "0 5px",
                  }}
                >
                  Become a Master Creator.
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", md: "block" },
                  justifyContent: { xs: "center" },
                  width: { xs: "100%" },
                }}
              >
                <PrimaryBtn>
                  <span>Access Now For Free</span>
                  <Typography component="p">Instant Download</Typography>
                </PrimaryBtn>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
