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
          fontSize: { xs: "33px", md: "42px" },
          marginTop: "15px",
          fontFamily: "'Abril Fatface', cursive",
        }}
      >
        Welcome,
        <Typography
          sx={{
            color: "#673d61",
            pl: "10px",
            fontSize: { xs: "33px", md: "42px" },
          }}
          component={"span"}
        >
          {user}
        </Typography>
      </Typography>
      <Box sx={{ pt: "15px" }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "25px", md: "30px" },
            marginTop: "15px",
            color: "#673d61",
            fontFamily: "'Abril Fatface', cursive",
            textAlign: "center",
          }}
        >
          Upcoming Sessions
        </Typography>
        <Box>
          <Grid
            spacing={3}
            container
            sx={{
              marginTop: "0 !important",
              paddingBottom: "25px",
            }}
          >
            {sessionData?.map((session) => (
              <Grid
                sx={{ height: "100% !important" }}
                item
                xs={12}
                sm={6}
                lg={4}
              >
                <SessionCard
                  key={session?.title}
                  title={session?.title}
                  coachName={session?.coachName}
                  date={session?.date}
                  time={session?.time}
                  detail={session?.detail}
                  price={session?.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "25px", md: "30px" },
            marginTop: "15px",
            color: "#673d61",
            fontFamily: "'Abril Fatface', cursive",
            textAlign: "center",
          }}
        >
          Subsctiption Plans
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {subscriptionData?.map((plan) => (
            <Grid sx={{ height: { xs: "100%", lg: "auto" } }} item>
              <SubscriptionCard
                key={plan?.price}
                description={plan?.description}
                title={plan?.title}
                price={plan?.price}
                locked={plan?.locked}
                unlocked={plan?.unlocked}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
