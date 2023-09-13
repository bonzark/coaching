import React from "react";
import { Box, Grid } from "@mui/material";
import { wealthCardItems } from "../utils/constant";
import SuccessStories from "../components/SuccessStoriesCard";

const WealthCreationSection = () => {
  return (
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
  );
};

export default WealthCreationSection;
