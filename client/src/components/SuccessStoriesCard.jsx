import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SuccessStories = ({ title, content, imgSrc }) => {
  return (
    <Box sx={{ paddingTop: 6, position: "relative" }}>
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
              top: { xs: "-30px", lg: "-48px" },
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
              width: { md: "35%", xs: "100%" },
              height: { lg: "380px", xs: "350px" },
              objectFit: "cover",
              objectPosition: "top center",
              margin: { xs: "0 auto", md: 0 },
            }}
          >
            <img
              src={imgSrc}
              alt="story image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "60%", lg: "63%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "28px" },
                color: "#414141",
                lineHeight: { xs: "22px", sm: "30px" },
                textTransform: "capitalize",
                fontFamily: "'Abril FatFace', sans-serif",
                px: { xs: "0.5rem", lg: "3rem" },
                my: "15px",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#575757",
                fontSize: { xs: "15px", sm: "23px" },
                lineHeight: { xs: "20px", sm: "28px" },
                px: { xs: "0.5rem", lg: "3rem" },
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
