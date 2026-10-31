const ventaModel = require('../models/ventasModel');

module.exports = {

    getVentas: (req, res) => {
        ventaModel.getVentas((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getVentaById: (req, res) => {
        const { id } = req.params;
        ventaModel.getVentaById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'Venta no encontrada' });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getVentasDetalladas: (req, res) => {
        ventaModel.getVentasDetalladas((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    postVenta: (req, res) => {
        const { codigo, cliente_id, estado, metodo_pago, observaciones } = req.body;
        ventaModel.postVenta(codigo, cliente_id, estado, metodo_pago, observaciones, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: 'Venta creada correctamente', data: { idInsertado: result } });
        });
    },

    putVenta: (req, res) => {
        const { id } = req.params;
        const { codigo, cliente_id, estado, metodo_pago, observaciones } = req.body;
        ventaModel.putVenta(id, codigo, cliente_id, estado, metodo_pago, observaciones, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Venta no encontrada' });
                return;
            }
            res.status(200).json({ message: 'Venta actualizada correctamente' });
        });
    },

    deleteVenta: (req, res) => {
        const { id } = req.params;
        ventaModel.deleteVenta(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Venta no encontrada' });
                return;
            }
            res.status(200).json({ message: 'Venta eliminada correctamente' });
        });
    }

};