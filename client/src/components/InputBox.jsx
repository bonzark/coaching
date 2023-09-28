import {
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export const InputBox = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (props.type === "password") {
    return (
      <>
        <OutlinedInput
          {...props}
          type={showPassword ? "text" : "password"}
          sx={{}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText
          sx={{
            margin: "0 0 20px 0",
          }}
          id="outlined-weight-helper-text"
        >
          {props.helperText}
        </FormHelperText>
      </>
    );
  }

  return (
    <TextField
      sx={{
        margin: "0 0 20px 0",
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
