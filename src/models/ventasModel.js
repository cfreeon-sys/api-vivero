const db = require('../config/dbConfig');

class Venta {
    getVentas(callback) {
        const sql = "SELECT venta_id, codigo, cliente_id, fecha_venta, estado, metodo_pago, observaciones FROM ventas";
        db.query(sql, callback);
    }

    getVentaById(id, callback) {
        const sql = "SELECT venta_id, codigo, cliente_id, fecha_venta, estado, metodo_pago, observaciones FROM ventas WHERE venta_id = ?";
        db.query(sql, [id], callback);
    }

    getVentasDetalladas(callback) {
        const sql = `
            SELECT 
                v.codigo AS codigo_venta,
                CONCAT(cl.nombres, ' ', cl.apellidos) AS cliente,
                p.nombre AS planta,
                dv.cantidad,
                dv.precio_unitario,
                dv.cantidad * dv.precio_unitario AS subtotal,
                v.estado
            FROM ventas v
            INNER JOIN clientes cl ON v.cliente_id = cl.cliente_id
            INNER JOIN detalle_ventas dv ON v.venta_id = dv.venta_id
            INNER JOIN plantas p ON dv.planta_id = p.planta_id
            ORDER BY v.venta_id;
        `;
        db.query(sql, callback);
    }

    postVenta(codigo, cliente_id, estado, metodo_pago, observaciones, callback) {
        const sql = 'INSERT INTO ventas (codigo, cliente_id, estado, metodo_pago, observaciones) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [codigo, cliente_id, estado, metodo_pago, observaciones], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putVenta(id, codigo, cliente_id, estado, metodo_pago, observaciones, callback) {
        const sql = 'UPDATE ventas SET codigo = ?, cliente_id = ?, estado = ?, metodo_pago = ?, observaciones = ? WHERE venta_id = ?';
        db.query(sql, [codigo, cliente_id, estado, metodo_pago, observaciones, id], callback);
    }

    deleteVenta(id, callback) {
        const sql = 'DELETE FROM ventas WHERE venta_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Venta();