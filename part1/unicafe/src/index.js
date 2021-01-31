import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="Good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button onClick={() => setBad(bad + 1)} text="Bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
