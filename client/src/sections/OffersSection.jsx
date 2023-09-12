import React from "react";
import { Grid, Typography, Button, Paper, Box } from "@mui/material";
import { PrimaryBtn } from "../components/PrimaryBtn";

const OfferSection = () => {
  return (
    <Grid
      container
      sx={{
        height: "max-content",
        justifyContent: { sm: "space-around", md: "space-evenly", lg: "flex-end" },
        alignItems: { sm: "center" },
        padding: "4rem 2rem",
        backgroundColor: "#E6D7ED",
      }}
    >
      <Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 }, paddingRight: { md: "25px" } }}>
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
          <Box sx={{ padding: { sm: "0 40px" } }}>
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
          </Box>
        </PrimaryBtn>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          order: { xs: 1, md: 2 },
          justifyContent: { sm: "flex-start", md: "center" },
          display: { xs: "grid", sm: "block" },
        }}
      >
        <Box
          sx={{
            margin: { xs: "0 auto", md: "0" },
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
            alt="#"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default OfferSection;
