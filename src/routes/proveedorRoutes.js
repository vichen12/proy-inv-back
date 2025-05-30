const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Crear
router.post('/', proveedorController.createProveedor);
// Actualizar
router.put('/:id', proveedorController.updateProveedor);
// Baja lógica
router.patch('/baja/:id', proveedorController.bajaLogicaProveedor);
// Consultar todos
router.get('/', proveedorController.getAllProveedores);
// Consultar por ID
router.get('/:id', proveedorController.getProveedorById);
// Consultar artículos de un proveedor
router.get('/:id/articulos', proveedorController.getArticulosByProveedor);

module.exports = router; 