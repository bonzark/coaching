import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import "./styles.css";

const EventTemplate = ({ image, children }) => {
  return (
    <Box
      sx={{
        margin: { xs: "5rem 1rem", sm: "5rem 2rem" },
        boxShadow: "1px 1px 15px 2px #00000030",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          maxHeight: { xs: "700px", md: "" },
          display: "flex",
          overflow: "hidden",
        }}
      >
        <img src={image} alt="poster" className="event-template-poster" />
      </Box>
      <Box
        sx={{
          padding: {
            xs: "1.5rem",
            sm: "1.5rem 3rem",
            md: "1.5rem",
            lg: "1.5rem 3rem",
          },
          width: { xs: "auto", md: "60%" },
          background: "linear-gradient(to bottom right, #e5e9f8, #d4d8e7)",
        }}
      >
        <Typography
          varient="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "2.5rem", lg: "3.5rem" },
            lineHeight: { xs: "30px", sm: "45px", md: "40px", lg: "50px" },
            fontWeight: 600,
            textAlign: "center",
            marginBottom: { xs: "1rem", md: "2rem" },
            color: "#671d63",
          }}
        >
          3 DAY CONSCIOUS CREATION WITH RITA
        </Typography>
        <Fragment>{children}</Fragment>
      </Box>
    </Box>
  );
};

export default EventTemplate;
