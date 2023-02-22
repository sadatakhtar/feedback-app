import React, {useState} from 'react'

const FeedbackItem = () => {
    const [rating, setRating] = useState(7);
    const [feedback, setFeedback] = useState('This is an example of a feedback');
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">
           {feedback}
        </div>
    </div>
  )
}

export default FeedbackItem