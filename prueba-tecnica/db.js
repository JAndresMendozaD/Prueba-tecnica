const mysql = require('mysql');

// crear conexion.
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'administrador',
    database: 'prueba_tecnica'
});

conexion.connect((err)=>{
    if(err){
        console.error('Error conectando a la base de datos',err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = conexion;