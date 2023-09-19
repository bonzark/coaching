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
import { SessionCard } from "./CurrentSession";
import { sessionsData } from "../../utils/constant";

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
    <Box sx={{ marginTop: "100px", padding: "10px 16px" }}>
      <Typography>Choose Your Coach</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-large-label"> Coach</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={currentCoach}
          label="coach"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {coachList?.map((singleCoach) => {
            return (
              <MenuItem
                value={singleCoach?.firstName}
                onClick={() => {
                  setCurrentCoach(singleCoach);
                  handleSelect(singleCoach);
                  // getSessionsByCoachId(singleCoach?._id);
                }}
                key={singleCoach?._id}
              >
                {singleCoach?.firstName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: !sessions?.length && "none",
          }}
        >
          {sessions &&
            sessions.map((session, idx) => {
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
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: sessions?.length && "none" }}
        >
          {sessionsData.map((session) => (
            <Grid item xs={12} sm={6} md={3}>
              <SessionCard
                key={session?.name}
                description={session?.description}
                name={session?.name}
                sessionImg={session?.sessionImg}
                isCompleted={session?.isCompleted}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
