const Sequelize = require("sequelize");
//const Products = require('../model/products')(sequelize);
//const Orders = require('../model/orders.js')(sequelize);
const sequelize = new Sequelize('kaola_server', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  
  });
  
  sequelize.authenticate() 
  .then (() => {
    console.log('you are now connected...');
  }) 
  .catch ( 
      (error) => {
    console.error('Unable to connect to the database:', error);
  });

 sequelize.sync({ force: false})
    .then( 
      () => {
      console.log('you have just been Reconnected...');
    })



module.exports = sequelize;
