const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EstadoOrdenCompra = sequelize.define('EstadoOrdenCompra', {
  id_estado: { type: DataTypes.INTEGER, primaryKey: true },
  nombre_estado: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'estado_orden_compra',
  timestamps: false,
});

module.exports = EstadoOrdenCompra; 