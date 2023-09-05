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

const Navbar = () => {
  const drawerWidth = 240;
  const navItems = [
    "Our Coaches",
    "Events",
    "Healing",
    "Online Courses",
    "Caoaching",
    "Talk with Brandi",
    "Blogs",
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
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
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "#671d63",
          color: "white",
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
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{ background: "transparent", boxShadow: "none", backdropFilter: "blur(2px)" }}
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
              LOGOIPSUM
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
                fontSize: { xs: "8px", md: "15px" },
                border: "1px solid transparent",
                ":hover": {
                  backgroundColor: "transparent",
                  color: "#671d63",
                  border: "1px solid #671d63",
                },
                display: { xs: "none", md: "block" },
              }}
            >
              Contact us
            </Button>
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
