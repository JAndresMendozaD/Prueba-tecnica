const conexion = require('./db');

// Crear tabla usuarios
function crearTabla(callback) {
    const crearTablaQuery = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            contraseña VARCHAR(100)
        )
    `;

    conexion.query(crearTablaQuery, (err) => {
        if (err) return callback(err);
        console.log('Tabla usuarios creada o ya existente.');
        callback(null);
    });
}

// Insertar datos en la tabla
function insertarDatos(callback) {
    const insertarDatosQuery = `
        INSERT IGNORE INTO usuarios (nombre, email, contraseña) VALUES
        ('Juan Pérez', 'juan.perez@ejemplo.com', 'contraseña6'),
        ('Ana Gómez', 'ana.gomez@ejemplo.com', 'contraseña5'),
        ('Luis Martínez', 'luis.martinez@ejemplo.com', 'contraseña7')
    `;
    conexion.query(insertarDatosQuery, (err, results) => {
        if (err) return callback(err);
        if (results.affectedRows > 0) {
            console.log('Datos insertados en la tabla usuarios.');
        } else {
            console.log('No se insertaron datos nuevos porque algunos correos electrónicos ya existen.');
        }
        callback(null);
    });
}

// Obtener nombre por email
function obtenerNombrePorEmail(email, callback){
    const query = 'SELECT nombre FROM usuarios WHERE email = ?';
    conexion.query(query, [email], (err, resultado) => {
        if (err) return callback(err);
        if (resultado.length > 0) {
            callback(null, resultado[0].nombre);
        } else {
            callback(null, null);
        }
    });
}

// Actualizar la contraseña por nombre
function actualizarContrasenaPorNombre(nombre, nuevaContrasena, callback){
    const query = 'UPDATE usuarios SET contraseña = ? WHERE nombre = ?';
    conexion.query(query, [nuevaContrasena, nombre], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado.affectedRows > 0);
    });
}

// Crear tabla usuarios y luego insertar datos
function inicializarBaseDeDatos() {
    crearTabla((err) => {
        if (err) {
            console.error('Error al crear la tabla:', err);
            return;
        }
        console.log('Tabla creada correctamente.');
        
        // Llamando a insertarDatos sólo después de que la tabla ha sido creada
        insertarDatos((err) => {
            if (err) {
                console.error('Error al insertar datos:', err);
                return;
            }
            console.log('Datos insertados correctamente.');
            
            // Aquí puedes seguir con otras operaciones o pruebas
        });
    });
}

// Ejecutar inicialización de la base de datos
inicializarBaseDeDatos();

// Prueba de funciones

obtenerNombrePorEmail('juan.perez@ejemplo.com', (err, nombre)=>{
    if(err){
        console.error('Error obteniendo nombre', err);
    }else{
        console.log('Nombre obtenido: ', nombre);
    }
});

actualizarContrasenaPorNombre('Juan Pérez', 'nuevacontrasena2', (err, exito) =>{
    if(err){
        console.error('Error actualizando la contraseña', err);
    }else if (exito){
        console.log('Contraseña actualizada correctamente.');
    }else{
        console.log('No se encontró el usuario para actualizar');
    }
});

// Cerrar sesión al terminar
process.on('exit', ()=>{
    conexion.end();
});
