const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Venta = sequelize.define('Venta', {
  id_venta: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha_venta: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  monto_total_venta: { type: DataTypes.FLOAT, defaultValue: 0.0 }
}, {
  tableName: 'venta',
  timestamps: false,
});

module.exports = Venta; 