import Product from '../models/Product';
declare class CreateProductResponseDTO {
    id: number;
    name: string;
    price: number;
    quantity: number;
    constructor(id: number, name: string, price: number, quantity: number);
    static fromProduct(product: Product): CreateProductResponseDTO;
}
export default CreateProductResponseDTO;
