import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  Rating,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { FeedbackContext } from "./FeedbackContext";

const RateUsCard = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState("");
  const { userData } = useContext(FeedbackContext);

  const handleSubmit = () => {
    console.log("Submitted rating:", rating, "Feedback:", feedback); 

    // Reset form fields after submission
    setRating(null);
    setFeedback("");
  };

  return (
    <Card
      sx={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: "10px" }}>
          Rate Your Experience
        </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
          emptyIcon={<Star sx={{ color: "#bbb" }} />}
          fullIcon={<Star sx={{ color: "gold" }} />}
        />
        <TextField
          fullWidth
          multiline
          label="Leave your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          sx={{ mt: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          disabled={!rating}
        >
          Submit Rating
        </Button>
        <Typography variant="caption" sx={{ color: "#888", mt: "10px" }}>
          Your feedback helps us improve!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RateUsCard;
