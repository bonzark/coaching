import { Box, Link, Typography } from "@mui/material";
import EventTemplate from "../../components/eventTemplate";

const Event = () => {
  return (
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
            JOIN RITA ON A TRANSFORMATIVE JOURNEY TO ALIGN YOUR ENERGIES, BECOME
            CONSCIOUS AWARE OF YOUR VIBRATIONAL STATE, AND EMPOWER YOURSELF TO
            CONSCIOUSLY CREATE BY ALTERING YOUR ENERGIES
          </Typography>
          <Link href="/" sx={{ textDecoration: "none" }}>
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
        </Box>
      </EventTemplate>
    </Box>
  );
};

export default Event;
