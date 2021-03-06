import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}:</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistics = ({ good, bad, neutral, all }) => {
  const average = isNaN((good - bad) / all)
    ? 0
    : ((good - bad) / all).toFixed(2);

  const positive = isNaN((good / all) * 100)
    ? 0
    : ((good / all) * 100).toFixed(2);

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No input</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="Good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={positive} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleBadClick} text="Neutral" />
        <Button onClick={handleNeutral} text="Bad" />
      </div>
      <div>
        <Statistics good={good} bad={bad} neutral={neutral} all={all} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
