import { Box } from "@mui/material";

const RitaPageTitle = ({ background, titleText }) => {
  return (
    <Box
      sx={{
        width: "80%",
        mx: "auto",
        display: "flex",
        alignItems: "center",
        padding: {
          xs: "50px 0",
          sm: "70px 0 0",
          md: "70px 0 120px",
          lg: "70px 0",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "80%", lg: "60%" },
          marginLeft: "auto",
          position: "relative",
        }}
      >
        <img src={background} style={{ width: "100%" }} />
        <Box
          sx={{
            position: "absolute",
            background: "#fff",
            padding: "4% 8%",
            fontSize: { xs: "2rem", md: "5rem" },
            lineHeight: { xs: "2.5rem", md: "80px" },
            width: { xs: "50%", md: "420px" },
            top: { xs: "75%", md: "75%", lg: "50%" },
            left: { xs: "-30px", md: "-30%", lg: "-50%" },
            border: "1rem solid #873785",

            "::after": {
              width: "100%",
              height: "110%",
              background: "#873785",
              position: "absolute",
              top: "-10px",
              left: "-10px",
              zIndex: "-1",
            },
          }}
        >
          Coaching With{" "}
          <Box sx={{ color: "#873785", display: "inline-block" }}>Rita</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RitaPageTitle;
