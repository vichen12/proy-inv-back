const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrdenCompraDetalle = sequelize.define('OrdenCompraDetalle', {
  id_detalle: { type: DataTypes.INTEGER, primaryKey: true },
  id_orden_compra: { type: DataTypes.INTEGER, primaryKey: true },
  id_articulo: { type: DataTypes.INTEGER, allowNull: false },
  id_proveedor: { type: DataTypes.INTEGER, allowNull: false },
  cantidad: { type: DataTypes.INTEGER, defaultValue: 1 },
  monto_total_articulo: { type: DataTypes.FLOAT, defaultValue: 0.0 }
}, {
  tableName: 'orden_compra_detalle',
  timestamps: false,
});

module.exports = OrdenCompraDetalle; 