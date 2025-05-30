const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi proyecto Node!');
});

app.use(express.json());
app.use('/api/articulos', require('./routes/articuloRoutes'));
app.use('/api/proveedores', require('./routes/proveedorRoutes'));
app.use('/api/ventas', require('./routes/ventaRoutes'));
app.use('/api/venta-detalles', require('./routes/ventaDetalleRoutes'));
app.use('/api/ordenes-compra', require('./routes/ordenCompraRoutes'));
app.use('/api/orden-compra-detalles', require('./routes/ordenCompraDetalleRoutes'));
app.use('/api/articulo-proveedores', require('./routes/articuloProveedorRoutes'));
app.use('/api/estados-orden-compra', require('./routes/estadoOrdenCompraRoutes'));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
