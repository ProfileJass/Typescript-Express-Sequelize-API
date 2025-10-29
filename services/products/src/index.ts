import app from "./app";
import { connectDB } from "./config/database";
import process from "process";
import "dotenv/config";

const port = process.env.PORT || 8001;

const startServer = async () => {
  try {
    await connectDB();
    
    app.listen(port, () => {
      console.log(`🚀 Servidor de productos corriendo en el puerto: ${port}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();