import { Box, Button, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const News = () => {
  return (
    <Box
      sx={{ padding: { xs: "2rem", md: "5rem" }, backgroundColor: "#f2effb" }}
    >
      <Box sx={{ maxWidth: "1500px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: { lg: "70px" },
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
            What's new on Become Your Creator
          </Typography>
          <Typography
            paragraph
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem" },
              maxWidth: "605px",
              color: "#444",
              textAlign: { xs: "left", sm: "justify" },
            }}
          >
            Here's Your Chance To Start Getting Everything You'll Ever Need To
            Live A Life Of Abundance, Attract Endless Happiness And
            Fulfilment...
          </Typography>
        </Box>
        <a
          href="https://allevents.in/online/3-day-conscious-creation-with-rita-october-5th-6th-7th-8pm-gmt/80001529046485"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            sx={{
              background: "url('./eventBanner.webp')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "30px",
              minHeight: "50vh",
            }}
          />
        </a>
      </Box>
      <Link
        component={NavLink}
        to="/events"
        variant="button"
        sx={{
          color: "#671d63",
          width: "max-content",
          textDecoration: "none",
          mt: { lg: "1.3rem" },
          mx: "auto",
          fontWeight: "bolder",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          transition: "all 0.25s linear",
          backgroundColor: "#EFE6EF",
          "&:hover": {
            backgroundColor: "#671d63",
            color: "white",
            border: "none",
          },
          display: "block",
        }}
      >
        SEE ALL EVENTS
      </Link>
    </Box>
  );
};

export default News;
