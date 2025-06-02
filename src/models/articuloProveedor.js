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
  costo_pedido: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
  modelo_inventario: {
    type: DataTypes.STRING(100),
  },
  proveedor_predeterminado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  demora_entrega: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  precio_unitario: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
}, {
  tableName: 'articulo_proveedor',
  timestamps: false,
});

module.exports = ArticuloProveedor;
