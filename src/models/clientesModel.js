const db = require('../config/dbConfig');

class Cliente {
    getClientes(callback) {
        const sql = "SELECT cliente_id, documento, nombres, apellidos, telefono, correo, direccion FROM clientes";
        db.query(sql, callback);
    }

    getClienteById(id, callback) {
        const sql = "SELECT cliente_id, documento, nombres, apellidos, telefono, correo, direccion FROM clientes WHERE cliente_id = ?";
        db.query(sql, [id], callback);
    }

    postCliente(documento, nombres, apellidos, telefono, correo, direccion, callback) {
        const sql = 'INSERT INTO clientes (documento, nombres, apellidos, telefono, correo, direccion) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [documento, nombres, apellidos, telefono, correo, direccion], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putCliente(id, documento, nombres, apellidos, telefono, correo, direccion, callback) {
        const sql = 'UPDATE clientes SET documento = ?, nombres = ?, apellidos = ?, telefono = ?, correo = ?, direccion = ? WHERE cliente_id = ?';
        db.query(sql, [documento, nombres, apellidos, telefono, correo, direccion, id], callback);
    }

    deleteCliente(id, callback) {
        const sql = 'DELETE FROM clientes WHERE cliente_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Cliente();