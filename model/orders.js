const Sequelize = require("sequelize");

const sequelize = require("../utility/database.js");

const Orders = sequelize.define("order", {
    
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false 
    },
  });
  
  module.exports = Orders;
  