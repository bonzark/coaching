import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SellIcon from "@mui/icons-material/Sell";

const YogaSessionCard = ({ title, detail, coachName, price, date }) => {
  const dateString = date;
  const dateParts = dateString.split("/");
  const dateOfSession = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  const day = dateOfSession.getDate();
  const month = dateOfSession.getMonth() + 1;
  const year = dateOfSession.getFullYear();

  return (
    <Card
      sx={{
        padding: "1rem 1.75rem",
        minHeight: "100%",
        justifyContent: "space-between",
        boxShadow: "#3c40434c 0px 1px 2px 0px, #3c404326 0px 2px 6px 2px",
        borderRadius: "8px",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          height: "100%",
          justifyContent: "space-between",
          padding: "0px !important",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
              mb: { xs: 1, md: 2 },
              color: "#671d63",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              mb: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <PersonOutlineIcon sx={{ color: "#671d63" }} />
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
                color: "#671d63",
              }}
            >
              {" " + coachName}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "10px", sm: "15px", md: "20px" },
            mb: { xs: 1, md: 2 },
          }}
        >
          {detail}
        </Typography>
        <Box
          sx={{
            display: { xs: "grid", lg: "flex" },
            gap: { lg: "25px" },
          }}
        >
          <Box
            sx={{
              mb: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <CalendarMonthIcon sx={{ color: "#671d63" }} />
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              {" " + day + "/" + month + "/" + year}
            </Typography>
          </Box>
          <Box
            sx={{
              mb: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <SellIcon sx={{ color: "#671d63" }} />
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "10px", sm: "15px", md: "20px" },
              }}
            >
              {"  $" + price}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlineds"
          sx={{
            color: "#671d61",
            border: "1px solid #671d63",
            marginLeft: "auto",
            maxWidth: "fit-content",
            fontSize: { xs: "8px", sm: "12px", md: "16px" },
          }}
        >
          Get Link
        </Button>
      </CardContent>
    </Card>
  );
};

export default YogaSessionCard;
