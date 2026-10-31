
const express = require('express');

// 1. Inicializar Express
const app = express();
const port = 3000;

// 2. Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Importar rutas
const categoriaRoutes = require('./src/routes/categoriaRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const detalleVentaRoutes = require('./src/routes/detalle_ventaRoutes');
const plantasRoutes = require('./src/routes/plantasRoutes');
const proveedorRoutes = require('./src/routes/proveedorRoutes');
const ventaRoutes = require('./src/routes/ventaRoutes');

// 4. Registrar rutas
app.use('/api/categorias', categoriaRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/detalle-ventas', detalleVentaRoutes);
app.use('/api/plantas', plantasRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/ventas', ventaRoutes);

// 5. Ruta principal
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API del vivero funcionando correctamente'
    });
});

// 6. Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({
        mensaje: 'Ruta no encontrada'
    });
});

// 7. Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
