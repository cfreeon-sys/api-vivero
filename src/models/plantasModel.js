const db = require('../config/dbConfig');

class Planta {
    getPlantas(callback) {
        const sql = "SELECT planta_id, codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado FROM plantas";
        db.query(sql, callback);
    }

    getPlantaById(id, callback) {
        const sql = "SELECT planta_id, codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado FROM plantas WHERE planta_id = ?";
        db.query(sql, [id], callback);
    }

    postPlanta(codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado, callback) {
        const sql = 'INSERT INTO plantas (codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putPlanta(id, codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado, callback) {
        const sql = 'UPDATE plantas SET codigo = ?, nombre = ?, nombre_cientifico = ?, descripcion = ?, precio = ?, stock = ?, categoria_id = ?, proveedor_id = ?, estado = ? WHERE planta_id = ?';
        db.query(sql, [codigo, nombre, nombre_cientifico, descripcion, precio, stock, categoria_id, proveedor_id, estado, id], callback);
    }

    deletePlanta(id, callback) {
        const sql = 'DELETE FROM plantas WHERE planta_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Planta();