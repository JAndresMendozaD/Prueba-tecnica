import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/prueba_tecnica_mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    } as ConnectOptions);
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (err: any) { // O puedes usar 'Error' en lugar de 'any'
    console.error(`Error conectando a MongoDB: ${err.message}`);
    
  }
};
