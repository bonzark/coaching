import React from "react";
import AboutTemplate from "../../components/AboutTemplate";
import { Box, Card, Container, Typography } from "@mui/material";
import { aboutTemplateData, lineUpsData } from "../../utils/constant";
import LineUpsCard from "../../components/LineUpsCard";

const BecomeYourCreator = () => {
  const aboutTemplate1Data = aboutTemplateData.find(
    (item) => item.id === "become-your-creator"
  );
  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          background: "linear-gradient(#DCD9F0,#ffffff)",
          padding: "2rem 0"
        }}
      >
        <Box>
          <AboutTemplate
            reverse={aboutTemplate1Data.reverse}
            image={aboutTemplate1Data.image}
            title={aboutTemplate1Data.title}
            content={aboutTemplate1Data.content}
            linkText={aboutTemplate1Data.linkText}
            id={aboutTemplate1Data.id}
          />
        </Box>
      </Box>
      <Box sx={{ padding: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "55px",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Typography
            varient="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              color: "#671d63",
              fontFamily: "'Abril FatFace',sans-serif",
              maxWidth: "592px",
              position: "relative",
              paddingRight: { lg: "70px" },
              marginBottom: { xs: "40px", lg: 0 },
              marginRight: { xs: "10px", lg: "45px" },
              lineHeight: { xs: "35px", sm: "45px", md: "50px", lg: "60px" },
              "&:after": {
                content: { lg: "''" },
                position: "absolute",
                right: 0,
                top: 0,
                width: "4px",
                height: "100%",
                backgroundColor: "#671d63",
              },
            }}
          >
            WHAT TO LOOK FORWARD TO EVERY MONTH
          </Typography>
          <Typography
            varient="p"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem" },
              maxWidth: "605px",
              color: "#444",
            }}
          >
            Every month, we have an exciting lineup of live sessions just for
            you! Here's what you can anticipate:
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            mb: "4rem",
          }}
        >
          {lineUpsData.map((item, index) => (
            <LineUpsCard
              key={index}
              quentity={item.quentity}
              title={item.title}
              content={item.content}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BecomeYourCreator;
