const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Crear
router.post('/', ventaController.createVenta);
// Actualizar
router.put('/:id', ventaController.updateVenta);
// Consultar todas
router.get('/', ventaController.getAllVentas);
// Consultar por ID
router.get('/:id', ventaController.getVentaById);
// Consultar detalles de una venta
router.get('/:id/detalles', ventaController.getDetallesByVenta);

module.exports = router; 