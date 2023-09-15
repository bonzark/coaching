import React, { useState } from "react";
import {
  Button,
  Paper,
  Popper,
  Menu,
  MenuItem,
  Box,
  Typography,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CommonDropdown = ({
  dropdownItems,
  handleDrawerToggle,
  logout,
  isMobile,
}) => {
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
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      {!isMobile && (
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "1px solid #fff",
            minWidth: "132px",
            ":hover": {
              backgroundColor: isMobile ? "transparent" : "#fff",
              color: "#671d63",
              border: "1px solid #671d63",
            },
          }}
        >
          My Account
        </Button>
      )}
      {!isMobile ? (
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement="bottom-start"
          transition
          disablePortal
          sx={{
            zIndex: (theme) => theme.zIndex.tooltip,
            " .MuiPaper-root": {
              background: "red",
            },
          }}
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
                disableScrollLock={true}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    width: 250,
                    marginTop: 2,
                    color: "#fff",
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
      ) : (
        <Box sx={{ width: "250px", margin: "0 auto" }}>
          <Accordion
            sx={{ border: "none", boxShadow: "none", width: "fit-contnet" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              sx={{
                width: "max-content",
                paddingLeft: "15px",
                textAlign: "center",
              }}
              id="panel1a-header"
            >
              <Typography>My Account</Typography>
            </AccordionSummary>
            <Box sx={{ width: "fit-content" }}>
              {dropdownItems?.map((item) => {
                return (
                  <AccordionDetails
                    key={item?.name}
                    sx={{
                      width: "fit-contnet",
                      textAlign: "center",
                      padding: "5px 10px",
                      height: "15px",
                    }}
                  >
                    <Typography
                      sx={{ textDecoration: "none" }}
                      component={NavLink}
                      to={item?.path}
                    >
                      {item?.name}
                    </Typography>
                  </AccordionDetails>
                );
              })}
            </Box>
          </Accordion>
        </Box>
      )}
    </Box>
  );
};

export default CommonDropdown;
