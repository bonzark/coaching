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
import { PrimaryBtn } from "../components/PrimaryBtn";
import FormModal from "./FormModal";

const listItems = [
  {
    name: "Learn why you've been unsuccessful at manifesting the life you want and What to do about it Fix your manifestation methods and learn how to become your creator the proper way",
    key: 1,
  },
  {
    name: "Become Conscious Aware Of Your Creation in Less Than 30 Days",
    key: 2,
  },
  {
    name: "Ditch all the theories and practices that just don t work",
    key: 3,
  },
  {
    name: "Be able to attract endless opportunities, relationships and wealth with minimal but effective effort",
    key: 4,
  },
];

const HeroBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <FormModal open={open} handleClose={handleClose} />
      <Box
        sx={{
          backgroundImage: "url('./heroBg.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "::after": {
            content: "' '",
            position: "absolute",
            width: "100%",
            height: "100%",
            background: {
              xs: "linear-gradient(0, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 100%)",
              md: "linear-gradient(90deg, rgba(255,255,255,1) 11%, rgba(255,255,255,0) 100%)",
            },
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
          <Box
            sx={{
              width: { xs: "auto  ", md: "50%" },
              position: { xs: "absolute", md: "relative" },
              bottom: { xs: "110px", md: "auto" },
            }}
          >
            <Typography
              component={"h4"}
              sx={{
                fontSize: { xs: "15px", md: "22px" },
                fontWeight: "normal",
                fontFamily: "'Abril Fatface', cursive",
              }}
            >
              Discover what is blocking you from
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: { xs: "22px", md: "30px", lg: "42px" },
                color: "#671d63",
                fontWeight: "normal",
                lineHeight: { xs: "27px", md: "36px", lg: "62px" },
                textTransform: "capitalize",
                fontFamily: "'Abril Fatface', cursive",
              }}
            >
              Manifesting and living life you desire !
            </Typography>
            <List>
              {listItems.map((item) => {
                return (
                  <ListItem sx={{ padding: "0" }} key={item.key}>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <CheckCircleIcon sx={{ color: "#671d63" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontWeight: "600" }}
                      primary={item.name}
                    />
                  </ListItem>
                );
              })}
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
