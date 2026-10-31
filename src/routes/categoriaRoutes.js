
const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoriaController');

// CONSULTAR TODAS LAS CATEGORIAS
router.get('/getCategorias', categoriaController.getCategorias);

// CONSULTAR CATEGORIA POR ID
router.get('/getCategoriaById/:id', categoriaController.getCategoriaById);

// REGISTRAR CATEGORIA
router.post('/postCategoria', categoriaController.postCategoria);

// ACTUALIZAR CATEGORIA
router.put('/putCategoria/:id', categoriaController.putCategoria);

// ELIMINAR CATEGORIA
router.delete('/deleteCategoria/:id', categoriaController.deleteCategoria);

module.exports = router;
