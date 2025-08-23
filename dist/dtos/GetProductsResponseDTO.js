"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProductsResponseDTO {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    static fromProduct(product) {
        return new GetProductsResponseDTO(product.id, product.name, product.price, product.quantity);
    }
    static fromProductList(products) {
        return products.map(product => this.fromProduct(product));
    }
}
exports.default = GetProductsResponseDTO;
//# sourceMappingURL=GetProductsResponseDTO.js.map