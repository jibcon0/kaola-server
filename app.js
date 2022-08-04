const express = require("express");
const { v4: uuid } = require("uuid");
const app = express();
const sequelize  = require('./utility /database.js');
const Todos = require("./model/todos.js");

const PORT = 4001;

  sequelize.authenticate() .then (() => (
    sequelize.sync({ force: true})
    .then( 
      (result) => {
        Todos.create ({id: 1, title: "Take out trash", completed: true}),
        Todos.create ({id: 2, title: "Cook dinner", completed: false}),
        Todos.create ({id: 3, title: "Go on a date", completed: true}),
        console.log(result);
    }) 
    .then( 
      (todo) =>{
      console.log("my todolist created:" +todo);
    
    })
  )) 
  .catch ( 
      (error) => {
    console.error('Unable to connect to the database:', error);
  });

app.listen(PORT, () => console.log(`listening on port ${PORT}`));


