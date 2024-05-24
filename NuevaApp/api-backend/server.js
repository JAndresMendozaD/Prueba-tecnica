const express = require('express');
const mongoose = require('mongoose');

// Importar las rutas de la API
const productRoutes = require('./routes/productRoutes');

// Configurar la aplicación Express
const app = express();
app.use(express.json());

// Conectar a la base de datos MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/prueba_tecnica_mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('MongoDB Conectado');
  } catch (err) {
    console.error(`Error conectando a MongoDB: ${err.message}`);
    process.exit(1);
  }
};
connectDB();

// Definir las rutas de la API
app.use('/api/products', productRoutes);

// Manejar errores 404 (Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Recurso no encontrado' });
});

// Manejar errores internos del servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Configurar el puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor API iniciado en el puerto ${PORT}`);
});
