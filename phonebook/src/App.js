import React, { useEffect, useState } from "react";
import personService from "./services/persons";

import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("New name ...");
  const [newNumber, setNewNumber] = useState("New number ...");
  const [filterNames, setFilterNames] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const checkName = (person) => person.name === personObject.name;
    if (!persons.some(checkName)) {
      personService.create(personObject).then((personObject) => {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
        setNotification(`Added ${personObject.name}`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      });
    } else {
      const oldPerson = persons.find(checkName);
      if (window.confirm(`${oldPerson.name} exists`)) {
        personService
          .edit(oldPerson.id, personObject)
          .then((editedPersonData) => {
            setPersons(
              persons.map((person) =>
                person.id !== oldPerson.id ? person : editedPersonData
              )
            );
          });
      }
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete for real?")) {
      personService.remove(id).then((response) => {
        const remainedPersons = persons.filter((person) => person.id !== id);
        setPersons(remainedPersons);
      });
    }
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
      <Notification message={notification} />

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
      {personToShow.map((person) => (
        <Person
          id={person.id}
          name={person.name}
          number={person.number}
          handleDelete={() => handleDelete(person.id)}
        />
      ))}
    </div>
  );
};

export default App;
