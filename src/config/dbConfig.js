const mysql = require('mysql2'); // Se recomienda mysql2 para Clever Cloud

const db = mysql.createConnection({
    host: 'ba06ai59is5ebdhedebu-mysql.services.clever-cloud.com',
    user: 'u9seusdv658lazwa',
    password: 'TyOUvnjur1uSvAvuJVrb',
    database: 'ba06ai59is5ebdhedebu',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error("Error de conexión a la base de datos en la nube:", err);
        throw err;
    }
    console.log("¡Conexión MYSQL exitosa a la nube (Clever Cloud)!");
});

module.exports = db;