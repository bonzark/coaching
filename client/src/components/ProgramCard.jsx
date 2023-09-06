import React from "react";
import { Box, Typography } from "@mui/material";
import { PrimaryBtn } from "./PrimaryBtn";

const SuccessStories = ({ title, btnText, imgSrc }) => {
  return (
    <Box sx={{ py: 5, position: "relative", width: "100%" }}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: { xs: "20px", lg: "100px" },
        }}
        key={title}
      >
        <img
          src={imgSrc}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            borderRadius: "8px",
          }}
          alt="story image"
        />
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", md: "70%" },
            alignItems: "center",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "20px", sm: "38px" },
              color: "#671d63",
              lineHeight: { xs: "22px", sm: "42px" },
              fontFamily: "'Abril FatFace', sans-serif",
              my: "26px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            alignItems: "center",
            mx: "auto",
          }}
        >
          <PrimaryBtn
            sx={{
              backgroundColor: "#671d63",
              display: "flex",
              flexDirection: "column",
              span: { display: "block", fontSize: "16px" },
              color: "#fff",
              borderRadius: "5px",
              padding: "10px 15px",
              fontSize: { xs: "15px", md: "20px" },
              lineHeight: "22px",
              fontWeight: "bold",
              textTransform: "none",
              border: "1px solid transparent",
              ":hover": {
                color: "#671d63",
                border: "1px solid #671d63",
              },
            }}
          >
            {btnText}
          </PrimaryBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessStories;
