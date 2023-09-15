import React, { useState } from "react";
import {
  Button,
  Paper,
  Popper,
  Menu,
  MenuItem,
  Link,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CommonDropdown = ({ dropdownItems, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    handleDrawerToggle();
  };

  const logOutHandler = async () => {
    setLoggingOut(true);
    localStorage.clear();
    setLoggingOut(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          color: "#fff",
          border: "1px solid #fff",
          minWidth: "132px",
          ":hover": {
            backgroundColor: "#fff",
            color: "#671d63",
            border: "1px solid #671d63",
          },
        }}
      >
        My Account
      </Button>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: (theme) => theme.zIndex.tooltip }}
      >
        {({ TransitionProps }) => (
          <Paper
            elevation={3}
            sx={{
              borderRadius: "0px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
              backgroundColor: "white",
              maxWidth: "200px",
              overflow: "hidden",
            }}
          >
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  width: 200,
                  marginTop: 2,
                },
              }}
              {...TransitionProps}
            >
              {dropdownItems.map((item) => (
                <MenuItem key={item.path} onClick={handleClose}>
                  <Link
                    href={item.path}
                    sx={{
                      width: "100%",
                      textDecoration: "none",
                      color: "#671d63",
                    }}
                  >
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
              {!loggingOut && (
                <Button
                  onClick={logOutHandler}
                  sx={{
                    color: "#671d63",
                    border: "1px solid #fff",
                    padding: "5px 5",
                    margin: "0 8px",
                    ":hover": { backgroundColor: "#671d63", color: "white" },
                  }}
                >
                  Logout
                </Button>
              )}

              {loggingOut && (
                <>
                  <CircularProgress color="secondary" />
                  <Typography>Logging out...</Typography>
                </>
              )}
            </Menu>
          </Paper>
        )}
      </Popper>
    </Box>
  );
};

export default CommonDropdown;
