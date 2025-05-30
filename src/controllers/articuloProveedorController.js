// Controlador de ArticuloProveedor 
const ArticuloProveedor = require('../models/articuloProveedor');

// Crear ArticuloProveedor
exports.createArticuloProveedor = async (req, res) => {
  try {
    const ap = await ArticuloProveedor.create(req.body);
    res.status(201).json(ap);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar ArticuloProveedor
exports.updateArticuloProveedor = async (req, res) => {
  try {
    const { id_articulo, id_proveedor } = req.params;
    const [updated] = await ArticuloProveedor.update(req.body, { where: { id_articulo, id_proveedor } });
    if (updated) {
      const ap = await ArticuloProveedor.findOne({ where: { id_articulo, id_proveedor } });
      res.json(ap);
    } else {
      res.status(404).json({ error: 'ArticuloProveedor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todos los ArticuloProveedor
exports.getAllArticuloProveedores = async (req, res) => {
  try {
    const aps = await ArticuloProveedor.findAll();
    res.json(aps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar ArticuloProveedor por ID compuesto
exports.getArticuloProveedorById = async (req, res) => {
  try {
    const { id_articulo, id_proveedor } = req.params;
    const ap = await ArticuloProveedor.findOne({ where: { id_articulo, id_proveedor } });
    if (ap) res.json(ap);
    else res.status(404).json({ error: 'ArticuloProveedor no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 