import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { sessionData, subscriptionData } from "../../utils/constant";
import SessionCard from "../../components/SessionCard";
import SubscriptionCard from "../../components/SubscriptionCard";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"))?.name;
  return (
    <Box
      sx={{
        marginTop: { xs: "40px", md: "92px" },
        padding: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "22px", sm: "30px", md: "35px", lg: "38px" },
          fontWeight: "normal",
          fontFamily: "'Abril Fatface', cursive",
          color: "#673D61",
        }}
      >
        Welcome {user}
      </Typography>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "18px", md: "24px" },
            marginTop: "15px",
            color: "#673d61",
          }}
        >
          Upcoming Sessios
        </Typography>
        <Grid
          spacing={3}
          container
          sx={{
            marginTop: { lg: "15px" },
            paddingBottom: "25px",
          }}
        >
          {sessionData?.map((session) => (
            <Grid sx={{ height: "100% !important" }} item xs={12} sm={6} lg={4}>
              <SessionCard
                key={session?.title}
                title={session?.title}
                coachName={session?.coachName}
                date={session?.date}
                detail={session?.detail}
                price={session?.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "18px", md: "24px" },
            marginTop: "15px",
            color: "#673d61",
          }}
        >
          Subscription Plans
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginTop: { sm: "16px" },
          }}
        >
          {subscriptionData?.map((plan) => (
            <Box>
              <SubscriptionCard
                description={plan?.description}
                title={plan?.title}
                price={plan?.price}
                locked={plan?.locked}
                unlocked={plan?.unlocked}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
