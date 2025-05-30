const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrdenCompra = sequelize.define('OrdenCompra', {
  id_orden_compra: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha_orden_compra: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  monto_total: { type: DataTypes.FLOAT, defaultValue: 0.0 },
  id_estado: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'orden_compra',
  timestamps: false,
});

module.exports = OrdenCompra; 