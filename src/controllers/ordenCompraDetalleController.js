// Controlador de OrdenCompraDetalle 
const OrdenCompraDetalle = require('../models/ordenCompraDetalle');

// Crear OrdenCompraDetalle
exports.createOrdenCompraDetalle = async (req, res) => {
  try {
    const detalle = await OrdenCompraDetalle.create(req.body);
    res.status(201).json(detalle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar OrdenCompraDetalle
exports.updateOrdenCompraDetalle = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await OrdenCompraDetalle.update(req.body, { where: { nroDetalle: id } });
    if (updated) {
      const detalle = await OrdenCompraDetalle.findByPk(id);
      res.json(detalle);
    } else {
      res.status(404).json({ error: 'Detalle no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todos los detalles de orden de compra
exports.getAllOrdenCompraDetalles = async (req, res) => {
  try {
    const detalles = await OrdenCompraDetalle.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar detalle de orden de compra por ID
exports.getOrdenCompraDetalleById = async (req, res) => {
  try {
    const detalle = await OrdenCompraDetalle.findByPk(req.params.id);
    if (detalle) res.json(detalle);
    else res.status(404).json({ error: 'Detalle no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 