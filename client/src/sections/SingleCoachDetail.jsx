import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import './css/singleCoachDetail.css';
const SingleCoachDetail = ({ name, imgSrc, descriptionArr }) => {
  return (
    <Box
      component={"div"}
      sx={{ mx: { xs: "20px", md: "50px", lg: "225px" } }}
      className="story"
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          paddingBottom: "5vh",
          padding: { xs: "1.2rem", md: "2.2rem", lg: "3.2rem" },
          margin: "5rem auto"
        }}
      >
        <Grid container spacing={2}>
            <Grid item xs ={8}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "28px" },
                color: "#414141",
                lineHeight: { xs: "22px", sm: "30px" },
                textTransform: "capitalize",
                fontFamily: "'montserrat', sans-serif",
                my: { xs: "8px", md: "10px", lg: "15px" },
              }}
            >
              {name}
            </Typography>
                {descriptionArr?.map((para, index) => (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{
                      color: "#575757",
                      fontSize: { xs: "15px", sm: "20px" },
                      lineHeight: { xs: "20px", sm: "25px" },
                      mb: { xs: "8px", md: "10px", lg: "15px" },
                    }}
                  >
                    {para}
                  </Typography>
                ))}
            </Grid>
            <Grid item xs = {4}
            sx={{
              height: '50vh',
              width: '25vw'
            }}
            >
                <img src={imgSrc} alt="coach-img" className="coach-image" />
            </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SingleCoachDetail;
