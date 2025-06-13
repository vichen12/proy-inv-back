const sequelize = require('../config/db');

const Articulo = require('./articulo');
const Proveedor = require('./proveedor');
const ArticuloProveedor = require('./articuloProveedor');
const Venta = require('./venta');
const VentaDetalle = require('./ventaDetalle');
const OrdenCompra = require('./ordenCompra');
const OrdenCompraDetalle = require('./ordenCompraDetalle');
const EstadoOrdenCompra = require('./estadoOrdenCompra');

// Relaciones N:M entre Articulo y Proveedor
Articulo.belongsToMany(Proveedor, {
  through: ArticuloProveedor,
  foreignKey: 'id_articulo',
  otherKey: 'id_proveedor',
});
Proveedor.belongsToMany(Articulo, {
  through: ArticuloProveedor,
  foreignKey: 'id_proveedor',
  otherKey: 'id_articulo',
});

ArticuloProveedor.belongsTo(Articulo, { foreignKey: 'id_articulo' });
ArticuloProveedor.belongsTo(Proveedor, { foreignKey: 'id_proveedor' });
Articulo.hasMany(ArticuloProveedor, { foreignKey: 'id_articulo' });
Proveedor.hasMany(ArticuloProveedor, { foreignKey: 'id_proveedor' });

Venta.hasMany(VentaDetalle, { foreignKey: 'id_venta' });
VentaDetalle.belongsTo(Venta, { foreignKey: 'id_venta' });

Articulo.hasMany(VentaDetalle, { foreignKey: 'id_articulo' });
VentaDetalle.belongsTo(Articulo, { foreignKey: 'id_articulo' });

OrdenCompra.hasMany(OrdenCompraDetalle, { foreignKey: 'id_orden_compra' });
OrdenCompraDetalle.belongsTo(OrdenCompra, { foreignKey: 'id_orden_compra' });

// Relación especial para OrdenCompraDetalle con ArticuloProveedor
ArticuloProveedor.hasMany(OrdenCompraDetalle, {
  foreignKey: 'id_articulo',
  sourceKey: 'id_articulo',
  constraints: false,
});
ArticuloProveedor.hasMany(OrdenCompraDetalle, {
  foreignKey: 'id_proveedor',
  sourceKey: 'id_proveedor',
  constraints: false,
});

OrdenCompraDetalle.belongsTo(ArticuloProveedor, {
  foreignKey: 'id_articulo',
  targetKey: 'id_articulo',
  constraints: false,
});
OrdenCompraDetalle.belongsTo(ArticuloProveedor, {
  foreignKey: 'id_proveedor',
  targetKey: 'id_proveedor',
  constraints: false,
});

EstadoOrdenCompra.hasMany(OrdenCompra, { foreignKey: 'id_estado' });
OrdenCompra.belongsTo(EstadoOrdenCompra, { foreignKey: 'id_estado' });

module.exports = {
  sequelize,
  Articulo,
  Proveedor,
  ArticuloProveedor,
  Venta,
  VentaDetalle,
  OrdenCompra,
  OrdenCompraDetalle,
  EstadoOrdenCompra,
};
