const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ArticuloProveedor = sequelize.define('ArticuloProveedor', {
  id_articulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  precio_compra: {
    type: DataTypes.FLOAT,
  },
}, {
  tableName: 'articulo_proveedor',
  timestamps: false,
});

module.exports = ArticuloProveedor;
