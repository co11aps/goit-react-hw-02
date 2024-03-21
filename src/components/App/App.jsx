import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    const key = feedbackType;
    setFeedbacks({
      ...feedbacks,
      key: feedbacks.key + 1,
    });
    console.log(feedbacks);
  };

  // const [clicks, setClicks] = useState(() => {
  //   const savedClicks = window.localStorage.getItem("saved-clicks");
  //   if (savedClicks !== null) {
  //     return savedClicks;
  //   }
  //   return 0;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-clicks", clicks);
  // }, [clicks]);

  return (
    <div>
      <Description />
      <Options onUpdate={updateFeedback} />
      <Feedback />
      {/* <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button> */}
    </div>
  );
};

export default App;
