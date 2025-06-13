const Venta = require('../models/Venta');
const VentaDetalle = require('../models/VentaDetalle');
const Articulo = require('../models/Articulo'); // para actualizar stock luego

// Crear Venta con detalles
exports.createVenta = async (req, res) => {
  const t = await Venta.sequelize.transaction();

  try {
    const { detalles, ...ventaData } = req.body;

    // Crear la venta
    const venta = await Venta.create(ventaData, { transaction: t });

    // Si vienen detalles, crearlos
    if (detalles && detalles.length > 0) {
      for (const detalle of detalles) {
        detalle.id_venta = venta.id_venta; // asignar fk

        // Crear detalle
        await VentaDetalle.create(detalle, { transaction: t });

        // Actualizar stock del artículo
        const articulo = await Articulo.findByPk(detalle.id_articulo, { transaction: t });
        if (!articulo) throw new Error('Artículo no encontrado');

        if (articulo.stock < detalle.cantidad) {
          throw new Error(`Stock insuficiente para artículo ${articulo.id_articulo}`);
        }

        articulo.stock -= detalle.cantidad;
        await articulo.save({ transaction: t });
      }
    }

    await t.commit();
    res.status(201).json(venta);

  } catch (error) {
    await t.rollback();
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

// Consultar todas las ventas (con detalles)
exports.getAllVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: { model: VentaDetalle, as: 'detalles' }
    });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar venta por ID (con detalles)
exports.getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id, {
      include: { model: VentaDetalle, as: 'detalles' }
    });
    if (venta) res.json(venta);
    else res.status(404).json({ error: 'Venta no encontrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar detalles de una venta (sin venta)
exports.getDetallesByVenta = async (req, res) => {
  try {
    const detalles = await VentaDetalle.findAll({ where: { id_venta: req.params.id } });
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
