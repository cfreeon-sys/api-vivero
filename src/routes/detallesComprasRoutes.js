const express = require('express');
const router = express.Router();

const detalleCompraController = require('../controllers/detallesComprasController');

router.get('/getDetallesCompras', detalleCompraController.getDetallesCompras);
router.get('/getDetalleCompraById/:id', detalleCompraController.getDetalleCompraById);

router.post('/postDetalleCompra', detalleCompraController.postDetalleCompra);
router.put('/putDetalleCompra/:id', detalleCompraController.putDetalleCompra);
router.delete('/deleteDetalleCompra/:id', detalleCompraController.deleteDetalleCompra);

module.exports = router;