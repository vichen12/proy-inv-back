// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/models');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

// Importar rutas
app.use('/api/articulos', require('./src/routes/articuloRoutes'));
app.use('/api/proveedores', require('./src/routes/proveedorRoutes'));
app.use('/api/ventas', require('./src/routes/ventaRoutes'));
app.use('/api/venta-detalles', require('./src/routes/ventaDetalleRoutes'));
app.use('/api/ordenes-compra', require('./src/routes/ordenCompraRoutes'));
app.use('/api/orden-compra-detalles', require('./src/routes/ordenCompraDetalleRoutes'));
app.use('/api/articulo-proveedores', require('./src/routes/articuloProveedorRoutes'));
app.use('/api/estados-orden-compra', require('./src/routes/estadoOrdenCompraRoutes'));

// Middleware para manejo de errores (opcional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Conexión a la base de datos y arranque del servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos MySQL');
    return sequelize.sync(); // sincroniza modelos con tablas
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });
