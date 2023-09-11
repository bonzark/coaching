import React from "react";
import { Box, Typography } from "@mui/material";
import { PrimaryBtn } from "./PrimaryBtn";

const ProgramCard = ({ title, btnText, imgSrc }) => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        mx: { xs: "10px", lg: "30px" },
        py: "20px",
      }}
      key={title}
    >
      <Box sx={{ height: { xs: "45vh", md: "55vh", lg: "72vh" } }}>
        <img
          src={imgSrc}
          className="programImg"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            width: "100%",
            height: "100%",
            borderRadius: "25px",
            mx: "auto",
          }}
          alt="story image"
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "100%", lg: "70%" },
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
            mx: "auto",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "45%" },
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
  );
};

export default ProgramCard;
