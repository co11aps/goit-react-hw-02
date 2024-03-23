// import App from "../App/App";

const Options = ({ updateFeedback, setFeedbacks, totalFeedback }) => {
  const handleResetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={handleResetFeedbacks}>Reset</button>
      )}
    </>
  );
};

export default Options;
