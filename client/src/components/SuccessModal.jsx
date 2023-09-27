import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessModal = ({ open, handleClose, successMessage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (open) {
      let timer = setTimeout(() => {
        handleClose();
      }, 3000);

      // Update progress every 30ms (adjust the interval as needed)
      const interval = 30;
      const step = 100 / (3000 / interval);
      let currentProgress = 0;

      const updateProgress = () => {
        currentProgress += step;
        setProgress(currentProgress);
        if (currentProgress < 100) {
          setTimeout(updateProgress, interval);
        }
      };

      // Start updating progress
      updateProgress();

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [open, handleClose]);

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
          variant={progress === 100 ? "determinate" : "indeterminate"}
          value={progress}
          sx={{ color: "#673d61", mt: "1rem", mb: "1px" }}
        />
      </Box>
    </Dialog>
  );
};

export default SuccessModal;
