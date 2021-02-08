import React from "react";
import Person from "./Person";

const Persons = ({ personToShow }) => {
  return (
    <div>
      <ul>
        {personToShow.map((person) => (
          <li key={person.id}>
            <Person name={person.name} number={person.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
