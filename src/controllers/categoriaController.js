const categoriaModel = require('../models/categoriaModel');

module.exports = {

    getCategorias: (req, res) => {
        categoriaModel.getCategorias((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getCategoriaById: (req, res) => {
        const { id } = req.params;
        categoriaModel.getCategoriaById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'Categoría no encontrada' });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    postCategoria: (req, res) => {
        const { codigo, nombre, descripcion, estado } = req.body || {};
        categoriaModel.postCategoria(codigo, nombre, descripcion, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: 'Categoría creada correctamente', data: { idInsertado: result } });
        });
    },

    putCategoria: (req, res) => {
        const { id } = req.params;
        
        // --- ESTO TE MOSTRARÁ QUÉ LLEGA EN LA TERMINAL ---
        console.log("LO QUE LLEGA EN req.body:", req.body);
        // ------------------------------------------------

        const { codigo, nombre, descripcion, estado } = req.body || {};

        categoriaModel.putCategoria(id, codigo, nombre, descripcion, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Categoría no encontrada' });
                return;
            }
            res.status(200).json({ message: 'Categoría actualizada correctamente' });
        });
    },

    deleteCategoria: (req, res) => {
        const { id } = req.params;
        categoriaModel.deleteCategoria(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Categoría no encontrada' });
                return;
            }
            res.status(200).json({ message: 'Categoría eliminada correctamente' });
        });
    }

};