const { request, response } = require("express");
const express = require("express");
const app = express();

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log("I can hear you");
});
