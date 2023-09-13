import { Box } from "@mui/material";
import React from "react";
import { aboutTemplateData } from "../utils/constant";
import AboutTemplate from "../components/AboutTemplate";

const AboutSection = ({}) => {
  const aboutTemplate1Data = aboutTemplateData.find(
    (item) => item.id === "Rita"
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        background: "linear-gradient(#DCD9F0,#ffffff)",
      }}
    >
      <Box>
        <AboutTemplate
          reverse={aboutTemplate1Data.reverse}
          image={aboutTemplate1Data.image}
          title={aboutTemplate1Data.title}
          content={aboutTemplate1Data.content}
          linkText={aboutTemplate1Data.linkText}
        />
      </Box>
    </Box>
  );
};

export default AboutSection;
