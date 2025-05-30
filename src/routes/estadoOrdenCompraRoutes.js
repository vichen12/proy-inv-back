const express = require('express');
const router = express.Router();
const estadoOrdenCompraController = require('../controllers/estadoOrdenCompraController');

// Crear
router.post('/', estadoOrdenCompraController.createEstadoOrdenCompra);
// Actualizar
router.put('/:id', estadoOrdenCompraController.updateEstadoOrdenCompra);
// Consultar todos
router.get('/', estadoOrdenCompraController.getAllEstadosOrdenCompra);
// Consultar por ID
router.get('/:id', estadoOrdenCompraController.getEstadoOrdenCompraById);

module.exports = router; 