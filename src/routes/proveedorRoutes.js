const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

router.post('/', proveedorController.createProveedor);
router.put('/:id', proveedorController.updateProveedor);
router.patch('/baja/:id', proveedorController.bajaLogicaProveedor);
router.get('/', proveedorController.getAllProveedores);
router.get('/:id', proveedorController.getProveedorById);
router.get('/:id/articulos', proveedorController.getArticulosByProveedor);

module.exports = router;
