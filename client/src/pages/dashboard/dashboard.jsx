import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { sessionData, subscriptionData } from '../../utils/constant';
import SessionCard from '../../components/SessionCard';
import SubscriptionCard from '../../components/SubscriptionCard';
import { getBookedSessions, getSessions } from '../../services/session.service';

const Dashboard = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const bookedSessions = await getBookedSessions();
      setUpcomingSessions(bookedSessions?.data?.bookedSessions);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const renderUpcomingSessions = (upcomingSessions) => {
    return upcomingSessions?.map((session) => {
      return (
        <>
          <Grid key={session?._id} sx={{ height: '100% !important' }} item xs={12} sm={6} lg={4}>
            <SessionCard
              price={session?.session?.price}
              date={session?.date}
              time={session?.time}
              detail={session?.session?.details}
              coachName={session?.session?.coach?.firstName}
              title={session?.session?.title}
              sessionImg={session?.session?.coach?.image}
            />
          </Grid>
        </>
      );
    });
  };
  const user = JSON.parse(localStorage.getItem('user'))?.name;
  return (
    <Box
      sx={{
        marginTop: { xs: '40px', md: '92px' },
        padding: { xs: '1rem', sm: '2rem', md: '3rem', lg: '4rem' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '33px', md: '42px' },
          marginTop: '15px',
          fontFamily: "'montserrat', cursive",
        }}
      >
        Welcome,
        <Typography
          sx={{
            color: '#673d61',
            pl: '10px',
            fontSize: { xs: '33px', md: '42px' },
            textTransform: 'capitalize',
          }}
          component={'span'}
        >
          {user}
        </Typography>
      </Typography>
      <Box sx={{ pt: '15px' }}>
        <Typography
          sx={{
            fontSize: { xs: '20px', sm: '25px', md: '30px' },
            marginTop: '15px',
            color: '#673d61',
            fontFamily: "'montserrat', cursive",
            textAlign: 'center',
          }}
        >
          Upcoming Sessions
        </Typography>
        <Box>
          <Grid
            spacing={3}
            container
            sx={{
              marginTop: '0 !important',
              paddingBottom: '25px',
            }}
          >
            {/* {sessionData?.map((session) => (
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
            ))} */}
            {/* {upcomingSessions?.map((session) => {
              return (
                <>
                  <Grid
                    key={session?._id}
                    sx={{ height: "100% !important" }}
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                  >
                    <SessionCard
                      price={session?.session?.price}
                      date={session?.date}
                      time={session?.time}
                      detail={session?.session?.details}
                      coachName={session?.session?.coach?.firstName}
                      title={session?.session?.title}
                      sessionImg={session?.session?.coach?.image}
                    />
                  </Grid>
                </>
              );
            })} */}
            {upcomingSessions && upcomingSessions.length > 0 ? (
              renderUpcomingSessions(upcomingSessions)
            ) : (
              <h3>No Sessions Available</h3>
            )}
          </Grid>
        </Box>
      </Box>
      {/* <Box>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "25px", md: "30px" },
            marginTop: "15px",
            color: "#673d61",
            textAlign: "center",
          }}
        >
          Subscriptions Plans
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {subscriptionData?.map((plan) => {
            return (
              <Grid
                sx={{ height: { xs: "100%", lg: "auto" } }}
                item
                key={plan?.price}
              >
                <SubscriptionCard
                  description={plan?.description}
                  title={plan?.title}
                  price={plan?.price}
                  locked={plan?.locked}
                  unlocked={plan?.unlocked}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box> */}
    </Box>
  );
};

export default Dashboard;
