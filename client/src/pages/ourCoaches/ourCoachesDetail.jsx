import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { coachesData } from "../../utils/constant";
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
          padding: {
            xs: "4rem 1rem 0",
            sm: "4rem 2rem 0",
            md: "4rem 3rem 0",
          },
          background: "linear-gradient(#DCD9F0,#ffffff)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
            },
          }}
        >
          <Typography
            variant="span"
            sx={{
              fontFamily: "'montserrat', sans-seri",
              color: "#671D63",
            }}
          >
            Meet Our Coach &nbsp;
            <Typography
              variant="span"
              sx={{
                position: "relative",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  bottom: 0,
                  left: "2%",
                  width: "60%",
                  height: "3px",
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
