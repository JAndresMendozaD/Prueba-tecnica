const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/prueba_tecnica_mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error conectando a MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
