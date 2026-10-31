const express = require('express');
const router = express.Router();

const ventaController = require('../controllers/ventaController');

router.get('/getVentas', ventaController.getVentas);
router.get('/getVentaById/:id', ventaController.getVentaById);
router.get('/getVentasDetalladas', ventaController.getVentasDetalladas);

router.post('/postVenta', ventaController.postVenta);
router.put('/putVenta/:id', ventaController.putVenta);
router.delete('/deleteVenta/:id', ventaController.deleteVenta);

module.exports = router;