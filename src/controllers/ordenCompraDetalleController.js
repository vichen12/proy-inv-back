// src/controllers/ordenCompraDetalleController.js

exports.getAllOrdenCompraDetalles = (req, res) => {
    res.json({ mensaje: 'Obteniendo todos los detalles de orden de compra' });
};

exports.getOrdenCompraDetalleById = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Detalle de orden de compra con ID ${id} obtenido` });
};

exports.createOrdenCompraDetalle = (req, res) => {
    const nuevoDetalle = req.body;
    res.status(201).json({
        mensaje: 'Detalle de orden de compra creado correctamente',
        data: nuevoDetalle
    });
};

exports.updateOrdenCompraDetalle = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    res.json({
        mensaje: `Detalle de orden de compra con ID ${id} actualizado`,
        data: datosActualizados
    });
};

exports.deleteOrdenCompraDetalle = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Detalle de orden de compra con ID ${id} eliminado`
    });
};
