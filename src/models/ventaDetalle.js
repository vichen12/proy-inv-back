const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const VentaDetalle = sequelize.define('VentaDetalle', {
  id_detalle: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_venta: { type: DataTypes.INTEGER, allowNull: false },
  id_articulo: { type: DataTypes.INTEGER, allowNull: false },
  cantidad: { type: DataTypes.INTEGER, defaultValue: 1 },
  monto_total_articulo: { type: DataTypes.FLOAT, defaultValue: 0.0 }
}, {
  tableName: 'venta_detalle',
  timestamps: false,
});

module.exports = VentaDetalle;
