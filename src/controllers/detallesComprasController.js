const detalleCompraModel = require('../models/detallesComprasModel');

module.exports = {

    getDetallesCompras: (req, res) => {
        detalleCompraModel.getDetallesCompras((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getDetalleCompraById: (req, res) => {
        const { id } = req.params;
        detalleCompraModel.getDetalleCompraById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'Detalle de compra no encontrado' });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    postDetalleCompra: (req, res) => {
        const { compra_id, planta_id, cantidad, precio_unitario } = req.body;
        detalleCompraModel.postDetalleCompra(compra_id, planta_id, cantidad, precio_unitario, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: 'Detalle de compra creado correctamente', data: { idInsertado: result } });
        });
    },

    putDetalleCompra: (req, res) => {
        const { id } = req.params;
        const { compra_id, planta_id, cantidad, precio_unitario } = req.body;
        detalleCompraModel.putDetalleCompra(id, compra_id, planta_id, cantidad, precio_unitario, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Detalle de compra no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Detalle de compra actualizado correctamente' });
        });
    },

    deleteDetalleCompra: (req, res) => {
        const { id } = req.params;
        detalleCompraModel.deleteDetalleCompra(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Detalle de compra no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Detalle de compra eliminado correctamente' });
        });
    }

};