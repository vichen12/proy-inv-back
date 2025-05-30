const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
  articulo_vigente: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  fecha_baja: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'articulo',
  timestamps: false,
});

module.exports = Articulo;
