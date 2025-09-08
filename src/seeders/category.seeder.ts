import { Category } from "../products/domain/model/category.model";

export const seedCategories = async (): Promise<void> => {
  try {
    const existingCategories = await Category.findAll();
    
    if (existingCategories.length === 0) {
      const categories = [
        {
          name: "Electrónicos",
          description: "Dispositivos electrónicos y gadgets"
        },
        {
          name: "Ropa",
          description: "Vestimenta y accesorios"
        },
        {
          name: "Hogar",
          description: "Artículos para el hogar y decoración"
        },
        {
          name: "Deportes",
          description: "Artículos deportivos y fitness"
        },
        {
          name: "Libros",
          description: "Libros y material educativo"
        }
      ];

      await Category.bulkCreate(categories);
      console.log("✅ Categorías de prueba creadas exitosamente");
    } else {
      console.log("ℹ️  Las categorías ya existen, omitiendo seed");
    }
  } catch (error) {
    console.error("❌ Error al crear categorías de prueba:", error);
  }
};
