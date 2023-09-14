import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PrimaryBtn } from "./PrimaryBtn";
import { Link } from "react-router-dom";

const AboutTemplate = (props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        padding: "2rem",
      }}
    >
      <Box>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: props.reverse ? "row" : "row-reverse",
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
                  objectPosition: "top center",
                }}
                src={props.image}
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
              textAlign: "left",
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: "24px",
              padding: { lg: "0 60px 0 0" },
            }}
          >
            <Typography
              component={"h1"}
              sx={{
                position: "relative",
                color: "#671d63",
                fontSize: { xs: "30px", md: "42px" },
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
              {props.title}
            </Typography>
            {props.content?.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></Typography>
            ))}
            <Typography
              to={"know-more"}
              component={Link}
              sx={{
                color: "#671d63",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              {props.linkText}
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

export default AboutTemplate;