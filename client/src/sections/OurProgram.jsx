import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { Link } from "react-router-dom";
import { ourProgramsData } from "../utils/constant";

const OurProgram = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        paddingX: { xs: "1rem", md: "5rem", lg: "10rem" },
        paddingY: "50px",
        background: "linear-gradient(#fff, #DCD9F0)"
      }}
    >
      <Box>
        {ourProgramsData.map((item) => {
          return (
            <Grid
              key={item.title}
              container
              sx={{
                width: "100%",
                height: "100%",
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
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
                    width: {
                      xs: "275px",
                      sm: "375px",
                      md: "400px",
                      xl: "600px",
                    },
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
                    src={item.imgSrc}
                    alt="brandi"
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
                  fontSize: "20px",
                  lineHeight: "24px",
                  padding: { lg: "0 0 0 30px" },
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
                      width: "100px",
                      backgroundColor: "goldenrod",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                {item.contentProg.map((para) => {
                  return (
                    <Typography
                      key={para}
                      sx={{
                        fontSize: {
                          sx: "16px",
                          md: "20px",
                        },
                      }}
                    >
                      {para}
                    </Typography>
                  );
                })}

                <Typography
                  to={"know-more"}
                  component={Link}
                  sx={{
                    color: "#671d63",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  {item.linkText}
                </Typography>
                <PrimaryBtn>
                  <Box sx={{ padding: "0 40px" }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: 900 }}>
                      {item.btnText1}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 900 }}>
                      {item.btnText2}
                    </Typography>
                  </Box>
                </PrimaryBtn>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default OurProgram;
