const express = require('express');
const cors = require('cors'); // <- necesario para que Vite pueda hacer peticiones

const app = express();
const PORT = 5000; // Asegurate que sea el puerto que estás usando

// Middlewares
app.use(cors());              // <- habilita peticiones del frontend
app.use(express.json());      // <- permite leer JSON en las peticiones

// Rutas
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola desde el backend!' });
});

app.use('/api/articulos', require('./routes/articuloRoutes'));
app.use('/api/proveedores', require('./routes/proveedorRoutes'));
app.use('/api/ventas', require('./routes/ventaRoutes'));
app.use('/api/venta-detalles', require('./routes/ventaDetalleRoutes'));
app.use('/api/ordenes-compra', require('./routes/ordenCompraRoutes'));
app.use('/api/orden-compra-detalles', require('./routes/ordenCompraDetalleRoutes'));
app.use('/api/articulo-proveedores', require('./routes/articuloProveedorRoutes'));
app.use('/api/estados-orden-compra', require('./routes/estadoOrdenCompraRoutes'));

// Servidor corriendo
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
