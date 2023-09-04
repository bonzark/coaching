import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";
import { MainModal } from "../components/MainModal";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { FormModal } from "./FormModal";

const HeroBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <FormModal open={open} handleClose={handleClose} />
      <Box
        sx={{
          backgroundImage: "url('./heroBg.jpg')",
          backgroundSize: "cover",
          position: "relative",
          "::after": {
            content: "' '",
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 11%, rgba(255,255,255,0) 100%)",
            zIndex: 0,
            top: 0,
            left: 0,
          },
        }}
      >
        <Container
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              component={"h4"}
              sx={{ fontSize: "26px", fontWeight: "900" }}
            >
              discover what is blocking you from
            </Typography>
            <Typography
              component={"h1"}
              sx={{
                fontSize: "42px",
                color: "#671d63",
                fontWeight: "900",
                lineHeight: "62px",
                textTransform: "capitalize",
              }}
            >
              Manifesting and living life you desire !
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <CheckCircleIcon sx={{ color: "#671d63" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontWeight: "600" }}
                  primary="Single-line item"
                />
              </ListItem>
            </List>
            <PrimaryBtn onClick={handleOpen}>
              <span>DOWNLOAD NOW FOR FREE</span>
              Gain Awareness Of Your Creation in less than 30 days
            </PrimaryBtn>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroBanner;
