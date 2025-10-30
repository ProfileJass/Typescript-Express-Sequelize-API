import app from "./app";
import { connectDB } from "./config/database";
import process from "process";
import "dotenv/config";
const port = process.env.PORT || 3003;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`🚀 Servidor corriendo en: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
