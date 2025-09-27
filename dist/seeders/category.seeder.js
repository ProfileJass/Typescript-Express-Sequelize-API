"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCategories = void 0;
const category_model_1 = require("../microservices/products/domain/model/category.model");
const seedCategories = async () => {
    try {
        const existingCategories = await category_model_1.Category.findAll();
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
            await category_model_1.Category.bulkCreate(categories);
            console.log("✅ Categorías de prueba creadas exitosamente");
        }
        else {
            console.log("ℹ️  Las categorías ya existen, omitiendo seed");
        }
    }
    catch (error) {
        console.error("❌ Error al crear categorías de prueba:", error);
    }
};
exports.seedCategories = seedCategories;
//# sourceMappingURL=category.seeder.js.map