const proveedorModel = require('../models/proveedoresModel');

module.exports = {

    getProveedores: (req, res) => {
        proveedorModel.getProveedores((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    getProveedorById: (req, res) => {
        const { id } = req.params;
        proveedorModel.getProveedorById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ message: 'Proveedor no encontrado' });
                return;
            }
            res.status(200).json({ data: result });
        });
    },

    postProveedor: (req, res) => {
        const { nit, nombre, telefono, correo, direccion, estado } = req.body;
        proveedorModel.postProveedor(nit, nombre, telefono, correo, direccion, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: 'Proveedor creado correctamente', data: { idInsertado: result } });
        });
    },

    putProveedor: (req, res) => {
        const { id } = req.params;
        const { nit, nombre, telefono, correo, direccion, estado } = req.body;
        proveedorModel.putProveedor(id, nit, nombre, telefono, correo, direccion, estado, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Proveedor no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Proveedor actualizado correctamente' });
        });
    },

    deleteProveedor: (req, res) => {
        const { id } = req.params;
        proveedorModel.deleteProveedor(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Proveedor no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Proveedor eliminado correctamente' });
        });
    }

};