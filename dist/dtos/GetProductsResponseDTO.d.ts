import Product from '../models/Product';
declare class GetProductsResponseDTO {
    id: number;
    name: string;
    price: number;
    quantity: number;
    constructor(id: number, name: string, price: number, quantity: number);
    static fromProduct(product: Product): GetProductsResponseDTO;
    static fromProductList(products: Product[]): GetProductsResponseDTO[];
}
export default GetProductsResponseDTO;
