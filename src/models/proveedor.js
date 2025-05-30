const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cuit: { type: DataTypes.BIGINT, unique: true, allowNull: false },
  razon_social: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.BIGINT },
  proveedor_vigente: { type: DataTypes.BOOLEAN, defaultValue: true },
  fecha_baja: { type: DataTypes.DATE }
}, {
  tableName: 'proveedor',
  timestamps: false,
});

module.exports = Proveedor; 