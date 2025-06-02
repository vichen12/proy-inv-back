const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cuit: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  razon_social: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  proveedor_vigente: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  fecha_baja: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'proveedor',
  timestamps: false,
});

module.exports = Proveedor;
