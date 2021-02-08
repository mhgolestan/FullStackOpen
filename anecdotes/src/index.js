import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const handleNextClick = () => {
    const nextAnecdote = Math.floor(Math.random() * (anecdotes.length - 1));
    setSelected(nextAnecdote);
  };

  const handleVotes = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    const newMostVoted = Math.max(...newPoints);
    const indexOfNewMostVoted = newPoints.indexOf(newMostVoted);
    setMostVoted(indexOfNewMostVoted);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} Votes</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleNextClick}>Next</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostVoted]}</p>
      <p>Has {points[mostVoted]} votes</p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
