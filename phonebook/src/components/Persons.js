import React from "react";

const Persons = ({ personToShow }) => {
  return (
    <div>
      <ul>
        {personToShow.map((person) => (
          <li key={person.id}>
            <p>
              {person.name} {person.number} <button>delete</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
