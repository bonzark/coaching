import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography } from "@mui/material";

export default function SelectSmall() {
  const [coach, setCoach] = React.useState("");

  const handleChange = (event) => {
    setCoach(event.target.value);
  };

  console.log("Coach : ", coach);
  return (
    <Box sx={{ marginTop: "100px", padding: "10px 16px" }}>
      <Typography>Choose Your Coach</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-large-label"> Coach</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={coach}
          label="coach"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Rita"}>Rita</MenuItem>
          <MenuItem value={"Brandy"}>Brandy</MenuItem>
          <MenuItem value={"Prayag"}>Prayag</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
