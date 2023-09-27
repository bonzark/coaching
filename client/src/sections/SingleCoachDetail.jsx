import { Box, Button, Typography } from "@mui/material";

const SingleCoachDetail = ({ name, imgSrc, descriptionArr }) => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "2rem auto",
        boxShadow: "0 3px 12px 1px #dfdfdf",
        borderRadius: "8px",
        overflow: "hidden",
        padding: "1.5rem",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          float: { xs: "none", md: "right" },
          margin: "1.2rem",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <img
          src={imgSrc}
          alt="coach"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Typography paragraph>{name},</Typography>
      {descriptionArr?.map((para, index) => (
        <Typography
          paragraph
          key={index}
          sx={{ textAlign: { xs: "left", sm: "justify" } }}
        >
          {para}
        </Typography>
      ))}
      <Button
        sx={{
          color: "#673d61",
          border: "1px solid #673d61",
          p: "10px 15px",
          ":hover": {
            color: "#fff",
            backgroundColor: "#873785",
            transition: "all 0.4s ease-in-out",
          },
        }}
      >
        book free reading
      </Button>
    </Box>
  );
};

export default SingleCoachDetail;
