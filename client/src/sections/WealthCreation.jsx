import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { wealthCardItems } from "../utils/constant";
import SuccessStories from "../components/SuccessStoriesCard";
import PageBanner from "./PageBanner";

const WealthCreationSection = () => {
  const handleEmailClick = () => {
    const emailAddress = "example@email.com"; // Replace with your desired email address
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <>
      <PageBanner imgSrc="./wealthCreation.jpg" heading="Wealth Creation" />
      <Box sx={{ padding: { xs: "4rem 2rem" } }}>
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
              fontFamily: "'montserrat',sans-serif",
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
            Discover the Complete 3 Steps to Abundance Activation
          </Typography>
          <Typography
            varient="p"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem" },
              fontFamily: "Poppins",
              maxWidth: "605px",
              color: "#444",
            }}
          >
            Activation, an extraordinary online course designed to guide you on
            your journey towards manifesting wealth and prosperity.
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Box
            component={"div"}
            sx={{
              mx: { xs: "20px", md: "50px", lg: "225px" },
              my: { xs: "20px", md: "50px", lg: "100px" },
            }}
            className="story"
          >
            <Typography></Typography>
            <List>
              {wealthCardItems.map((item) => (
                <Grid key={item.title} item>
                  <ListItem sx={{ padding: "1rem 2rem" }}>
                    <ListItemText
                      primary={item.title}
                      secondary={item.description}
                      primaryTypographyProps={{
                        fontSize: { xs: "1.2rem", md: "2rem" },
                        fontFamily: "Poppins",
                        color: "#000",
                      }}
                      secondaryTypographyProps={{
                        fontSize: { xs: "0.9rem", md: "1.2rem" },
                        fontFamily: "Poppins",
                        color: "#444",
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </List>
            <Box sx={{ margin: "2rem auto" }}>
              <Typography sx={{ fontSize: "1.5rem" }} variant="p">
                To further enhance your manifestation journey, this package also
                includes the invaluable &nbsp;
              </Typography>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                variant="span"
              >
                &quot;Attracting Abundance Guided Meditation.&quot;
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontSize: "1.5rem" }} variant="p">
                For any inquiries or assistance, don't hesitate to reach out to
                our dedicated team at
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  // textDecoration: "underline",
                  cursor: "pointer"
                }}
                variant="span"
                onClick={handleEmailClick}
              >
                &nbsp; support@becomeyourcreator.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default WealthCreationSection;
