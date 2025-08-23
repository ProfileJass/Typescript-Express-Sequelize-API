import Product from '../models/Product';

class CreateProductResponseDTO {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public quantity: number
    ) {}

    static fromProduct(product: Product): CreateProductResponseDTO {
        return new CreateProductResponseDTO(
            product.id,
            product.name,
            product.price,
            product.quantity
        );
    }
}

export default CreateProductResponseDTO;