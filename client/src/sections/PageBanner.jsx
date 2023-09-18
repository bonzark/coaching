import { Box, Container, Typography } from "@mui/material";
import React from "react";
const PageBanner = ({
  heading,
  imgSrc,
  description,
  align,
//   TODO: Can make component such that it will expect height as props
//   minHeight,
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: { xs: "100%", md: "100%" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "center center", md: "top center" },
          position: "relative",
          "::after": {
            content: "' '",
            position: "absolute",
            width: "100%",
            height: "100%",
            background: {
              xs: "",
              md: "linear-gradient(90deg, rgba(255,255,255,0.5) 100%, rgba(212,167,32,0.5) 01%);",
            },
            zIndex: 0,
            top: 0,
            left: 0,
          },
        }}
      >
        <Container
          sx={{
            minHeight: { xs: "70vh" },
            display: "flex",
            alignItems: { xs: "end", md: "center" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%  ", md: "100%", lg: "100%" },
              padding: {
                xs: "0 0 50px 0",
                md: "100px 50px",
                lg: "200px 75px",
                xl: "300px 100px",
              },
            }}
          >
            {heading && (
              <Typography
                component={"p"}
                sx={{
                  fontSize: { xs: "32px", md: "42px", lg: "72px" },
                  color: '#671d63',
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: { xs: "27px", md: "36px", lg: "62px" },
                  textTransform: "capitalize",
                  fontFamily: "'montserrat', cursive",

                }}
              >
                {heading}
              </Typography>
            )}
            {/* {description && (
              <Typography
                variant="h6"
                sx={{ my: "1rem", textAlign: {align} }}
              >
                {description}
              </Typography>
            )} */}
            
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PageBanner;
