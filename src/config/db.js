const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('imanaging_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Opcional: desactiva logs de SQL en consola
});

module.exports = sequelize; 