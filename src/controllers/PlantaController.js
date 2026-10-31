
const plantaModel = require('../models/plantasModel');

module.exports = {

    getPlantas: (req, res) => {
        plantaModel.getPlantas((err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({ data: result });
        });
    },

    getPlantaById: (req, res) => {
        const { id } = req.params;

        plantaModel.getPlantaById(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: 'Planta no encontrada'
                });
            }

            res.status(200).json({ data: result });
        });
    },

    getPlantasConDetalles: (req, res) => {
        plantaModel.getPlantasConDetalles((err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({ data: result });
        });
    },

    postPlanta: (req, res) => {

        console.log('Datos recibidos:', req.body);

        if (!req.body) {
            return res.status(400).json({
                message: 'No se recibió el cuerpo de la petición. Verifica express.json().'
            });
        }

        const {
            codigo,
            nombre,
            nombre_cientifico,
            descripcion,
            precio,
            stock,
            categoria_id,
            proveedor_id,
            estado
        } = req.body;

        if (!codigo || !nombre) {
            return res.status(400).json({
                message: 'El código y el nombre de la planta son obligatorios'
            });
        }

        plantaModel.postPlanta(
            codigo,
            nombre,
            nombre_cientifico,
            descripcion,
            precio,
            stock,
            categoria_id,
            proveedor_id,
            estado,
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.status(201).json({
                    message: 'Planta creada correctamente',
                    data: { idInsertado: result }
                });
            }
        );
    },

    putPlanta: (req, res) => {
        const { id } = req.params;

        if (!req.body) {
            return res.status(400).json({
                message: 'No se recibieron datos para actualizar'
            });
        }

        const {
            codigo,
            nombre,
            nombre_cientifico,
            descripcion,
            precio,
            stock,
            categoria_id,
            proveedor_id,
            estado
        } = req.body;

        plantaModel.putPlanta(
            id,
            codigo,
            nombre,
            nombre_cientifico,
            descripcion,
            precio,
            stock,
            categoria_id,
            proveedor_id,
            estado,
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({
                        message: 'Planta no encontrada'
                    });
                }

                res.status(200).json({
                    message: 'Planta actualizada correctamente'
                });
            }
        );
    },

    deletePlanta: (req, res) => {
        const { id } = req.params;

        plantaModel.deletePlanta(id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: 'Planta no encontrada'
                });
            }

            res.status(200).json({
                message: 'Planta eliminada correctamente'
            });
        });
    }
};
