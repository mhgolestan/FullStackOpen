import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.reduce((s, part) => s + part.exercises, 0)}
    </p>
  );
};

export default Total;
