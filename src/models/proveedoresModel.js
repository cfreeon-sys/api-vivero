const db = require('../config/dbConfig');

class Proveedor {
    getProveedores(callback) {
        const sql = "SELECT proveedor_id, nombre, telefono, correo, direccion, estado FROM proveedores";
        db.query(sql, callback);
    }

    getProveedorById(id, callback) {
        const sql = "SELECT proveedor_id, nombre, telefono, correo, direccion, estado FROM proveedores WHERE proveedor_id = ?";
        db.query(sql, [id], callback);
    }

    postProveedor(nombre, telefono, correo, direccion, estado, callback) {
        const sql = 'INSERT INTO proveedores (nombre, telefono, correo, direccion, estado) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [nombre, telefono, correo, direccion, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putProveedor(id, nombre, telefono, correo, direccion, estado, callback) {
        const sql = 'UPDATE proveedores SET nombre = ?, telefono = ?, correo = ?, direccion = ?, estado = ? WHERE proveedor_id = ?';
        db.query(sql, [nombre, telefono, correo, direccion, estado, id], callback);
    }

    deleteProveedor(id, callback) {
        const sql = 'DELETE FROM proveedores WHERE proveedor_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Proveedor();