import { Typography } from "@mui/material";

const TNCTitle = ({ children, bigHead }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: "#671d63",
        borderBottom: "3px solid goldenrod",
        margin: "24px 0",
        padding: "0.7rem 0",
        fontWeight: "900",
        fontFamily: "'montserrat', cursive",
        fontSize: bigHead
          ? '{ xs: "1.3rem", sm: "1.7rem", md: "2.2rem" }'
          : '{ xs: "0.9rem", sm: "1.25rem", md: "1.75rem" }',
      }}
    >
      {children}
    </Typography>
  );
};

export default TNCTitle;
