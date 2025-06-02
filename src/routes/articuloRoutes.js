const express = require('express');
const router = express.Router();
const db = require('../models');

// Obtener todos los artículos
router.get('/', async (req, res) => {
  try {
    const articulos = await db.Articulo.findAll();
    res.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos:", error);
    res.status(500).json({ error: "Error al obtener artículos" });
  }
});

// Crear un artículo y su relación con proveedores
router.post('/', async (req, res) => {
  const { descripcion, precio_unitario, demanda, lote_optimo, proveedores } = req.body;

  try {
    const nuevoArticulo = await db.Articulo.create({ descripcion, precio_unitario, demanda, lote_optimo });

    if (Array.isArray(proveedores)) {
      for (const proveedor of proveedores) {
        // Aquí uso cuit (asegúrate que sea el campo correcto)
        const proveedorDb = await db.Proveedor.findOne({ where: { cuit: proveedor.cuit } });
        if (!proveedorDb) {
          return res.status(400).json({ error: `Proveedor con cuit ${proveedor.cuit} no existe` });
        }

        await db.ArticuloProveedor.create({
          id_articulo: nuevoArticulo.id_articulo,
          id_proveedor: proveedorDb.id_proveedor,
          costo_pedido: proveedor.costo_pedido,
          modelo_inventario: proveedor.modelo_inventario,
          proveedor_predeterminado: proveedor.proveedor_predeterminado,
          demora_entrega: proveedor.demora_entrega,
          precio_unitario: proveedor.precio_unitario,
        });
      }
    }

    res.status(201).json(nuevoArticulo);
  } catch (error) {
    console.error("Error al crear artículo:", error);
    res.status(500).json({ error: "Error al crear artículo" });
  }
});

// Actualizar un artículo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { descripcion, precio_unitario, demanda, lote_optimo } = req.body;

  try {
    const articulo = await db.Articulo.findByPk(id);
    if (!articulo) return res.status(404).json({ error: "Artículo no encontrado" });

    await articulo.update({ descripcion, precio_unitario, demanda, lote_optimo });
    res.json(articulo);
  } catch (error) {
    console.error("Error al actualizar artículo:", error);
    res.status(500).json({ error: "Error al actualizar artículo" });
  }
});

// Eliminar un artículo y sus relaciones
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.ArticuloProveedor.destroy({ where: { id_articulo: id } });
    const deleted = await db.Articulo.destroy({ where: { id_articulo: id } });

    if (!deleted) return res.status(404).json({ error: "Artículo no encontrado" });

    res.json({ message: "Artículo eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar artículo:", error);
    res.status(500).json({ error: "Error al eliminar artículo" });
  }
});

// Obtener artículos por CUIT del proveedor
router.get('/proveedor/:cuit', async (req, res) => {
  const { cuit } = req.params;

  try {
    const proveedor = await db.Proveedor.findOne({ where: { cuit } });
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });

    const articulos = await db.Articulo.findAll({
      include: [{
        model: db.Proveedor,
        where: { id_proveedor: proveedor.id_proveedor },
        through: {
          attributes: ['costo_pedido', 'modelo_inventario', 'proveedor_predeterminado', 'demora_entrega', 'precio_unitario']
        },
        attributes: [] // No traer campos del proveedor aquí, solo del intermedio y artículo
      }]
    });

    res.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos por proveedor:", error);
    res.status(500).json({ error: "Error al obtener artículos por proveedor" });
  }
});

module.exports = router;
