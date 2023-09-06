import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SuccessStories = ({ title, content }) => {
  return (
    <Box classname="successStoryCard" sx={{ py: 8, position: "relative" }}>
      <Box
        component={"div"}
        sx={{ mx: { xs: "50px", lg: "225px" } }}
        key={title}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            // alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              top: { xs: "-30px", lg: "-50px" },
              right: "0.9rem",
              fontSize: { xs: "35px", md: "120px" },
              fontWeight: "bold",
              color: "#671d63",
              lineHeight: { xs: "35px", md: "120px" },
              backgroundColor: "#f8e3c4",
              borderRadius: "50%",
              width: { xs: "20px", md: "70px" },
              height: { xs: "20px", md: "70px" },
              padding: "10px",
              textAlign: "center",
            }}
          >
            ”
          </Typography>
          <Box
            sx={{
              width: { md: "40%", xs: "100%" },
              height: "100%",
              margin: { xs: "0 auto", md: 0 },
            }}
          >
            <img
              src="./successStories.jpg"
              alt="story image"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "25px" },
                color: "#414141",
                lineHeight: { xs: "22px", sm: "30px" },
                textTransform: "capitalize",
                fontFamily: "'Abril FatFace', sans-serif",
                px: { xs: "0.5rem", sm: "2rem" },
                my: "26px",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#575757",
                fontSize: { xs: "15px", sm: "20px" },
                lineHeight: { xs: "20px", sm: "30px" },
                px: { xs: "0.5rem", sm: "2rem" },
                pb: { xs: "0.5rem", sm: "0" },
              }}
            >
              {content}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SuccessStories;
