import { Box, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { footerItems } from "../../utils/constant";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e9f8",
        padding: { md: "5rem", xs: "1rem" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          padding: "40px 0",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #671d63",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ maxWidth: "532px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              paddingBottom: "30px",
            }}
          >
            <Link to="/">
              <img
                src="./logo.png"
                alt="logo"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </Link>
          </Box>
          <Typography
            varient="p"
            sx={{
              color: "#671d63",
              margin: 0,
              lineHeight: "1.3rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            magnam facere ad perferendis amet tenetur reiciendis placeat et
            neque quo. Odio aspernatur maxime itaque facilis quos excepturi iste
            minima? Quae tempora deleniti porro dolores perferendis similique
            est dignissimos quod unde.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#671d63",
              fontSize: "1.2rem",
              fontWeight: 900,
              paddingBottom: "30px",
              margin: 0,
            }}
          >
            QUICK LINKS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "flex-start",
            }}
          >
            {footerItems?.map((item) => {
              return (
                <Typography
                  key={item.name}
                  component={Link}
                  to={item.href}
                  sx={{
                    color: "#671d63",
                    lineHeight: "1.5rem",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#671d63",
              fontSize: "1.2rem",
              fontWeight: 900,
              paddingBottom: "30px",
              margin: 0,
            }}
          >
            QUICK LINKS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "flex-start",
            }}
          >
            {footerItems?.map((item) => {
              return (
                <Typography
                  key={item.name}
                  component={Link}
                  to={item.href}
                  sx={{
                    color: "#671d63",
                    lineHeight: "1.5rem",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ marginTop: "2rem", alignSelf: "start" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#671d63",
              fontSize: "1.2rem",
              fontWeight: 900,
              paddingBottom: "8px",
              margin: 0,
            }}
          >
            FOLLOW US
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                color: "#671d63",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "0.15rem",
                border: "1px solid #671d63",
              }}
            >
              <FacebookRoundedIcon
                sx={{ fontSize: "2rem", cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                color: "#671d63",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "0.15rem",
                border: "1px solid #671d63",
              }}
            >
              <TwitterIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </Box>
            <Box
              sx={{
                color: "#671d63",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "0.15rem",
                border: "1px solid #671d63",
              }}
            >
              <InstagramIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: { xs: "1rem", md: "3rem" },
          textAlign: { xs: "left", md: "center" },
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <Typography
          varient="span"
          sx={{
            color: "#671d63",
            lineHeight: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          Become Your Creator - 2023 All rights reserved - Privacy - Terms
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
