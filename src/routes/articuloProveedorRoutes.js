const express = require('express');
const router = express.Router();
const articuloProveedorController = require('../controllers/articuloProveedorController');

// Crear
router.post('/', articuloProveedorController.createArticuloProveedor);
// Actualizar
router.put('/:id', articuloProveedorController.updateArticuloProveedor);
// Consultar todos
router.get('/', articuloProveedorController.getAllArticuloProveedores);
// Consultar por ID
router.get('/:id', articuloProveedorController.getArticuloProveedorById);

module.exports = router; 