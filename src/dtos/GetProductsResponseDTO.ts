import Product from '../models/Product';

class GetProductsResponseDTO {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public quantity: number
    ) {}

    static fromProduct(product: Product): GetProductsResponseDTO {
        return new GetProductsResponseDTO(
            product.id,
            product.name,
            product.price,
            product.quantity
        );
    }

    static fromProductList(products: Product[]): GetProductsResponseDTO[] {
        return products.map(product => this.fromProduct(product));
    }
}

export default GetProductsResponseDTO;