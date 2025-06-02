const { Proveedor } = require('../models');

exports.createProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const mensajes = error.errors.map(e => e.message);
      return res.status(400).json({ error: 'Validation error', mensajes });
    }
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Error de unicidad', detalles: error.errors.map(e => e.message) });
    }
    res.status(400).json({ error: error.message });
  }
};

exports.updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    if ('id_proveedor' in req.body) delete req.body.id_proveedor;

    const [updated] = await Proveedor.update(req.body, { where: { id_proveedor: id } });
    if (updated) {
      const proveedor = await Proveedor.findByPk(id);
      res.json(proveedor);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const mensajes = error.errors.map(e => e.message);
      return res.status(400).json({ error: 'Validation error', mensajes });
    }
    res.status(400).json({ error: error.message });
  }
};

exports.bajaLogicaProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Proveedor.update(
      { proveedor_vigente: false, fecha_baja: new Date() },
      { where: { id_proveedor: id } }
    );
    if (updated) {
      res.json({ message: 'Proveedor dado de baja lógicamente' });
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) res.json(proveedor);
    else res.status(404).json({ error: 'Proveedor no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArticulosByProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });

    const articulos = await proveedor.getArticulos();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArticulosByProveedorCuit = async (req, res) => {
  try {
    const cuit = req.params.cuit;
    const proveedor = await Proveedor.findOne({ where: { cuit } });
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado por CUIT' });

    const articulos = await proveedor.getArticulos();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
