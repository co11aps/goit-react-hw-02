import {
  AiTwotoneSmile,
  AiTwotoneMeh,
  AiTwotoneFrown,
  AiTwotoneCloseCircle,
} from "react-icons/ai";
import css from "./Options.module.css";

const Options = ({ updateFeedback, setFeedbacks, totalFeedback }) => {
  const handleResetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css["buttons-block"]}>
      <button
        className={css["options-button"]}
        onClick={() => updateFeedback("good")}
      >
        Good
        <AiTwotoneSmile />
      </button>
      <button
        className={css["options-button"]}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
        <AiTwotoneMeh />
      </button>
      <button
        className={css["options-button"]}
        onClick={() => updateFeedback("bad")}
      >
        Bad
        <AiTwotoneFrown />
      </button>
      {totalFeedback > 0 && (
        <button
          className={css["options-button"]}
          onClick={handleResetFeedbacks}
        >
          Reset
          <AiTwotoneCloseCircle />
        </button>
      )}
    </div>
  );
};

export default Options;
