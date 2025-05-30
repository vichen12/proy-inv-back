const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');

// Crear
router.post('/', articuloController.createArticulo);
// Actualizar
router.put('/:id', articuloController.updateArticulo);
// Baja lógica
router.patch('/baja/:id', articuloController.bajaLogicaArticulo);
// Consultar todos
router.get('/', articuloController.getAllArticulos);
// Consultar por ID
router.get('/:id', articuloController.getArticuloById);
// Consultar detalles de ventas de un artículo
router.get('/:id/ventas', articuloController.getVentasByArticulo);
// Consultar proveedores de un artículo
router.get('/:id/proveedores', articuloController.getProveedoresByArticulo);

module.exports = router; 