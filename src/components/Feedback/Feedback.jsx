// import App from "../App/App";

const Feedback = ({ feedbacks, totalFeedback, positive }) => {
  return (
    <div>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
