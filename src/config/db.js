const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('imanaging_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // para no mostrar logs de SQL, opcional
});

module.exports = sequelize;
