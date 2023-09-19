import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { coachesData } from "../../utils/constant";
import SuccessStories from "../../components/SuccessStoriesCard";
import HeroBanner from "../../sections/heroBanner";

const OurCoachesDetail = () => {
  const location = useLocation();
  const { name } = location.state;

  const data = coachesData.find((coach) => coach.id === name);

  return (
    <>
      <HeroBanner
        header={`Meet Our Coach ${data?.coachName}`}
        description={`${data?.description[0]} ${data?.description[1]}`}
        imageUrl="./heroBg.jpg"
      />
      <Box
        sx={{
          paddingY: "80px",
          position: "relative",
          background: "linear-gradient(#DCD9F0,#ffffff)",
        }}
      >
        <Typography sx={{ display: "flex", gap: "5px" }}>
          <Typography
            component="span"
            sx={{
              margin: "0 auto",
              textAlign: "center",
              fontSize: { xs: "25px", md: "40px" },
              fontFamily: "'Abril FatFace', sans-seri",
              color: "#671D63",
            }}
          >
            Meet Our Coach &nbsp;
            <Typography
              component="span"
              sx={{
                margin: "0 auto",
                textAlign: "center",
                fontSize: { xs: "25px", md: "40px" },
                fontFamily: "'Abril FatFace', sans-seri",
                color: "#671D63",
                position: "relative",
                "::before": {
                  position: "absolute",
                  margin: "0 auto",
                  bottom: "0",
                  content: `""`,
                  height: "4px",
                  width: { xs: "50px", md: "90px" },
                  backgroundColor: "goldenrod",
                },
              }}
            >
              {data?.coachName}
            </Typography>
          </Typography>
        </Typography>
        <SuccessStories
          id={data?.id}
          title={data?.coachName}
          imgSrc={`${data?.imageUrl}`}
          descriptionArr={data?.description}
          isDetailPage={true}
          wholeContent={true}
        />
      </Box>
    </>
  );
};

export default OurCoachesDetail;
