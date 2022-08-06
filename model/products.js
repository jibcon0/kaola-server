const Sequelize = require("sequelize");
const sequelize = require("../utility /database.js");

const Products = sequelize.define("product", { 
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: true,
        primaryKey: true
    },
    title: {
    type: Sequelize.STRING,
    allowNull: false
    },
    price: {
    type: Sequelize.INTEGER,
    allowNull: false 
    },
    description: {
    type: Sequelize.TEXT,
    allowNull: false 
    }
})

module.exports = Products;
  
