const db = require('../config/dbConfig');

class Compra {
    getCompras(callback) {
        const sql = "SELECT compras_id, codigo, cliente_id, fecha_compras, estado, metodo_pago FROM compras";
        db.query(sql, callback);
    }

    getCompraById(id, callback) {
        const sql = "SELECT compras_id, codigo, cliente_id, fecha_compras, estado, metodo_pago FROM compras WHERE compras_id = ?";
        db.query(sql, [id], callback);
    }

    getComprasDetalladas(callback) {
        const sql = `
            SELECT 
                c.codigo AS codigo_compra,
                CONCAT(cl.nombres, ' ', cl.apellidos) AS cliente,
                p.nombre AS planta,
                dc.cantidad,
                dc.precio_unitario,
                dc.cantidad * dc.precio_unitario AS subtotal,
                c.estado
            FROM compras c
            INNER JOIN clientes cl ON c.cliente_id = cl.cliente_id
            INNER JOIN detalles_compras dc ON c.compras_id = dc.compra_id
            INNER JOIN plantas p ON dc.planta_id = p.planta_id
            ORDER BY c.compras_id;
        `;
        db.query(sql, callback);
    }

    postCompra(codigo, cliente_id, estado, metodo_pago, callback) {
        const sql = 'INSERT INTO compras (codigo, cliente_id, estado, metodo_pago) VALUES (?, ?, ?, ?)';
        db.query(sql, [codigo, cliente_id, estado, metodo_pago], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putCompra(id, codigo, cliente_id, estado, metodo_pago, callback) {
        const sql = 'UPDATE compras SET codigo = ?, cliente_id = ?, estado = ?, metodo_pago = ? WHERE compras_id = ?';
        db.query(sql, [codigo, cliente_id, estado, metodo_pago, id], callback);
    }

    deleteCompra(id, callback) {
        const sql = 'DELETE FROM compras WHERE compras_id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Compra();