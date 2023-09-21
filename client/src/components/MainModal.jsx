import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const MainModal = ({ open, handleClose, blur, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: "blur('100px')",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "240px", md: "400px" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 5,
          borderRadius: "5px",
          border: "none",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: "2px",
            right: "2px",
          }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ fontSize: "18px", color: "#671d63" }} />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};
