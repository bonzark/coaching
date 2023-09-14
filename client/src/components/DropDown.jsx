import React, { useState } from "react";
import {
  Button,
  Paper,
  Popper,
  Menu,
  MenuItem,
  Link,
  Box,
} from "@mui/material";

const CommonDropdown = ({ dropdownItems, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    handleDrawerToggle()
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          color: "#671d63",
          border: "1px solid transparent",
          minWidth: "132px",
          ":hover": {
            backgroundColor: "#671d63",
            color: "white",
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
            </Menu>
          </Paper>
        )}
      </Popper>
    </Box>
  );
};

export default CommonDropdown;
