import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { MainModal } from "./MainModal";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteIcon from "@mui/icons-material/EditNote";

const BookSession = ({ open, handleClose }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // function disableWeekends(date) {
  //   return (
  //     new Date(date["$d"]).getDay() === 0 || new Date(date["$d"]).getDay() === 6
  //   );
  // }
  return (
    <MainModal open={!open} handleClose={handleClose} lg>
      <Typography
        variant="h6"
        sx={{
          color: "#671d63",
          fontWeight: 900,
          borderBottom: "1px solid #aaa",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        Book your session now
      </Typography>
      <form>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                "& .css-4jnixx-MuiStack-root": {
                  padding: "12px 0",
                },
                flexBasis: 0,
                flexGrow: 1,
                "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                  width: "100%",
                },
                "& .css-4jnixx-MuiStack-root>.MuiTextField-root": {
                  width: "100%",
                },
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    // shouldDisableDate={disableWeekends}
                    disablePast
                    slotProps={{
                      textField: {
                        sx: {
                          svg: { color: "#671d63" },
                          input: {
                            color: "#000",
                          },
                          label: {
                            color: "#671d63",
                          },
                        },
                      },
                    }}
                    sx={{
                      width: "100%",
                      backgroundColor: "#f2effb",
                      "& .css-i4bv87-MuiSvgIcon-root": {
                        color: "#671d63",
                      },
                    }}
                    label="Pick a date"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
            <Box
              sx={{
                width: "100%",
                flexBasis: 0,
                flexGrow: 1,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose your coach
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="rita">Rita</MenuItem>
                  <MenuItem value="brandi">Brandi</MenuItem>
                  <MenuItem value="helene">Helene</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <IconButton
            aria-label="search"
            sx={{
              backgroundColor: "#671d63",
              color: "#fff",
              transition: "background 300ms linear",
              transform: "scale(1.2)",
              "&:hover": { color: "#671d63" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <List
          sx={{
            margin: "20px",
            boxShadow: "0 2px 8px #aaa",
            borderRadius: "8px",
            padding: 0,
            overflow: "hidden",
          }}
        >
          {[1, 2, 3].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <IconButton aria-label="book" sx={{ marginRight: "20px" }}>
                  <EditNoteIcon />
                </IconButton>
              }
              sx={{
                padding: "20px",
                "&:nth-child(odd)": {
                  backgroundColor: "#f2effb",
                },
              }}
            >
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
          ))}
        </List>
      </form>
    </MainModal>
  );
};

export default BookSession;
