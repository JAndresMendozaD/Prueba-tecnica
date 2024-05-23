const { MongoClient } = require('mongodb');

// Configur la conexión
const uri = 'mongodb://localhost:27017';
const dbName = 'prueba_tecnica_mongo';
const collectionName = 'productos';

async function conectarMongoDB() {
    const cliente = new MongoClient(uri);

    try {
        // Conectar al servidor
        await cliente.connect();
        console.log('Conexión exitosa a MongoDB');

        const db = cliente.db(dbName);
        const collection = db.collection(collectionName);

        // Crear la colección si no existe
        const colecciones = await db.listCollections({ name: collectionName }).toArray();
        if (colecciones.length === 0) {
            await db.createCollection(collectionName);
            console.log('Colección creada');
        } else {
            console.log('La colección ya existe');
        }

        // Crear un id único
        await collection.createIndex({ id: 1 }, { unique: true });
        console.log('Índice único en el campo "id" creado');

        // Insertar documentos en la colección
        const productos = [
            { id: 1, nombre: 'caja acuarelas', precio: 25000, cantidad: 15 },
            { id: 2, nombre: 'lienzo', precio: 15000, cantidad: 20 },
            { id: 3, nombre: 'juego pinceles', precio: 2000, cantidad: 10 },
        ];

        try {
            const resultadoInsert = await collection.insertMany(productos);
            console.log('Documentos insertados:', resultadoInsert.insertedCount);
        } catch (err) {
            console.error('Error al insertar documentos:', err);
        }

        // Función para obtener el precio de un producto por su nombre
        async function obtenerPrecioProducto(nombreProducto) {
            try {
                const producto = await collection.findOne({ nombre: nombreProducto });
                if (producto) {
                    return producto.precio;
                } else {
                    return null;
                }
            } catch (err) {
                console.error('Error al obtener el precio del producto:', err);
                return null;
            }
        }

        // Probar la función para obtener el precio de un producto por su nombre
        const nombreProducto = 'caja acuarelas';
        const precio = await obtenerPrecioProducto(nombreProducto);
        if (precio !== null) {
            console.log(`El precio de ${nombreProducto} es $${precio}`);
        } else {
            console.log(`Producto ${nombreProducto} no encontrado`);
        }

    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
    } finally {
        // Cerrar la conexión
        await cliente.close();
    }
}

// Llamar a la función
conectarMongoDB();
