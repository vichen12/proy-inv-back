// Controlador de Proveedor 
const Proveedor = require('../models/proveedor');

// Crear Proveedor
exports.createProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar Proveedor
exports.updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Proveedor.update(req.body, { where: { id_proveedor: id } });
    if (updated) {
      const proveedor = await Proveedor.findByPk(id);
      res.json(proveedor);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Baja lógica de Proveedor
exports.bajaLogicaProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Proveedor.update({ proveedor_vigente: false, fecha_baja: new Date() }, { where: { id_proveedor: id } });
    if (updated) {
      res.json({ message: 'Proveedor dado de baja lógicamente' });
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todos los proveedores
exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar proveedor por ID
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) res.json(proveedor);
    else res.status(404).json({ error: 'Proveedor no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar artículos de un proveedor
exports.getArticulosByProveedor = async (req, res) => {
  try {
    const { Articulo } = require('../models');
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
    const articulos = await proveedor.getArticulos();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 