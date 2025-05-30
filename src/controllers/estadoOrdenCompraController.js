// Controlador de EstadoOrdenCompra 
const EstadoOrdenCompra = require('../models/estadoOrdenCompra');

// Crear EstadoOrdenCompra
exports.createEstadoOrdenCompra = async (req, res) => {
  try {
    const estado = await EstadoOrdenCompra.create(req.body);
    res.status(201).json(estado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar EstadoOrdenCompra
exports.updateEstadoOrdenCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await EstadoOrdenCompra.update(req.body, { where: { id_estado: id } });
    if (updated) {
      const estado = await EstadoOrdenCompra.findByPk(id);
      res.json(estado);
    } else {
      res.status(404).json({ error: 'Estado no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todos los estados de orden de compra
exports.getAllEstadosOrdenCompra = async (req, res) => {
  try {
    const estados = await EstadoOrdenCompra.findAll();
    res.json(estados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar estado de orden de compra por ID
exports.getEstadoOrdenCompraById = async (req, res) => {
  try {
    const estado = await EstadoOrdenCompra.findByPk(req.params.id);
    if (estado) res.json(estado);
    else res.status(404).json({ error: 'Estado no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  