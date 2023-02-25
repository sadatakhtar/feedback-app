import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import Header from "./components/Header/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="Feedback UI" />
      <div className="App">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
