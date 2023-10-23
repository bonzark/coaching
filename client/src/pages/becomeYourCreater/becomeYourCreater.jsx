import React, { useState } from "react";
import {
  AccordionDetails,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { becomeYourCreatorData, lineUpsData } from "../../utils/constant";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import PageBanner from "../../sections/PageBanner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const BecomeYourCreator = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <PageBanner heading={"Become Your Creator"} imgSrc="./heroBg2.jpg" />
      <Box
        sx={{ padding: { xs: "1rem", sm: "2rem", md: "3.5rem", lg: "5rem" } }}
      >
        <Box
          sx={{
            paddingBottom: { lg: "55px" },
          }}
        >
          <List sx={{ paddingBottom: "1rem", px: { xs: 0, md: "1rem" } }}>
            {becomeYourCreatorData?.map((item, key) => (
              <ListItem
                sx={{ display: "flex", alignItems: "start", px: 0 }}
                key={key}
              >
                {item?.type === "header" && (
                  <ListItemIcon
                    sx={{
                      minWidth: { xs: "12px", sm: "18px", lg: "30px" },
                      paddingRight: { xs: "5px", md: "12px" },
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#671d63", width: "100%" }} />
                  </ListItemIcon>
                )}
                <Typography
                  sx={{
                    fontSize: {
                      xs: item?.type === "header" ? "1.25rem" : "1rem",
                      sm: item?.type === "header" ? "1.30rem" : "1.05rem",
                      md: item?.type === "header" ? "1.35rem" : "1.10rem",
                    },
                    textAlign: "justify",
                    fontWeight: item?.type === "content" ? 100 : 400,
                    paddingLeft: item?.type === "content" && { md: "42px" },
                  }}
                >
                  {item?.content}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: { lg: "55px" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Typography
            varient="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              color: "#671d63",
              fontFamily: "'montserrat',sans-serif",
              maxWidth: "592px",
              position: "relative",
              paddingRight: { lg: "70px" },
              marginBottom: { xs: "40px", lg: 0 },
              marginRight: { xs: "10px", lg: "45px" },
              lineHeight: { xs: "35px", sm: "45px", md: "50px", lg: "60px" },
              "&:after": {
                content: { lg: "''" },
                position: "absolute",
                right: 0,
                top: 0,
                width: "4px",
                height: "100%",
                backgroundColor: "#671d63",
              },
            }}
          >
            WHAT TO LOOK FORWARD TO EVERY MONTH
          </Typography>
          <Typography
            varient="p"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem" },
              maxWidth: "605px",
              color: "#444",
            }}
          >
            Every month, we have an exciting lineup of live sessions just for
            you! Here's what you can anticipate:
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
            maxWidth: "1120px",
            mx: "auto",
            my: { xs: "3rem", lg: "4.2rem" },
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {lineUpsData?.map((item, index) => (
            <Accordion
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              key={index}
              sx={{
                border: "none",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id={`panel${index + 1}d-header`}
                sx={{
                  backgroundColor: "#f9f6f9",
                  color: "#671d63",
                  ".MuiAccordionSummary-content": {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  },
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#F8E3C4",
                    borderRadius: "50%",
                    padding: "5px 6px",
                  }}
                >
                  {item?.quentity}x
                </Typography>
                <Typography>{item?.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  paragraph
                  sx={{ textAlign: { xs: "left", sm: "justify" } }}
                >
                  {item?.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BecomeYourCreator;
