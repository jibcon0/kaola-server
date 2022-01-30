const express = require("express");
const { v4: uuid } = require("uuid");
const app = express();

const PORT = 4001;

app.use(express.json());

const myMiddleware = (req, res, next) => {
  if (!req.headers.token) {
    res.json({ message: "No token provided" });
  }

  if (req.headers.token !== "valarmoghulis") {
    res.json({ message: "Invalid token provided" });
  }

  next();
};

const todo = [
  { id: uuid(), title: "Take out trash", completed: false },
  { id: uuid(), title: "Cook dinner", completed: false },
  { id: uuid(), title: "Go on a date", completed: true },
];

app.get("/", (req, res) => {
  const { s } = req.query;
  res.send("Hello world");
});

app.get("/todos", myMiddleware, (req, res) => {
  res.json(todo);
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: uuid(),
    title,
    completed: false,
  };
  todo.unshift(newTodo);
  res.send("okay");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
