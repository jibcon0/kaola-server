const express = require("express");
const app = express();
const Sequelize  = require('./utility /database.js');
//const Todos = require('./model/todos.js')

const { urlencoded } = require("express");
const router = require("./routes/productsRouter.js");
const PORT = 4001;


app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/api/product', router);

app.get('/', (req, res) =>{

  res.json( {message: 'HELLO WORLD'})
});




 app.listen(PORT, () => console.log(`listening on port ${PORT}`));


