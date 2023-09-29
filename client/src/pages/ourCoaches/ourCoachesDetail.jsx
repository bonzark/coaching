import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleCoachDetail from "../../sections/SingleCoachDetail";
import { getCoaches } from "../../services/session.service";

const OurCoachesDetail = () => {
  const location = useLocation();
  const { name } = location.state;
  const { id } = useParams();

  console.log("id", id);

  const [coachesData, setCoachesData] = useState([]);
  useEffect(() => {
    const coachesDataList = getCoaches();
    setCoachesData(coachesDataList);
  }, [id]);

  console.log("Data :", coachesData);
  // const data = coachesData?.find((coach) => coach.id === id);

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
