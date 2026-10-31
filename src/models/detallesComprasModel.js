const db = require('../config/dbConfig');

class DetalleCompra {
    getDetallesCompras(callback) {
        const sql = "SELECT detalle_id, compra_id, planta_id, cantidad, precio_unitario FROM detalles_compras";
        db.query(sql, callback);
    }

    getDetalleCompraById(id, callback) {
        const sql = "SELECT detalle_id, compra_id, planta_id, cantidad, precio_unitario FROM detalles_compras WHERE detalle_id = ?";
        db.query(sql, [id], callback);
    }

    postDetalleCompra(compra_id, planta_id, cantidad, precio_unitario, callback) {
        const sql = 'INSERT INTO detalles_compras (compra_id, planta_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)';
        db.query(sql, [compra_id, planta_id, cantidad, precio_unitario], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putDetalleCompra(id, compra_id, planta_id, cantidad, precio_unitario, callback) {
        const sql = 'UPDATE detalles_compras SET compra_id = ?, planta_id = ?, cantidad = ?, precio_unitario = ? WHERE detalle_id = ?';
        db.query(sql, [compra_id, planta_id, cantidad, precio_unitario, id], callback);
    }

    deleteDetalleCompra(id, callback) {
        const sql = 'DELETE FROM detalles_compras WHERE detalle_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new DetalleCompra();