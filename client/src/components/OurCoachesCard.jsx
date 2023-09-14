import React from "react";
import { Box } from "@mui/material";
import { coachesData } from "../utils/constant";
import SuccessStories from "./SuccessStoriesCard";

const OurCoachesCard = () => {
  return (
    <Box
      sx={{
        paddingY: "80px",
        position: "relative",
        display: "grid",
        gap: "15px",
      }}
    >
      {coachesData.map((data) => (
        <SuccessStories
          key={data?.coachName}
          title={data?.coachName}
          imgSrc={data?.imageUrl}
          reverse={data?.reverse}
          descriptionArr={data?.description}
          id={data?.id}
          isDetailPage={false}
          wholeContent={false}
        />
      ))}
    </Box>
  );
};

export default OurCoachesCard;
