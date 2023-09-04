import { TextField } from "@mui/material";
import React from "react";

export const InputBox = (props) => {
  return (
    <TextField
      sx={{
        margin: "10px 0",
        "& label.Mui-focused": {
          color: "#671d63",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#671d63",
          },
          "&.Mui-focused fieldset": {
            border: "1px solid",
            borderColor: "#671d63",
          },
        },
      }}
      {...props}
    />
  );
};
