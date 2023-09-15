import { Box } from "@mui/material";
import React from "react";
import { aboutTemplateData } from "../utils/constant";
import AboutTemplate from "../components/AboutTemplate";

const OurProgram = ({}) => {
  const aboutTemplate2Data = aboutTemplateData.find(
    (item) => item.id === "brandi"
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        paddingX: { lg: "10rem" },
        background: "linear-gradient(#DCD9F0,#ffffff)",
      }}
    >
      <Box>
        <AboutTemplate
          reverse={aboutTemplate2Data.reverse}
          image={aboutTemplate2Data.image}
          title={aboutTemplate2Data.title}
          content={aboutTemplate2Data.content}
          linkText={aboutTemplate2Data.linkText}
        />
      </Box>
    </Box>
  );
};

export default OurProgram;
