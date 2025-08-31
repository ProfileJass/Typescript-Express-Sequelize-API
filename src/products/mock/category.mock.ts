import Category from "../domain/model/category.model";

export const categories: Category[] = [
    { id: 1, name: "Electrónicos", description: "Dispositivos electrónicos y gadgets" },
    { id: 2, name: "Ropa", description: "Prendas de vestir para hombres, mujeres y niños" },
    { id: 3, name: "Hogar", description: "Artículos para el hogar y decoración" },
    { id: 4, name: "Deportes", description: "Artículos deportivos y equipamiento" },
    { id: 5, name: "Libros", description: "Libros de todos los géneros" }
];

export const getCategoryById = (id: number): Category | undefined => {
    return categories.find(category => category.id === id);
};