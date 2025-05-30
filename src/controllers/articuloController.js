// Controlador de Articulo 
const Articulo = require('../models/articulo');

// Crear Articulo
exports.createArticulo = async (req, res) => {
  try {
    const articulo = await Articulo.create(req.body);
    res.status(201).json(articulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar Articulo
exports.updateArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Articulo.update(req.body, { where: { id_articulo: id } });
    if (updated) {
      const articulo = await Articulo.findByPk(id);
      res.json(articulo);
    } else {
      res.status(404).json({ error: 'Articulo no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Baja lógica de Articulo
exports.bajaLogicaArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Articulo.update({ articulo_vigente: false, fecha_baja: new Date() }, { where: { id_articulo: id } });
    if (updated) {
      res.json({ message: 'Articulo dado de baja lógicamente' });
    } else {
      res.status(404).json({ error: 'Articulo no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Consultar todos los artículos
exports.getAllArticulos = async (req, res) => {
  try {
    const articulos = await Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar artículo por ID
exports.getArticuloById = async (req, res) => {
  try {
    const articulo = await Articulo.findByPk(req.params.id);
    if (articulo) res.json(articulo);
    else res.status(404).json({ error: 'Articulo no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar ventas de un artículo
exports.getVentasByArticulo = async (req, res) => {
  try {
    const { VentaDetalle, Venta } = require('../models');
    const detalles = await VentaDetalle.findAll({
      where: { id_articulo: req.params.id },
      include: [Venta]
    });
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar proveedores de un artículo
exports.getProveedoresByArticulo = async (req, res) => {
  try {
    const { Proveedor } = require('../models');
    const articulo = await Articulo.findByPk(req.params.id);
    if (!articulo) return res.status(404).json({ error: 'Articulo no encontrado' });
    const proveedores = await articulo.getProveedors();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 