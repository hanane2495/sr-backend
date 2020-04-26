const Sequelize = require('sequelize');
const db = {}

const sequelize = new Sequelize('bdd_lieu','postgres','1234', {
    host : 'localhost',
    dialect: 'postgres',
    operatorsAliases : false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db