const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cuit: {
    type: DataTypes.STRING(11),  // guardamos CUIT como string para evitar problemas con números grandes
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [11, 11],
        msg: 'El CUIT debe tener exactamente 11 caracteres',
      },
      isNumeric: {
        msg: 'El CUIT debe contener solo números',
      },
    },
  },
  razon_social: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(20),  // string para permitir números con ceros a la izquierda o formatos especiales
    allowNull: true,
    validate: {
      isNumeric: {
        msg: 'El teléfono debe contener solo números',
      },
    },
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
