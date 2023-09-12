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
  const drawerWidth = 300;
  const navItems = [
    {
      name: "Our Coaches",
      link: "/",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Coaching With Rita",
      link: "/",
    },
    {
      name: "Become Your Creator",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isLoggedIn = !!getAuthToken();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };
  const [colorChange, setColorchange] = React.useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography component={"p"} href="/" sx={{ my: 2 }}>
        <Link to="/" style={{ color: "#671d63", textDecoration: "none" }}>
          LOGOIPSUM
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#673d67" }}>
              <Button
                component={Link}
                to={item.link}
                sx={{
                  color: "#673d67",
                  margin: "0 auto",
                }}
              >
                {item.name}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "grid", gap: "20px" }}>
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
            onClick={handleOpen}
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
            background: colorChange ? "white" : "transparent",
            boxShadow: colorChange
              ? {
                  lg: "#32325d3f 0px 50px 100px -20px, #0000004c 0px 30px 60px -30px",
                }
              : "none",
            zIndex: "99999",
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
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: "5px", lg: "15px" },
                marginRight: { md: "15px" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  to={item.link}
                  component={Link}
                  sx={{
                    color: "#671d63",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: 0,
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
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
                  display: { xs: "none", md: "block" },
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
                  display: { xs: "none", md: "block" },
                }}
                onClick={handleOpen}
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
