import { Box, Link, Typography } from "@mui/material";
import EventTemplate from "../../components/EventTemplate";
import PageBanner from "../../sections/PageBanner";
import { PrimaryBtn } from "../../components/PrimaryBtn";

const Event = () => {
  return (
    <>
      <PageBanner
        heading="Checkout new events"
        imgSrc="./events.jpg"
        description="Join Rita on a transformative journey to align your energies, become conscious aware of your vibrational state, and empower yourself to consciously create by altering your energies."
      />
      <Box sx={{ maxWidth: "1500px", margin: "0 auto" }}>
        <EventTemplate image="./Coach2.jpg">
          <Box>
            <Typography
              variant="h6"
              sx={{
                display: "block",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.2rem",
                  md: "1rem",
                  lg: "1.4rem",
                },
                fontWeight: 100,
                textAlign: "center",
                color: "#888",
                fontStyle: "italic",
                marginBottom: { xs: "1rem", md: "2rem" },
              }}
            >
              Become Your Creator
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "block",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                },
                fontWeight: 800,
                textAlign: "center",
                color: "#5b6897",
                marginBottom: { xs: "1rem", md: "2rem" },
              }}
            >
              MASTER THE POEWR OF CONSCIOUS CREATION
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "block",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                },
                fontWeight: 100,
                textAlign: "center",
                color: "#364064",
                margin: "0 auto",
                marginBottom: { xs: "1rem", md: "2rem" },
                maxWidth: "500px",
              }}
            >
              JOIN RITA ON A TRANSFORMATIVE JOURNEY TO ALIGN YOUR ENERGIES,
              BECOME CONSCIOUS AWARE OF YOUR VIBRATIONAL STATE, AND EMPOWER
              YOURSELF TO CONSCIOUSLY CREATE BY ALTERING YOUR ENERGIES
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  display: "block",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
                  fontWeight: 900,
                  textAlign: "center",
                  color: "#2a3763",
                  transition: "all 250ms linear",
                  "&:hover": {
                    textShadow: "0 0 15px #2a376344",
                  },
                }}
              >
                October 5th, 6th, 7th @ 8PM BST
              </Typography>
            </Link>
            <Box
              sx={{
                textAlign: "center",
                pt: "3vh"
              }}
            >
              <PrimaryBtn
                fullWidth
                row
                href="https://allevents.in/online/3-day-conscious-creation-with-rita-october-5th-6th-7th-8pm-gmt/80001529046485"
                target="_blank"
              >
                Get Tickets
              </PrimaryBtn>
            </Box>
          </Box>
        </EventTemplate>
      </Box>
    </>
  );
};

export default Event;
