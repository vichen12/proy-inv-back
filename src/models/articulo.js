const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Articulo = sequelize.define('Articulo', {
  id_articulo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  demanda: { type: DataTypes.INTEGER, defaultValue: 0 },
  costo_almacenamiento: { type: DataTypes.FLOAT, defaultValue: 0.0 },
  lote_optimo: { type: DataTypes.INTEGER, defaultValue: 1 },
  punto_pedido: { type: DataTypes.INTEGER, defaultValue: 0 },
  stock_seguridad: { type: DataTypes.INTEGER, defaultValue: 0 },
  inventario_maximo: { type: DataTypes.INTEGER, defaultValue: 0 },
  costo_compra: { type: DataTypes.FLOAT, defaultValue: 0.0 },
  articulo_vigente: { type: DataTypes.BOOLEAN, defaultValue: true },
  fecha_baja: { type: DataTypes.DATE }
}, {
  tableName: 'articulo',
  timestamps: false,
});

module.exports = Articulo; 