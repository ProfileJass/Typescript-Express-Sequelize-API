"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryById = exports.categories = void 0;
exports.categories = [
    { id: 1, name: "Electrónicos", description: "Dispositivos electrónicos y gadgets" },
    { id: 2, name: "Ropa", description: "Prendas de vestir para hombres, mujeres y niños" },
    { id: 3, name: "Hogar", description: "Artículos para el hogar y decoración" },
    { id: 4, name: "Deportes", description: "Artículos deportivos y equipamiento" },
    { id: 5, name: "Libros", description: "Libros de todos los géneros" }
];
const getCategoryById = (id) => {
    return exports.categories.find(category => category.id === id);
};
exports.getCategoryById = getCategoryById;
//# sourceMappingURL=category.mock.js.map