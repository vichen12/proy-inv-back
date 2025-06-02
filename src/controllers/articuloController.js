const Articulo = require('../models/articulo');
const ArticuloProveedor = require('../models/articuloProveedor');

exports.createArticulo = async (req, res) => {
  try {
    const {
      descripcion,
      demanda,
      costo_almacenamiento,
      lote_optimo,
      punto_pedido,
      stock_seguridad,
      inventario_maximo,
      costo_compra,
      articulo_vigente,
      fecha_baja,
      proveedor
    } = req.body;

    // Crear el artículo
    const nuevoArticulo = await Articulo.create({
      descripcion,
      demanda,
      costo_almacenamiento,
      lote_optimo,
      punto_pedido,
      stock_seguridad,
      inventario_maximo,
      costo_compra,
      articulo_vigente,
      fecha_baja
    });

    // Crear la relación con el proveedor si existe
    if (proveedor && proveedor.id_proveedor) {
      await ArticuloProveedor.create({
        id_articulo: nuevoArticulo.id_articulo,
        id_proveedor: proveedor.id_proveedor,
        costo_pedido: proveedor.costo_pedido,
        modelo_inventario: proveedor.modelo_inventario,
        proveedor_predeterminado: proveedor.proveedor_predeterminado,
        demora_entrega: proveedor.demora_entrega,
        precio_unitario: proveedor.precio_unitario
      });
    }

    res.status(201).json(nuevoArticulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
