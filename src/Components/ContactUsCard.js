import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
//import { useMediaQuery } from "react-responsive";
import { FeedbackContext } from "./FeedbackContext";

const ContactUsCard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [issue, setIssue] = useState("");
  const { userData } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
   // setIsThankYouOpen(true);
    console.log("Form submitted:", { fullName, email, contactNumber, issue });
    setFullName("");
    setEmail("");
    setContactNumber("");
    setIssue("");
  };

 // const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Card
      sx={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px" }}
    >
      <CardContent>
        <Grid container spacing={2}>
          {!userData.isLoggedIn && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Describe your issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Typography variant="caption" sx={{ color: "#888", mt: "10px" }}>
          We take user feedback seriously and will respond to your inquiry as
          soon as possible.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactUsCard;
