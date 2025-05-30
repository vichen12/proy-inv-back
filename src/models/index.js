// Index de modelos 
const Articulo = require('./articulo');
const Proveedor = require('./proveedor');
const ArticuloProveedor = require('./articuloProveedor');
const Venta = require('./venta');
const VentaDetalle = require('./ventaDetalle');
const OrdenCompra = require('./ordenCompra');
const OrdenCompraDetalle = require('./ordenCompraDetalle');
const EstadoOrdenCompra = require('./estadoOrdenCompra');

// Articulo N:M Proveedor (a través de ArticuloProveedor)
Articulo.belongsToMany(Proveedor, {
  through: ArticuloProveedor,
  foreignKey: 'id_articulo',
  otherKey: 'id_proveedor'
});
Proveedor.belongsToMany(Articulo, {
  through: ArticuloProveedor,
  foreignKey: 'id_proveedor',
  otherKey: 'id_articulo'
});
ArticuloProveedor.belongsTo(Articulo, { foreignKey: 'id_articulo' });
ArticuloProveedor.belongsTo(Proveedor, { foreignKey: 'id_proveedor' });
Articulo.hasMany(ArticuloProveedor, { foreignKey: 'id_articulo' });
Proveedor.hasMany(ArticuloProveedor, { foreignKey: 'id_proveedor' });

// Venta 1:N VentaDetalle
Venta.hasMany(VentaDetalle, { foreignKey: 'id_venta' });
VentaDetalle.belongsTo(Venta, { foreignKey: 'id_venta' });

// Articulo 1:N VentaDetalle
Articulo.hasMany(VentaDetalle, { foreignKey: 'id_articulo' });
VentaDetalle.belongsTo(Articulo, { foreignKey: 'id_articulo' });

// OrdenCompra 1:N OrdenCompraDetalle
OrdenCompra.hasMany(OrdenCompraDetalle, { foreignKey: 'id_orden_compra' });
OrdenCompraDetalle.belongsTo(OrdenCompra, { foreignKey: 'id_orden_compra' });

// ArticuloProveedor 1:N OrdenCompraDetalle (por clave compuesta)
ArticuloProveedor.hasMany(OrdenCompraDetalle, {
  foreignKey: ['id_articulo', 'id_proveedor'],
  sourceKey: ['id_articulo', 'id_proveedor']
});
OrdenCompraDetalle.belongsTo(ArticuloProveedor, {
  foreignKey: ['id_articulo', 'id_proveedor'],
  targetKey: ['id_articulo', 'id_proveedor']
});

// OrdenCompra N:1 EstadoOrdenCompra
EstadoOrdenCompra.hasMany(OrdenCompra, { foreignKey: 'id_estado' });
OrdenCompra.belongsTo(EstadoOrdenCompra, { foreignKey: 'id_estado' });

module.exports = {
  Articulo,
  Proveedor,
  ArticuloProveedor,
  Venta,
  VentaDetalle,
  OrdenCompra,
  OrdenCompraDetalle,
  EstadoOrdenCompra
}; 