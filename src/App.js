import "./App.css";
import FeedbackItem from "./components/FeedbackComp/FeedbackItem";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Header text="Feedback UI" />
      <div className="App">
      <FeedbackItem />
    </div>
    </>
  
  );
}

export default App;
