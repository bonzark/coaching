import React from "react";
import {
  Box,
  InputBase,
  Typography,
  InputAdornment,
  Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PrimaryBtn } from "../components/PrimaryBtn";

const FreeMeditation = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        my: "150px",
        position: "relative",
        zIndex: "9999",
        "&:before": {
          backgroundImage: 'url("./curve3_top.png")',
          backgroundPosition: "top center",
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 0,
          backgroundRepeat: "no-repeat",
        },
        "&:after": {
          backgroundImage: 'url("./curve3_bottom.png")',
          backgroundPosition: "bottom center",
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "205px",
          left: 0,
          zIndex: "-1",
          backgroundRepeat: "no-repeat",
        },
      }}
    >
      <Box
        sx={{
          paddingTop: 22,
          marginInline: "auto",
          width: "100%",
          backgroundColor: "#f9f6f9",
        }}
      >
        <Typography
          component={"h4"}
          sx={{
            fontSize: { xs: "32px", sm: "48px" },
            color: "#671d63",
            lineHeight: "48px",
            fontFamily: "'Abril FatFace', sans-serif",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Free Meditation
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontSize: "22px",
            textAlign: "center",
            color: "#2b2b2b",
            marginBottom: "10px",
            paddingTop: "20px",
          }}
        >
          Sign up with us to receive free meditation
        </Typography>
        <Box sx={{ mx: "auto" }}>
          <form>
            <Paper
              sx={{
                backgroundColor: "white",
                borderRadius: "100px",
                borderColor: "transparent",
                mx: "auto",
                paddingLeft: "25px",
                width: { xs: "80%", md: "40%" },
              }}
            >
              <InputBase
                id="email"
                name="email"
                type="email"
                required={true}
                sx={{
                  paddingY: "20px",
                  paddingX: "5px",
                  backgroundColor: "transparent",
                  borderRadius: "100px",
                  width: "100%",
                }}
                placeholder="Email Address Here"
                endAdornment={
                  <InputAdornment position="end">
                    <PrimaryBtn
                      type="submit"
                      sx={{
                        background: "linear-gradient(#f2d9de, #793473)",
                        color: "white",
                        borderRadius: "50%",
                        padding: "20px",
                        fontSize: "40px",
                      }}
                    >
                      <ArrowForwardIcon />
                    </PrimaryBtn>
                  </InputAdornment>
                }
              />
            </Paper>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeMeditation;
