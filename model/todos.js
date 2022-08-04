const Sequelize = require("sequelize");

const sequelize = require('../utility /database.js');

const Todos = sequelize.define("todo", { 
    id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: true,
    primaryKey: true
},
title: {
    type: Sequelize.TEXT,
    allowNull: false 
},
completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false 
},
});
  
module.exports = Todos;


  /*
  const Todo = new todos
  
  //main work
  
  //1. create  todo
  
  const addTodo = async (req, res) =>{
  
      let info = {
          title: req.body.title,
          completed: req.body.completed ? req.body.completed : false
      }
  
      const todo = await Todo.create(info)
      res.status(200).send(todo)
      console.log(todo);
  }
  
  //2. Get all product
  const getAlltodods = async (req, res) => {
  
      let products = await Todos.findAll({})
      res.status(200).send(todo)
  }
  
  // 3. Get single todo
  const getOneTodo = async(req, res) => {
      let id = req.params.id
      let todos = await Todo.findOne({ where: {id: id}})
      res.status(200).send(todo)
  }
  
  // 4. update Todo
  const updateTodo = async(req, res) => {
  
      let id = req.params.id
      let todos = await Todo.update(req.body, { where: {id: id}})
      res.status(200).send(todo)
  }
  
  // 5. delete Todo
  const deleteTodo = async(req, res) => {
      
      let id = req.params.id
      await todo.destory({ where: {id: id}})
      res.status(200).send('todo is deleted !')
  }
  
  
  
/*const todos = sequelize.define("/todos", {
  title: {
      type: DataTypes.TEXT,
      allowNull: false 
  },
  completed: {
      type: DataTypes.BOOLEAN
  }
})




const myMiddleware = (req, res, next) => {
  if (!req.headers.token) {
    res.json({ message: "No token provided" });
  }

  if (req.headers.token !== "valarmoghulis") {
    res.json({ message: "Invalid token provided" });
  }

  next();
};

const todoList = [
  { id: 1, title: "Take out trash", completed: false },
  { id: 2, title: "Cook dinner", completed: false },
  { id: 3, title: "Go on a date", completed: true },
];

app.get("/", (req, res) => {
  const { s } = req.query;
  res.send("Hello world");
});

app.get("/todos", myMiddleware, (req, res) => {
  res.json(todoList);
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: uuid(),
    title,
    completed: false,
  };
  todoList.unshift(newTodo);
  res.send("okay");
});
 

app.delete("/todos/:id", (req, res) => {
   const id=req.params.id
  
   const filterTodos = todoList.filter(todo => todo.id != id);
   
   res.send(filterTodos);   

})
  }); */