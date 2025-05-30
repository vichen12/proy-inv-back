// src/controllers/ventaDetalleController.js

exports.getAllVentaDetalles = (req, res) => {
    res.json({ mensaje: 'Obteniendo todos los detalles de venta' });
};

exports.getVentaDetalleById = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Detalle de venta con ID ${id} obtenido` });
};

exports.createVentaDetalle = (req, res) => {
    const nuevoDetalle = req.body;
    res.status(201).json({
        mensaje: 'Detalle de venta creado correctamente',
        data: nuevoDetalle
    });
};

exports.updateVentaDetalle = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    res.json({
        mensaje: `Detalle de venta con ID ${id} actualizado`,
        data: datosActualizados
    });
};

exports.deleteVentaDetalle = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Detalle de venta con ID ${id} eliminado`
    });
};
