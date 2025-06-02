const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Proveedor = require('./Proveedor');
const ArticuloProveedor = require('./ArticuloProveedor');

const Articulo = sequelize.define('Articulo', {
  id_articulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  demanda: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  costo_almacenamiento: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  lote_optimo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  punto_pedido: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  stock_seguridad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  inventario_maximo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  costo_compra: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  articulo_vigente: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  fecha_baja: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'articulo',
  timestamps: false,
});

// Asociación muchos a muchos con tabla intermedia
Articulo.belongsToMany(Proveedor, {
  through: ArticuloProveedor,
  foreignKey: 'id_articulo',
  otherKey: 'id_proveedor',
  as: 'proveedores',
});

module.exports = Articulo;
