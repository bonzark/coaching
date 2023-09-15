import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import { PrimaryBtn } from "../../components/PrimaryBtn";

const SessionCard = ({ name, description, sessionImg, isCompleted }) => {
  return (
    <Card sx={{ display: "grid", height: "100%" }}>
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          sx={{
            ":hover": {
              transform: "scale(1.05)",
              transition: "all 0.5s ease-in",
            },
          }}
          component="img"
          height="200"
          image={sessionImg}
          alt={name}
        />
      </Box>
      <CardContent sx={{ display: "grid", gap: "10px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {isCompleted ? (
          <PrimaryBtn>Discuss Previous Session</PrimaryBtn>
        ) : (
          <PrimaryBtn>Book Now</PrimaryBtn>
        )}
      </CardContent>
    </Card>
  );
};

const sessions = [
  {
    name: "Yoga for Beginners",
    description: "Start your yoga journey with this beginner-friendly session.",
    sessionImg: "./card_1.jpg",
    isCompleted: false,
  },
  {
    name: "Strength Training Workshop",
    description: "Learn effective strength training exercises and techniques.",
    sessionImg: "./card_2.png",
    isCompleted: true,
  },
  {
    name: "Pilates for Core Strength",
    description:
      "Improve your core strength and flexibility with Pilates exercises.",
    sessionImg: "./card_3.png",
    isCompleted: false,
  },
  {
    name: "HIIT Workout Intensive",
    description:
      "High-Intensity Interval Training for a powerful fitness routine.",
    sessionImg: "./card_4.png",
    isCompleted: true,
  },
  {
    name: "Meditation and Mindfulness",
    description:
      "Relax your mind and reduce stress through meditation and mindfulness.",
    sessionImg: "./card_5.png",
    isCompleted: false,
  },
  {
    name: "HIIT Workout Intensive",
    description:
      "High-Intensity Interval Training for a powerful fitness routine.",
    sessionImg: "./card_6.png",
    isCompleted: true,
  },
];

const CurrentSession = () => {
  return (
    <>
      <Box sx={{ padding: "2rem" }}>
        <h2>Current Sessions</h2>
        <Grid container spacing={{ xs: 4, md: 3 }}>
          {sessions?.map((session) => (
            <Grid item xs={12} md={6} lg={4}>
              <SessionCard
                description={session.description}
                name={session.name}
                sessionImg={session.sessionImg}
                isCompleted={session.isCompleted}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CurrentSession;
