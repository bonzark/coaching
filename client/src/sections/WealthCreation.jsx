import React from "react";
import { Box, Grid } from "@mui/material";
import { wealthCardItems } from "../utils/constant";
import SuccessStories from "../components/SuccessStoriesCard";
import HeroBanner from "./heroBanner";

const WealthCreationSection = () => {
  return (
    <>
      <HeroBanner
        imageUrl="./heroBg.jpg"
        header="Wealth Creation"
        description="Discover the Complete 3 Steps to Abundance Activation, an extraordinary online course designed to guide you on your journey towards manifesting wealth and prosperity. This remarkable course includes"
      />
      <Box sx={{ padding: { xs: "4rem 2rem" } }}>
        <Grid container spacing={5}>
          {wealthCardItems.map((item) => (
            <Grid key={item.title} item>
              <SuccessStories
                title={item?.title}
                content={item?.description}
                imgSrc={item?.imageUrl}
                reverse={item?.reverse}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default WealthCreationSection;
