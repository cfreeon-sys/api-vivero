const express = require('express');
const router = express.Router();

const plantaController = require('../controllers/PlantaController');

router.get('/getPlantas', plantaController.getPlantas);
router.get('/getPlantaById/:id', plantaController.getPlantaById);
router.get('/getPlantasConDetalles', plantaController.getPlantasConDetalles);

router.post('/postPlanta', plantaController.postPlanta);
router.put('/putPlanta/:id', plantaController.putPlanta);
router.delete('/deletePlanta/:id', plantaController.deletePlanta);

module.exports = router;