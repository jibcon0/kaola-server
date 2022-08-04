const { Sequelize} = require("sequelize");

const sequelize = new Sequelize('kaola_server', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  
  });
  
  sequelize.authenticate() .then (() => (
    sequelize.sync({ force: false }).then
    (() => {
        console.log('Connection has been established successfully.');
    })
  )) .catch ( (error) => {
    console.error('Unable to connect to the database:', error);
  });


module.exports = sequelize;
