// Controlador de VentaDetalle 
const VentaDetalle = require('../models/ventaDetalle');

// Crear VentaDetalle
exports.createVentaDetalle = async (req, res) => {
  try {
    const detalle = await VentaDetalle.create(req.body);
    res.status(201).json(detalle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar VentaDetalle
exports.updateVentaDetalle = async (req, res) => {
  try {
    const { id_venta, id_detalle } = req.params;
    const [updated] = await VentaDetalle.update(req.body, { where: { id_venta, id_detalle } });
    if (updated) {
      const detalle = await VentaDetalle.findOne({ where: { id_venta, id_detalle } });
      res.json(detalle);
    } else {
      res.status(404).json({ error: 'Detalle no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todos los detalles de venta
exports.getAllVentaDetalles = async (req, res) => {
  try {
    const detalles = await VentaDetalle.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar detalle de venta por ID compuesto
exports.getVentaDetalleById = async (req, res) => {
  try {
    const { id_venta, id_detalle } = req.params;
    const detalle = await VentaDetalle.findOne({ where: { id_venta, id_detalle } });
    if (detalle) res.json(detalle);
    else res.status(404).json({ error: 'Detalle no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 