const { request, response } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

let persons = [
  {
    name: "New name ...",
    number: "New number ...",
    id: 1,
  },
  {
    name: "Newas name ...",
    number: "asNew number ...",
    id: 2,
  },
  {
    name: "ali",
    number: "New number ...",
    id: 3,
  },
  {
    name: "sacas",
    number: "New number ...",
    id: 4,
  },
  {
    name: "fvdf",
    number: "",
    id: 5,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>sdjcnskstart</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/info", (request, response) => {
  const receivedDate = new Date();

  response.send(
    `Phonebook has info for ${persons.length} people 
    
    ${receivedDate}`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  if (persons.some((person) => person.name === body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 1000),
  };

  persons = persons.concat(person);
  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("I can hear you");
});
