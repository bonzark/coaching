import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        padding: "2rem",
        background: "linear-gradient(#DCD9F0,#ffffff)"
      }}
    >
      <Box>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: {
                  xs: "275px",
                  sm: "375px",
                  md: "400px",
                  xl: "600px",
                },
                width: { xs: "275px", sm: "375px", md: "400px", xl: "600px" },
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
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "20px",
              textAlign: "justify",
              fontSize: "20px",
              lineHeight: "24px",
              padding: { lg: "0 60px 0 0" },
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
            <Typography
              to={"know-more"}
              component={Link}
              sx={{
                color: "#671d63",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Know More About Rita
            </Typography>
            <PrimaryBtn>
              <Box sx={{ padding: "0 40px" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 900 }}>
                  Access Now For Free
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: 900 }}>
                  Instant Download
                </Typography>
              </Box>
            </PrimaryBtn>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;
