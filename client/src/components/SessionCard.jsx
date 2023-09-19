import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SellIcon from "@mui/icons-material/Sell";

const SessionCard = ({ title, detail, coachName, price, date, time }) => {
  return (
    <Card
      sx={{
        padding: "1.2rem 1.75rem",
        minHeight: "100%",
        justifyContent: "space-between",
        boxShadow: "#3c40434c 0px 1px 2px 0px, #3c404326 0px 2px 6px 2px",
        borderRadius: "8px",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.015)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gap: "8px",
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
              fontSize: { xs: "15px", sm: "20px", md: "25px" },
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
                fontSize: { xs: "15px", sm: "20px", md: "25px" },
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
            fontSize: { xs: "15px", sm: "20px", md: "25px" },
            mb: { xs: 1, md: 2 },
          }}
        >
          {detail}
        </Typography>
        <Box
          sx={{
            mb: { xs: 1, md: 2 },
            display: "flex",
            alignItems: "center",
            gap: "5px",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: "15px", sm: "20px", md: "25px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon sx={{ color: "#671d63" }} />
            <Typography
              sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
            >
              {date}
            </Typography>
          </Typography>
          <Typography
            component={"div"}
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <AccessTimeIcon sx={{ color: "#671d63" }} />
            <Typography
              sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
            >
              {time}
            </Typography>
          </Typography>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", alignItems: "center", py: { xs: "10px" } }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              gap: "5px",
            }}
          >
            <SellIcon sx={{ color: "#671d63" }} />
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "15px", sm: "20px", md: "25px" },
              }}
            >
              {"  $" + price}
            </Typography>
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default SessionCard;
