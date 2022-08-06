const Sequelize = require("sequelize");
const sequelize = require("../utility /database.js");

    const Orders = sequelize.define("order", { 
        rating: {
            type: Sequelize.INTEGER,
            autoincrement: true,
            allowNull: false,
        },
        total: {
            type: Sequelize.FLOAT,
            allowNull: false 
        }
      })  
    
    module.exports = Orders;
      
  
  