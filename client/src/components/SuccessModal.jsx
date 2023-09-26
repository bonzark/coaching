import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessModal = ({ open, handleClose, successMessage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;

    if (open) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            handleClose();
            // navigate("/");
          } else {
            return prevProgress + 10;
          }
        });
      }, 300); // Adjust the interval as needed
    }

    return () => {
      clearInterval(timer);
    };
  }, [open, handleClose]);

  useEffect(() => {
    if (!open) {
      setProgress(0);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <CheckCircleIcon
          sx={{ fill: "limegreen", width: "40px", height: "40px" }}
        />
        <Typography>Payment Done SuccessFully </Typography>
      </DialogTitle>
      <DialogContent sx={{ padding: "10px 25px" }}>
        {successMessage && (
          <DialogContentText>{successMessage}</DialogContentText>
        )}
        <LinearProgress
          value={progress}
          variant="determinate"
          sx={{ color: "#673d61", mt: "1rem" }}
        />
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
    </Dialog>
  );
};

export default SuccessModal;
