const express = require('express');
const router = express.Router();
const ordenCompraController = require('../controllers/ordenCompraController');

// Crear
router.post('/', ordenCompraController.createOrdenCompra);
// Actualizar
router.put('/:id', ordenCompraController.updateOrdenCompra);
// Consultar todas
router.get('/', ordenCompraController.getAllOrdenesCompra);
// Consultar por ID
router.get('/:id', ordenCompraController.getOrdenCompraById);
// Consultar detalles de una orden de compra
router.get('/:id/detalles', ordenCompraController.getDetallesByOrdenCompra);

module.exports = router; 