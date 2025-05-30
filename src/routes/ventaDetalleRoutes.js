const express = require('express');
const router = express.Router();
const ventaDetalleController = require('../controllers/ventaDetalleController');

// Crear
router.post('/', ventaDetalleController.createVentaDetalle);
// Actualizar
router.put('/:id', ventaDetalleController.updateVentaDetalle);
// Consultar todos
router.get('/', ventaDetalleController.getAllVentaDetalles);
// Consultar por ID
router.get('/:id', ventaDetalleController.getVentaDetalleById);

module.exports = router; 