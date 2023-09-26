import React, { useState, useEffect } from "react";
import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  LinearProgress,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessModal = ({ open, handleClose, successMessage }) => {
  const [progress, setProgress] = useState(0);
  if (open) {
    setTimeout(() => {
      handleClose();
    }, 3000);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "450px",
          borderRadius: "15px",
        }}
      >
        <DialogTitle>
          <CheckCircleIcon
            sx={{ fill: "limegreen", width: "40px", height: "40px" }}
          />
          <Typography sx={{ fontSize: { xs: "1.2rem", md: "2rem" } }}>
            Payment Done Successfully
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: "10px 25px" }}>
          <DialogContentText sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
            {successMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "10px 25px" }}>
          <Button
            sx={{
              color: "#673d61",
              mt: "1rem",
              border: "1px solid #673d61",
              padding: "5px 25px",
            }}
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ color: "#673d61", mt: "1rem", mb: "1px" }}
        />
      </Box>
    </Dialog>
  );
};

export default SuccessModal;
