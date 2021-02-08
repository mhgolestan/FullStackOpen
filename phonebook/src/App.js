import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "123",
      id: 1,
    },
    {
      name: "Alex Fredrik",
      number: "12123",
      id: 2,
    },
    {
      name: "Mohammad",
      number: "123",
      id: 3,
    },
    {
      name: "Ali",
      number: "12123",
      id: 4,
    },
  ]);
  const [newName, setNewName] = useState("New name ...");
  const [newNumber, setNewNumber] = useState("New number ...");
  const [filterNames, setFilterNames] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const checkName = (person) => person.name === personObject.name;
    if (!persons.some(checkName)) {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    } else {
      window.alert(`${personObject.name} exists`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const personToShow =
    filterNames === ""
      ? persons
      : persons.filter((person) => person.name.includes(filterNames));

  const handleFilterNames = (event) => {
    setFilterNames(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterNames={filterNames} handleFilterNames={handleFilterNames} />

      <h2>Add new contact</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personToShow={personToShow} />
    </div>
  );
};

export default App;
