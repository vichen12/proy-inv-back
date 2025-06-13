const VentaDetalle = require('../models/VentaDetalle');

// Obtener todos los detalles de venta
exports.getAllVentaDetalles = async (req, res) => {
  try {
    const detalles = await VentaDetalle.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener detalle de venta por ID (id_detalle)
exports.getVentaDetalleById = async (req, res) => {
  try {
    const detalle = await VentaDetalle.findByPk(req.params.id);
    if (detalle) res.json(detalle);
    else res.status(404).json({ error: 'Detalle de venta no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear nuevo detalle de venta
exports.createVentaDetalle = async (req, res) => {
  try {
    const nuevoDetalle = await VentaDetalle.create(req.body);
    res.status(201).json(nuevoDetalle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar detalle de venta por ID (id_detalle)
exports.updateVentaDetalle = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await VentaDetalle.update(req.body, { where: { id_detalle: id } });
    if (updated) {
      const detalle = await VentaDetalle.findByPk(id);
      res.json(detalle);
    } else {
      res.status(404).json({ error: 'Detalle de venta no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar detalle de venta por ID (id_detalle)
exports.deleteVentaDetalle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await VentaDetalle.destroy({ where: { id_detalle: id } });
    if (deleted) {
      res.json({ mensaje: `Detalle de venta con ID ${id} eliminado` });
    } else {
      res.status(404).json({ error: 'Detalle de venta no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
