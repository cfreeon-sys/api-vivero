const db = require('../config/dbConfig');

class Categoria {
    getCategorias(cb) {
        db.query("SELECT * FROM categorias ORDER BY categoria_id ASC", cb);
    }

    getCategoriaById(id, cb) {
        db.query("SELECT * FROM categorias WHERE categoria_id = ?", [id], cb);
    }

    postCategoria(codigo, nombre, descripcion, estado, cb) {
        const sql = "INSERT INTO categorias (codigo, nombre, descripcion, estado) VALUES (?, ?, ?, ?)";
        db.query(sql, [codigo, nombre, descripcion, estado], (err, res) => cb(err, res ? res.insertId : null));
    }

    putCategoria(id, codigo, nombre, descripcion, estado, cb) {
        const sql = "UPDATE categorias SET codigo = ?, nombre = ?, descripcion = ?, estado = ? WHERE categoria_id = ?";
        db.query(sql, [codigo, nombre, descripcion, estado, id], cb);
    }

    deleteCategoria(id, cb) {
        db.query("DELETE FROM categorias WHERE categoria_id = ?", [id], cb);
    }
}

module.exports = new Categoria();