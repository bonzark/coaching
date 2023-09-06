import { Box, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

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
          borderBottom: "2px solid #671d63",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ maxWidth: "532px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "15px",
              paddingBottom: "30px",
            }}
          >
            <img src="./logo.png" alt="logo" />
            <Typography
              variant="h1"
              sx={{
                color: "#671d63",
                fontSize: { md: "4rem", xs: "2rem" },
                margin: 0,
              }}
            >
              LOGOIPSUM
            </Typography>
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
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Our Coaches
            </Typography>
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Events
            </Typography>
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Healing
            </Typography>
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Online Course
            </Typography>
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
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Our Coaches
            </Typography>
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Events
            </Typography>
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Healing
            </Typography>
            <Typography
              varient="span"
              sx={{
                color: "#671d63",
                lineHeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              Online Course
            </Typography>
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
              <FacebookRoundedIcon sx={{ fontSize: "2rem" }} />
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
              <TwitterIcon sx={{ fontSize: "2rem" }} />
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
              <InstagramIcon sx={{ fontSize: "2rem" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
