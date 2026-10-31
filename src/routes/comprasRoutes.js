const express = require('express');
const router = express.Router();

const compraController = require('../controllers/comprasController');

router.get('/getCompras', compraController.getCompras);
router.get('/getCompraById/:id', compraController.getCompraById);
router.get('/getComprasDetalladas', compraController.getComprasDetalladas);

router.post('/postCompra', compraController.postCompra);
router.put('/putCompra/:id', compraController.putCompra);
router.delete('/deleteCompra/:id', compraController.deleteCompra);

module.exports = router;