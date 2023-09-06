import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import FormModal from "../../sections/FormModal";
import { getAuthToken } from "../../utils/auth";

const Navbar = () => {
  const drawerWidth = 240;
  const navItems = [
    "Our Coaches",
    "Events",
    "Healing",
    "Online Courses",
    "Caoaching",
    "Talk with Brandi",
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isLoggedIn = !!getAuthToken();

  console.log("isLoggedIn", isLoggedIn);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography component={"p"} href="/" sx={{ my: 2 }}>
        <Link style={{ color: "#671d63", textDecoration: "none" }} to={"/"}>
          MUI
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#673d67" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "grid", gap: "20px" }}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#671d63",
            color: "white",
            width: "130px",
            margin: "0 auto",
            fontWeight: "bolder",
            border: "1px solid transparent",
            ":hover": {
              backgroundColor: "transparent",
              color: "#671d63",
              border: "1px solid #671d63",
            },
          }}
        >
          Contact us
        </Button>
        {isLoggedIn ? (
          <Button
            variant="outlined"
            sx={{
              color: "#671d63",
              backgroundColor: "white",
              width: "130px",
              margin: "0 auto",
              fontWeight: "bolder",
              border: "1px solid #671d63",
              ":hover": {
                backgroundColor: "#671d63",
                color: "white",
                border: "1px solid transparent",
              },
            }}
          >
            My Account
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              color: "#671d63",
              backgroundColor: "white",
              width: "130px",
              margin: "0 auto",
              fontWeight: "bolder",
              border: "1px solid #671d63",
              ":hover": {
                backgroundColor: "#671d63",
                color: "white",
                border: "1px solid transparent",
              },
            }}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <FormModal open={open} handleClose={handleClose} />
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            background: "transparent",
            boxShadow: "none",
            backdropFilter: "blur(2px)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: "none" },
                backgroundColor: "#671d63",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "block" },
                color: "#673d63",
              }}
            >
              <Link to="/" style={{ color: "#671d63", textDecoration: "none" }}>
                LOGOIPSUM
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#671d63", fontWeight: "600" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#671d63",
                color: "white",
                fontWeight: "bolder",
                fontSize: { xs: "8px", md: "12px", lg: "15px" },
                border: "1px solid transparent",
                width: { sm: "130px", lg: "auto" },
                ":hover": {
                  backgroundColor: "transparent",
                  color: "#671d63",
                  border: "1px solid #671d63",
                },
                marginRight: "10px",
                display: { xs: "none", md: "block" },
              }}
            >
              Contact us
            </Button>
            {isLoggedIn ? (
              <Button
                variant="outlined"
                sx={{
                  color: "#671d63",
                  backgroundColor: "white",
                  minWidth: "130px",
                  margin: "0 auto",
                  fontWeight: "bolder",
                  border: "1px solid #671d63",
                  ":hover": {
                    backgroundColor: "#671d63",
                    color: "white",
                    border: "1px solid transparent",
                  },
                }}
                component={Link}
                to="/dashboard"
              >
                My Account
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  color: "#671d63",
                  backgroundColor: "white",
                  width: "130px",
                  margin: "0 auto",
                  fontWeight: "bolder",
                  border: "1px solid #671d63",
                  ":hover": {
                    backgroundColor: "#671d63",
                    color: "white",
                    border: "1px solid transparent",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              backgroundColor: "grey",
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default Navbar;
