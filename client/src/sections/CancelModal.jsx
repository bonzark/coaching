import { Box, Typography } from "@mui/material";
import { MainModal } from "../components/MainModal";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { PrimaryBtn } from "../components/PrimaryBtn";

const CancelModal = ({ cancelMessage, open, onClose }) => {
  return (
    <MainModal open={open} handleClose={onClose}>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          fontSize: { xs: "1.2rem", md: "2rem" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "6px", md: "12px" },
          borderBottom: "1px solid #ccc",
          paddingBottom: "16px",
          marginBottom: "16px",
        }}
      >
        <Box
          sx={{
            perspective: "500px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              transition: "transform 1s",
              transformStyle: "preserve-3d",
              "@keyframes flip": {
                "0%": {
                  transform: "rotateY( 0deg ) scale(1)",
                },
                "50%": {
                  transform: "rotateY( 540deg ) scale(1.2)",
                },
                "100%": {
                  transform: "rotateY( 1080deg ) scale(1)",
                },
              },
              animation: open && "flip 2s ease 250ms 1",
            }}
          >
            <CancelOutlinedIcon
              sx={{
                fontSize: { xs: "1.5rem", md: "3rem" },
                color: "#f00",
                backgroundColor: "#ff000022",
                borderRadius: "50px",
              }}
            />
          </Box>
        </Box>
        <div>Cancalled</div>
      </Typography>
      <Typography
        paragraph
        sx={{
          textAlign: { xs: "left", sm: "justify" },
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        {cancelMessage}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "1.5rem",
        }}
      >
        <PrimaryBtn onClick={onClose}>Okay</PrimaryBtn>
      </Box>
    </MainModal>
  );
};

export default CancelModal;
