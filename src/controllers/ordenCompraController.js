// Controlador de OrdenCompra 
const OrdenCompra = require('../models/ordenCompra');

// Crear OrdenCompra
exports.createOrdenCompra = async (req, res) => {
  try {
    const orden = await OrdenCompra.create(req.body);
    res.status(201).json(orden);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar OrdenCompra
exports.updateOrdenCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await OrdenCompra.update(req.body, { where: { id_orden_compra: id } });
    if (updated) {
      const orden = await OrdenCompra.findByPk(id);
      res.json(orden);
    } else {
      res.status(404).json({ error: 'Orden de compra no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todas las ordenes de compra
exports.getAllOrdenesCompra = async (req, res) => {
  try {
    const ordenes = await OrdenCompra.findAll();
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar orden de compra por ID
exports.getOrdenCompraById = async (req, res) => {
  try {
    const orden = await OrdenCompra.findByPk(req.params.id);
    if (orden) res.json(orden);
    else res.status(404).json({ error: 'Orden de compra no encontrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar detalles de una orden de compra
exports.getDetallesByOrdenCompra = async (req, res) => {
  try {
    const { OrdenCompraDetalle } = require('../models');
    const detalles = await OrdenCompraDetalle.findAll({ where: { id_orden_compra: req.params.id } });
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 