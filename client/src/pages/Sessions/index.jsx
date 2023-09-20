import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Backdrop, Box, Grid, OutlinedInput, Typography } from "@mui/material";

import {
  getCoaches,
  getSessions,
  getSessionsByCoachId,
} from "../../services/session.service";
import SessionCard from "../../components/SessionCard";
import CircularProgress from "@mui/material/CircularProgress";

export default function SelectSmall() {
  const [sessionsIsLoading, setSessionsIsLoading] = useState(false);
  const [filteredSessionsisLoading, setFilteredSessionsIsLoading] =
    useState(false);
  const [coachList, setCoachList] = useState([]);
  const [currentCoach, setCurrentCoach] = useState("");
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

  const handleChange = (event) => {
    setCurrentCoach(event.target.value);
  };

  const handleSelect = async (coachId) => {
    setSessionsIsLoading(true);
    const filteredSessionsList = await getSessionsByCoachId(coachId);
    setFilteredSessions(filteredSessionsList?.data?.sessions);
    setSessionsIsLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setFilteredSessionsIsLoading(true);
      const coachesData = await getCoaches();
      const sessionsList = await getSessions();
      setSessions(sessionsList?.data?.sessions);
      setFilteredSessions(sessionsList?.data?.sessions);
      setCoachList(coachesData?.data?.coaches);
      setFilteredSessionsIsLoading(false);
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
            fontFamily: "'montserrat', cursive",
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
              onChange={handleChange}
              input={<OutlinedInput label="Choose Your Coach" />}
              inputProps={{ MenuProps: { disableScrollLock: true } }}
            >
              <MenuItem
                value={""}
                onClick={() => {
                  setFilteredSessions(sessions);
                }}
              >
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
                      handleSelect(singleCoach?._id);
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
        <Grid
          spacing={3}
          container
          sx={{
            margin: "0 !important",
            width: "100% !important",
          }}
        >
          {filteredSessionsisLoading | sessionsIsLoading ? (
            <Backdrop open={sessionsIsLoading}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",
                  padding: "15px 45px",
                }}
              >
                <CircularProgress sx={{ color: "white" }} color="secondary" />
                <Typography
                  component="span"
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  Loading Sessions
                </Typography>
              </Box>
            </Backdrop>
          ) : filteredSessions?.length > 0 ? (
            filteredSessions?.map((filteredSession) => {
              return (
                <Grid
                  key={filteredSession?._id}
                  rowGap={"4px"}
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  sx={{ margin: "0" }}
                >
                  <SessionCard
                    coachName={filteredSession?.coach?.firstName}
                    date={filteredSession?.date}
                    time={filteredSession?.time}
                    sessionImg={filteredSession?.coach?.coachImg}
                    detail={filteredSession?.details}
                    price={filteredSession?.price}
                    title={filteredSession?.title}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography
              sx={{ color: "#671d63", fontSize: "45px", margin: "40px auto" }}
            >
              No Sessions Found....
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
