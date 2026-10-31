const express = require('express');


const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const categoriaRoutes = require('./src/routes/categoriaRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const detallesComprasRoutes = require('./src/routes/detallesComprasRoutes'); 
const plantasRoutes = require('./src/routes/plantasRoutes');
const proveedorRoutes = require('./src/routes/proveedoresRoutes'); 
const comprasRoutes = require('./src/routes/comprasRoutes');     


app.use('/api/categorias', categoriaRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/detalles-compras', detallesComprasRoutes);
app.use('/api/plantas', plantasRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/compras', comprasRoutes);                


app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API del vivero funcionando correctamente'
    });
});


app.use((req, res) => {
    res.status(404).json({
        mensaje: 'Ruta no encontrada'
    });
});


app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});