const db = require('../config/dbConfig');

class DetalleVenta {
    getDetallesVentas(callback) {
        const sql = "SELECT detalle_id, venta_id, planta_id, cantidad, precio_unitario FROM detalle_ventas";
        db.query(sql, callback);
    }

    getDetalleVentaById(id, callback) {
        const sql = "SELECT detalle_id, venta_id, planta_id, cantidad, precio_unitario FROM detalle_ventas WHERE detalle_id = ?";
        db.query(sql, [id], callback);
    }

    postDetalleVenta(venta_id, planta_id, cantidad, precio_unitario, callback) {
        const sql = 'INSERT INTO detalle_ventas (venta_id, planta_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)';
        db.query(sql, [venta_id, planta_id, cantidad, precio_unitario], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putDetalleVenta(id, venta_id, planta_id, cantidad, precio_unitario, callback) {
        const sql = 'UPDATE detalle_ventas SET venta_id = ?, planta_id = ?, cantidad = ?, precio_unitario = ? WHERE detalle_id = ?';
        db.query(sql, [venta_id, planta_id, cantidad, precio_unitario, id], callback);
    }

    deleteDetalleVenta(id, callback) {
        const sql = 'DELETE FROM detalle_ventas WHERE detalle_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new DetalleVenta();