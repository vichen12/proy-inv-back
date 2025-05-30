// Controlador de Venta 
const Venta = require('../models/venta');

// Crear Venta
exports.createVenta = async (req, res) => {
  try {
    const venta = await Venta.create(req.body);
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar Venta
exports.updateVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Venta.update(req.body, { where: { id_venta: id } });
    if (updated) {
      const venta = await Venta.findByPk(id);
      res.json(venta);
    } else {
      res.status(404).json({ error: 'Venta no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todas las ventas
exports.getAllVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar venta por ID
exports.getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id);
    if (venta) res.json(venta);
    else res.status(404).json({ error: 'Venta no encontrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar detalles de una venta
exports.getDetallesByVenta = async (req, res) => {
  try {
    const { VentaDetalle } = require('../models');
    const detalles = await VentaDetalle.findAll({ where: { id_venta: req.params.id } });
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 