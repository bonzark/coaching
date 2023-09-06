import React from "react";
import { Grid, Typography, Button, Paper, Box } from "@mui/material";

const OfferSection = () => {
  return (
    <Grid
      container
      sx={{
        height: "750px",
        justifyContent: { sm: "space-around", md: "space-evenly" },
        alignItems: { sm: "center" },
        padding: { xs: "0 20px", sm: 0 },
      }}
    >
      <Grid item xs={12} sm={6} lg={5} sx={{ order: { xs: 2, sm: 1 } }}>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "34px" },
            color: "#671d63",
            fontFamily: '"Abril Fatface", sans-serif',
            fontWeight: 100,
            margin: { xs: "auto", sm: "0" },
          }}
        >
          Here's Your Chance To Start Getting Everything You'll Ever Need To
          Live A Life Of Abundance, Attract Endless Happiness And Fulfilment...
        </Typography>
        <Typography
          variant="button"
          sx={{
            display: "grid",
            padding: "5px 20px",
            width: "max-content",
            cursor: "pointer",
            my: "15px",
            gap: 0,
            fontWeight: 900,
            backgroundColor: "#671d63",
            color: "white",
            ":active": {
              backgroundColor: "#671d63",
            },
          }}
          color="primary"
        >
          <Typography component={"span"}>Aceess Now For Free </Typography>
          <Typography component={"span"}>Instant Download.</Typography>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        lg={4}
        sx={{
          order: { xs: 1, sm: 2 },
          justifyContent: { xs: "center" },
          display: { xs: "grid", sm: "block" },
          placeContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "250px", md: "400px", lg: "450px" },
            height: { xs: "250px", md: "400px", lg: "450px" },
          }}
        >
          <img
            src="./offers.JPG"
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
        </Box>
      </Grid>
    </Grid >
  );
};

export default OfferSection;
