import { Box, Button, Typography } from "@mui/material";

const News = () => {
  return (
    <Box sx={{ padding: "5rem", backgroundColor: "#f2effb" }}>
      <Box sx={{ maxWidth: "1500px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "70px",
          }}
        >
          <Typography
            varient="h1"
            sx={{
              fontSize: "3.5rem",
              color: "#671d63",
              fontFamily: "'Abril FatFace',sans-serif",
              maxWidth: "592px",
              position: "relative",
              paddingRight: "70px",
              marginRight: "45px",
              "&:after": {
                content: "''",
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
              fontSize: "1.5rem",
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
            padding: "4rem 5rem",
            borderRadius: "30px",
          }}
        >
          <Box sx={{ maxWidth: "55%", textAlign: "center" }}>
            <Typography
              varient="h4"
              sx={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              HOW TO FINALLY
            </Typography>
            <Typography
              varient="h1"
              sx={{
                fontSize: "4rem",
                fontWeight: 900,
                color: "#fff",
                lineHeight: "70px",
                marginBottom: "15px",
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              LOSE THOSE STUBBORN POUNDS IN 90 DAYS WITHOUT EXERCISE
            </Typography>
            <Typography
              varient="h6"
              sx={{
                fontSize: "1.7rem",
                fontWeight: 200,
                letterSpacing: "8px",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              ERIC EDMEADES & VISHEN
            </Typography>
            <Typography
              varient="h5"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              WEDNESDAY, 2ND AUG AT 8AM PT AND 5PM CEST
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "#f6ce3b",
                color: "#000",
                fontSize: "1.2rem",
                fontWeight: 900,
                padding: "15px 50px",
                borderRadius: "500px",
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