const compraModel = require('../models/comprasModel');

module.exports = {

    getCompras: (req, res) => {
        compraModel.getCompras((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getCompraById: (req, res) => {
        const { id } = req.params;
        compraModel.getCompraById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'Compra no encontrada' });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getComprasDetalladas: (req, res) => {
        compraModel.getComprasDetalladas((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    postCompra: (req, res) => {
        const { codigo, cliente_id, estado, metodo_pago } = req.body;
        compraModel.postCompra(codigo, cliente_id, estado, metodo_pago, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: 'Compra creada correctamente', data: { idInsertado: result } });
        });
    },

    putCompra: (req, res) => {
        const { id } = req.params;
        const { codigo, cliente_id, estado, metodo_pago } = req.body;
        compraModel.putCompra(id, codigo, cliente_id, estado, metodo_pago, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Compra no encontrada' });
                return;
            }
            res.status(200).json({ message: 'Compra actualizada correctamente' });
        });
    },

    deleteCompra: (req, res) => {
        const { id } = req.params;
        compraModel.deleteCompra(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Compra no encontrada' });
                return;
            }
            res.status(200).json({ message: 'Compra eliminada correctamente' });
        });
    }

};