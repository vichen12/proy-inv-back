const express = require('express');
const router = express.Router();
const ordenCompraDetalleController = require('../controllers/ordenCompraDetalleController');

// Crear
router.post('/', ordenCompraDetalleController.createOrdenCompraDetalle);
// Actualizar
router.put('/:id', ordenCompraDetalleController.updateOrdenCompraDetalle);
// Consultar todos
router.get('/', ordenCompraDetalleController.getAllOrdenCompraDetalles);
// Consultar por ID
router.get('/:id', ordenCompraDetalleController.getOrdenCompraDetalleById);

module.exports = router; 