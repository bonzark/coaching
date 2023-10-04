import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getAuthToken } from "../utils/auth";

export const MainModal = ({ open, handleClose, blur, children, lg }) => {
  const isLoggedIn = getAuthToken();
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
          maxWidth: "968px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: lg ? "400px" : "240px", md: lg ? "800px" : "370px" },
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
