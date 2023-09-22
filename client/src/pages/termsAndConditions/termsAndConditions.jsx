import { Box } from "@mui/material";
import PageBanner from "../../sections/PageBanner";
import TermOrCondition from "../../sections/TermOrCondition";
import { termsAndConditionsData } from "../../utils/constant";

const TermsAndConditions = () => {
  return (
    <>
      <PageBanner heading="Terms & Conditions" />
      <Box>
        {termsAndConditionsData.map((section, index) => (
          <TermOrCondition title={section.title} key={index} bigHead>
            {section.content}
          </TermOrCondition>
        ))}
      </Box>
    </>
  );
};

export default TermsAndConditions;
