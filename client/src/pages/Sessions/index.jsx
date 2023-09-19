import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Grid, Typography } from "@mui/material";

import {
  getCoaches,
  getSessions,
  getSessionsByCoachId,
} from "../../services/session.service";
import { sessionsData } from "../../utils/constant";
import SessionCard from "../../components/SessionCard";

export default function SelectSmall() {
  const [coachList, setCoachList] = useState([]);
  const [currentCoach, setCurrentCoach] = useState("");
  const [sessions, setSessions] = useState([]);

  const handleChange = (event) => {
    setCurrentCoach(event.target.value);
  };

  const handleSelect = async (singleCoach) => {
    const selectedSession = await getSessionsByCoachId(singleCoach?._id);
    setSessions(selectedSession?.data?.sessions);
  };

  useEffect(() => {
    const getData = async () => {
      const coachesData = await getCoaches();
      setCoachList(coachesData?.data?.coaches);
    };
    getData();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "55px",
        color: "#671d61",
        padding: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "27px", md: "32px" },
            color: "#673d61",
            fontFamily: "'Abril Fatface', cursive",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Sessions
        </Typography>
        <Box>
          <Typography
            sx={{ fontSize: { xs: "20px", sm: "24px", md: "27px" } }}
          ></Typography>
          <FormControl
            sx={{
              minWidth: "240px",
              borderColor: "#671d61",
              color: "#671d63",
              marginTop: "15px",
            }}
            size="medium"
          >
            <InputLabel id="demo-select-large-label">
              Choose Your Coach
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={currentCoach}
              label="coach"
              onChange={handleChange}
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              disableScrollLock={true}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {coachList?.map((singleCoach) => {
                return (
                  <MenuItem
                    key={singleCoach?._id}
                    value={singleCoach?.firstName}
                    sx={{
                      backgroundColor: "#fff",
                      color: "#671d61",
                      ":hover": {
                        backgroundColor: "#671d61",
                        color: "#fff",
                      },
                    }}
                    onClick={() => {
                      setCurrentCoach(singleCoach);
                      handleSelect(singleCoach);
                      // getSessionsByCoachId(singleCoach?._id);
                    }}
                  >
                    {singleCoach?.firstName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        {/* <Grid
          container
          spacing={2}
          sx={{
            display: !sessions?.length && "none",
          }}
        >
          {sessions?.map((session) => {
            console.log("Sessions: ", session);
            return (
              <Grid item xs={12} sm={6} md={3}>
                <SessionCard
                  key={session?._id}
                  name={session?.firstName}
                  description={session?.details}
                />
              </Grid>
            );
          })}
        </Grid> */}
        <Grid
          spacing={3}
          container
          sx={{
            marginTop: "0 !important",
            width: "100% !important",
          }}
        >
          {sessionsData?.map((session) => (
            <Grid
              key={session?.title}
              rowGap={"4px"}
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ margin: "0" }}
            >
              <SessionCard
                coachName={session?.coachName}
                date={session?.date}
                time={session?.time}
                sessionImg={session?.sessionImg}
                detail={session?.description}
                price={session?.price}
                title={session?.title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
