// import App from "../App/App";

const Options = ({ onUpdate }) => {
  //   const handleClick = (arg) => {
  //     onUpdate(arg);
  //     console.log(arg);
  //   };
  return (
    <>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </>
  );
};

export default Options;
