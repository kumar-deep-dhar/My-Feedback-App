import React, { useState, useContext} from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CheckCircleOutline } from "@mui/icons-material";
import { FeedbackContext } from "./FeedbackContext";
import ThankYouMessage from "./ThankYouMessage";

const GiveSuggestionCard = () => {
  const [feedback, setFeedback] = useState("");
  const [file, setFile] = useState(null);
  const { userData } = useContext(FeedbackContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Submitted feedback:", { feedback, file });

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback("");
      setFile(null);
    }, 2000);
  };

  const inputProps = {
    multiline: true,
    rows: 5,
    fullWidth: true,
    value: feedback,
    onChange: handleChange,
    placeholder: "Write your feedback",
    disabled: isSubmitting,
  };

  return (
    <Card
      sx={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: "10px" }}>
          Give Feedback
        </Typography>
        <TextField {...inputProps} />
        {!isMobile && (
          <IconButton component="label" sx={{ mt: "10px" }}>
            <Typography variant="caption">Attach File</Typography>
            <input type="file" hidden onChange={handleFileChange} />
          </IconButton>
        )}
        {file && (
          <Typography variant="caption" sx={{ color: "#888", mt: "5px" }}>
            Attached file: {file.name}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
        {isSubmitting ? (
          <ThankYouMessage open={true} onClose={() => {}} />
        ) : (
          <CheckCircleOutline color="success" sx={{ mt: "10px" }} />
        )}
      </CardContent>
    </Card>
  );
};

export default GiveSuggestionCard;
