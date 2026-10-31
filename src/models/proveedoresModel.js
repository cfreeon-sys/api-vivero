const db = require('../config/dbConfig');

class Proveedor {
    getProveedores(callback) {
        const sql = "SELECT proveedor_id, nit, nombre, telefono, correo, direccion, estado FROM proveedores";
        db.query(sql, callback);
    }

    getProveedorById(id, callback) {
        const sql = "SELECT proveedor_id, nit, nombre, telefono, correo, direccion, estado FROM proveedores WHERE proveedor_id = ?";
        db.query(sql, [id], callback);
    }

    postProveedor(nit, nombre, telefono, correo, direccion, estado, callback) {
        const sql = 'INSERT INTO proveedores (nit, nombre, telefono, correo, direccion, estado) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [nit, nombre, telefono, correo, direccion, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putProveedor(id, nit, nombre, telefono, correo, direccion, estado, callback) {
        const sql = 'UPDATE proveedores SET nit = ?, nombre = ?, telefono = ?, correo = ?, direccion = ?, estado = ? WHERE proveedor_id = ?';
        db.query(sql, [nit, nombre, telefono, correo, direccion, estado, id], callback);
    }

    deleteProveedor(id, callback) {
        const sql = 'DELETE FROM proveedores WHERE proveedor_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Proveedor();