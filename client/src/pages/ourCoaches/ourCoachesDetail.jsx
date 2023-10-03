import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCoachDetail from "../../sections/SingleCoachDetail";
import { getCoaches } from "../../services/session.service";
import PageBanner from "../../sections/PageBanner";

const OurCoachesDetail = () => {
  const { id } = useParams();

  const [coachesData, setCoachesData] = useState([]);

  useEffect(() => {
    getCoaches()
      .then((res) => {
        if (res?.status === 200) {
          const data = res?.data?.coaches?.filter((coach) => coach._id === id);
          if (data && data.length > 0) {
            setCoachesData(data[0]);
          }
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  return (
    <>
      <PageBanner
        heading={`Meet Out Coach ${coachesData?.firstName}`}
        imgSrc="../coach-detail.jpeg"
      />
      <Box
        sx={{
          margin: "0 0",
          padding: {
            xs: "4rem 1rem 0",
            sm: "4rem 2rem 0",
            md: "4rem 3rem 0",
          },
          background: "linear-gradient(#DCD9F0,#ffffff)",
        }}
      >
        <SingleCoachDetail
          id={coachesData?._id}
          name={coachesData?.firstName}
          imgSrc={`${coachesData?.image}`}
          descriptionArr={coachesData?.about}
        />
      </Box>
    </>
  );
};

export default OurCoachesDetail;
