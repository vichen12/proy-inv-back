const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Rutas específicas primero para evitar conflictos
router.get('/cuit/:cuit/articulos', proveedorController.getArticulosByProveedorCuit);
router.get('/:id/articulos', proveedorController.getArticulosByProveedor);

// Rutas genéricas después
router.get('/:id', proveedorController.getProveedorById);
router.get('/', proveedorController.getAllProveedores);

router.post('/', proveedorController.createProveedor);
router.put('/:id', proveedorController.updateProveedor);
router.delete('/:id', proveedorController.bajaLogicaProveedor);

module.exports = router;
