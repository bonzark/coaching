import { Box, Button, Typography } from "@mui/material";

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
            paddingBottom: "70px",
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
            varient="p"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem" },
              maxWidth: "605px",
              color: "#444",
            }}
          >
            Here's Your Chance To Start Getting Everything You'll Ever Need To
            Live A Life Of Abundance, Attract Endless Happiness And
            Fulfilment...
          </Typography>
        </Box>
        <Box
          sx={{
            background: "url('./news.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: { xs: "3rem 2rem", md: "4rem 5rem" },
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{ maxWidth: { lg: "100%", xl: "55%" }, textAlign: "center" }}
          >
            <Typography
              varient="h4"
              sx={{
                fontSize: { xs: "1rem", md: "2rem" },
                fontWeight: 800,
                color: "#fff",
              }}
            >
              HOW TO FINALLY
            </Typography>
            <Typography
              varient="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 900,
                color: "#fff",
                lineHeight: { xs: "45px", md: "70px" },
                marginBottom: "15px",
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              LOSE THOSE STUBBORN POUNDS IN 90 DAYS WITHOUT EXERCISE
            </Typography>
            <Typography
              varient="h6"
              sx={{
                fontSize: { xs: "0.8rem", md: "1.7rem" },
                fontWeight: 200,
                letterSpacing: { xs: "4px", md: "8px" },
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              ERIC EDMEADES & VISHEN
            </Typography>
            <Typography
              varient="h5"
              sx={{
                fontSize: { xs: "0.9rem", md: "1.5rem" },
                fontWeight: 800,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              WEDNESDAY, 2ND AUG AT 8AM PT AND 5PM CEST
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f6ce3b",
                color: "#000",
                fontSize: { xs: "0.8rem", md: "1.2rem" },
                fontWeight: 900,
                padding: { xs: "10px 30px", md: "15px 50px" },
                borderRadius: "500px",
                transition: "all 300ms linear",
                "&:hover": {
                  backgroundColor: "#fedf6c",
                },
              }}
            >
              RSVP NOW
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
