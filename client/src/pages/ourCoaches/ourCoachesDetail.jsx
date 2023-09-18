import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { coachesData } from "../../utils/constant";
import SuccessStories from "../../components/SuccessStoriesCard";
import SingleCoachDetail from "../../sections/SingleCoachDetail";

const OurCoachesDetail = () => {
  const location = useLocation();
  const { name } = location.state;

  const data = coachesData.find((coach) => coach.id === name);

  console.log(data.description);
  return (
    <>
      
      <Box
        sx={{
          margin: "5vh 0",
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
              fontFamily: "'montserrat', sans-seri",
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
                fontFamily: "'montserrat', sans-seri",
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
        <SingleCoachDetail
          id={data?.id}
          name={data?.coachName}
          imgSrc={`${data?.imageUrl}`}
          descriptionArr={data?.description}
        />
      </Box>
    </>
  );
};

export default OurCoachesDetail;
