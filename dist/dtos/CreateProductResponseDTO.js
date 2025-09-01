"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateProductResponseDTO {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    static fromProduct(product) {
        return new CreateProductResponseDTO(product.id, product.name, product.price, product.quantity);
    }
}
exports.default = CreateProductResponseDTO;
//# sourceMappingURL=CreateProductResponseDTO.js.map