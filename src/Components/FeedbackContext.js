import React, { createContext, useState } from "react";

const FeedbackContext = createContext({
  selectedOption: "",
  setSelectedOption: () => {},
  userData: {},
  setUserData: () => {},
  submitFeedback: () => {},
  cardOpen: false,
  setCardOpen: () => {},
});

const FeedbackProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [userData, setUserData] = useState({});
  const [cardOpen, setCardOpen] = useState(false);

  const submitFeedback = (data) => {
    console.log("Submitted feedback:", data);
  };

  return (
    <FeedbackContext.Provider
      value={{
        selectedOption,
        setSelectedOption,
        userData,
        setUserData,
        submitFeedback,
        cardOpen,
        setCardOpen,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
