const express = require('express');
const router = express.Router();
const articuloProveedorController = require('../controllers/articuloProveedorController');

// Crear
router.post('/', articuloProveedorController.createArticuloProveedor);

// Actualizar (con clave compuesta)
router.put('/:id_articulo/:id_proveedor', articuloProveedorController.updateArticuloProveedor);

// Obtener todos
router.get('/', articuloProveedorController.getAllArticuloProveedores);

// Obtener por ID compuesto
router.get('/:id_articulo/:id_proveedor', articuloProveedorController.getArticuloProveedorById);

module.exports = router;
