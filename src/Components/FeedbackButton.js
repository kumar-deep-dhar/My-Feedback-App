import React, { useState, useContext, useEffect } from "react";
import { Fab, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { ExclamationCircle } from "react-bootstrap-icons";
import { FeedbackContext } from "./FeedbackContext";
import ContactUsCard from "./ContactUsCard";
import GiveSuggestionCard from "./GiveSuggestionCard";
import RateUsCard from "./RateUsCard";
import ShareFeedbackCard from "./ShareFeedbackCard";
import { usePopper } from "react-popper";
import { Link } from "react-router-dom";

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState("bottom");
  const { selectedOption, setSelectedOption, cardOpen } =
    useContext(FeedbackContext);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [popperStyles, setPopperStyles] = useState({});
  const [popperAttributes, setPopperAttributes] = useState({});

  const handleClick = () => {
    setIsOpen(!isOpen);
    setAnchorPosition(isOpen ? "bottom" : "right");
  };

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setAnchorPosition("left");
  };

  useEffect(() => {
    if (cardOpen) {
      setIsOpen(false);
      setAnchorPosition("left");
    }
  }, [cardOpen]);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  useEffect(() => {
    setPopperStyles(styles.popper || {});
    setPopperAttributes(attributes.popper || {});
  }, [styles, attributes]);

  const renderContent = () => {
    switch (selectedOption) {
      case "ContactUs":
        return <ContactUsCard />;
      case "GiveSuggestion":
        return <GiveSuggestionCard />;
      case "ShareFeedback":
        return <ShareFeedbackCard />;
      case "RateUs":
        return <RateUsCard />;
      default:
        return null;
    }
  };

  return (
    <>
      <Fab
        color={isOpen ? "primary" : "secondary"}
        size="medium"
        variant="extended"
        onClick={handleClick}
        ref={setReferenceElement}
        sx={{ position: "fixed", bottom: "32px", right: "32px" }}
      >
        <ExclamationCircle size={20} style={{ marginRight: "10px" }} />
        {isOpen ? "Close Feedback" : "Give Feedback"}
      </Fab>

      {isOpen && (
        <div
          ref={setPopperElement}
          style={{ ...popperStyles, zIndex: 9999 }}
          {...popperAttributes}
        >
          <List autoFocusItem={isOpen}>
            <ListItem button onClick={() => handleMenuClick("ContactUs")}>
              <Link to="/contact-us">
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("GiveSuggestion")}>
              <Link to="/give-suggestion">
                <ListItemText primary="Give Suggestion" />
              </Link>
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("ShareFeedback")}>
              <Link to="/share-feedback">
                <ListItemText primary="Share Feedback" />
              </Link>
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("RateUs")}>
              <Link to="/rate-us">
                <ListItemText primary="Rate Us" />
              </Link>
            </ListItem>
          </List>
        </div>
      )}

      <Drawer anchor={anchorPosition} open={isOpen} onClose={handleClick}>
        {renderContent()}
      </Drawer>
    </>
  );
};

export default FeedbackButton;
