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
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import FormModal from "../../sections/FormModal";
import { getAuthToken } from "../../utils/auth";
import { navItems, sidebarItems } from "../../utils/constant";
import CommonDropdown from "../../components/DropDown";

const Navbar = () => {
  const drawerWidth = 300;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [colorChange, setColorchange] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    if (getAuthToken() === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    if (window.innerWidth < 768) {
      setMobileOpen(false);
    }
  }, [getAuthToken()]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const drawer = (
    <Box>
      <Link to="/" style={{ display: "flex" }} onClick={handleDrawerToggle}>
        <img
          src="./logo.png"
          alt="logo"
          style={{
            maxWidth: "100px",
            height: "auto",
            margin: "auto",
          }}
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding onClick={handleDrawerToggle}>
            <ListItemButton sx={{ textAlign: "center", color: "#673d67" }}>
              <Button
                component={Link}
                to={item.link}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
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
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <CommonDropdown
              isMobile={mobileOpen}
              dropdownItems={sidebarItems}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>
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
            background: !colorChange ? "#873785" : "#671d63",
            boxShadow: colorChange
              ? {
                  lg: "#32325d3f 0px 50px 100px -20px, #0000004c 0px 30px 60px -30px",
                }
              : "none",
            zIndex: "2",
            padding: "0 !important",
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
                display: { md: "none", xs: mobileOpen ? "none" : "" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                marginRight: { xs: 0, md: "auto" },
              }}
            >
              <Link to="/">
                <img
                  src="./logo.png"
                  alt="logo"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                  }}
                />
              </Link>
            </Box>
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
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  sx={{
                    color: "#cecece",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: 0,
                    transition: "all 0.2s linear",
                    ":hover": {
                      color: "white",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            {isLoggedIn ? (
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <CommonDropdown
                  dropdownItems={sidebarItems}
                  handleDrawerToggle={handleDrawerToggle}
                  logout={() => setIsLoggedIn(false)}
                />
              </Box>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  color: "#671d63",
                  backgroundColor: "white",
                  width: "130px",
                  fontWeight: "bolder",
                  border: "1px solid #671d63",
                  ":hover": {
                    backgroundColor: "#671d63",
                    color: "white",
                    border: "1px solid #fff",
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
