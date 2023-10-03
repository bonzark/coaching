import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const MainModal = ({ open, handleClose, blur, children, lg }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: `blur(${blur ? "5px" : "0px"})`,
        "&:focus": {
          outline: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: { xs: 2, sm: 3, md: 4 },
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
