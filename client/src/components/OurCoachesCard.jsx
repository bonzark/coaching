import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SuccessStories from "./SuccessStoriesCard";
import { getCoaches } from "../services/session.service";

const OurCoachesCard = () => {
  const [coachesData, setCoachesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const coachesData = await getCoaches();
      setCoachesData(coachesData?.data?.coaches.reverse());
    };
    getData();
  }, []);

  return (
    <Box
      sx={{
        paddingY: "80px",
        position: "relative",
        display: "grid",
        gap: "15px",
      }}
    >
      {coachesData.length > 0 &&
        coachesData.map((data) => (
          <SuccessStories
            key={data?._id}
            title={`${data?.firstName} ${data?.lastName}`}
            imgSrc={data?.image}
            reverse={data?.reverse}
            descriptionArr={data?.about}
            id={data?._id}
            isDetailPage={false}
            wholeContent={false}
            isOurCoachCard={true}
          />
        ))}
    </Box>
  );
};

export default OurCoachesCard;
