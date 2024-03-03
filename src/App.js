import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeedbackButton from "./Components/FeedbackButton";
import ContactUsCard from "./Components/ContactUsCard";
import GiveSuggestionCard from "./Components/GiveSuggestionCard";
import ShareFeedbackCard from "./Components/ShareFeedbackCard";
import RateUsCard from "./Components/RateUsCard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<ContactUsCard/>} />
        <Route path="/give-suggestion" element={<GiveSuggestionCard/>} />
        <Route path="/share-feedback" element={<ShareFeedbackCard/>} />
        <Route path="/" element={<FeedbackButton/>} />
        <Route path="/rate-us" element={<RateUsCard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
