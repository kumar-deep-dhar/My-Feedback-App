import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const ThankYouMessage = ({ open, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={handleButtonClick}>
      {" "}
      {/* Dialog conditional on 'open' prop */}
      <DialogTitle>
        <CheckCircleOutline sx={{ color: "green" }} /> Thank You for Your
        Feedback!
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1">
          We appreciate you taking the time to share your feedback. We will use
          it to improve our product and services.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleButtonClick}>
          {isSubmitting ? "Submitting..." : "Close"}{" "}
          {/* Button text based on state */}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ThankYouMessage;
