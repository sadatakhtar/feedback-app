import React from "react";
import FeedbackItem from '../FeedbackComp/FeedbackItem';

const FeedbackList = ({ feedback }) => {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback found</p>
  }
  return <div className="feedback-list">
    {feedback.map((item, index) => {
      return <FeedbackItem key={item.id} item={item}/>
    })}
  </div>;
};

export default FeedbackList;
