const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ArticuloProveedor = sequelize.define('ArticuloProveedor', {
  id_articulo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'articulo',
      key: 'id_articulo',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'proveedor',
      key: 'id_proveedor',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  costo_pedido: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  modelo_inventario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  proveedor_predeterminado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  demora_entrega: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  precio_unitario: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
}, {
  tableName: 'articulo_proveedor',
  timestamps: false,
});

module.exports = ArticuloProveedor;
