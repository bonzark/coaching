import React from "react";
import { Grid, Typography, Button, Paper, Box } from "@mui/material";
import { PrimaryBtn } from "../components/PrimaryBtn";

const OfferSection = () => {
  return (
    <Grid
      container
      sx={{
        height: "750px",
        justifyContent: { sm: "space-around", md: "space-evenly" },
        alignItems: { sm: "center" },
        padding: { xs: "35px 20px", sm: "50px 0", height: "max-content" },
      }}
    >
      <Grid item xs={12} sm={6} lg={5} sx={{ order: { xs: 2, sm: 1 } }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "34px" },
            color: "#671d63",
            fontFamily: '"Abril Fatface", sans-serif',
            fontWeight: 100,
            margin: { xs: "auto", sm: "0" },
            padding: "16px 0",
          }}
        >
          Here's Your Chance To Start Getting Everything You'll Ever Need To
          Live A Life Of Abundance, Attract Endless Happiness And Fulfilment...
        </Typography>
        <PrimaryBtn>
          <Typography
            component={"span"}
            sx={{
              fontSize: { fontWeight: 900 },
            }}
          >
            Aceess Now For Free
          </Typography>
          <Typography
            component={"span"}
            sx={{
              fontSize: { fontWeight: 900 },
            }}
          >
            Instant Download.
          </Typography>
        </PrimaryBtn>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        lg={4}
        sx={{
          order: { xs: 1, sm: 2 },
          justifyContent: { sm: "flex-start", md: "center" },
          display: { xs: "grid", sm: "block" },
        }}
      >
        <Box
          sx={{
            width: { xs: "275px", md: "400px", lg: "450px" },
            height: { xs: "275px", md: "400px", lg: "450px" },
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
    </Grid>
  );
};

export default OfferSection;
