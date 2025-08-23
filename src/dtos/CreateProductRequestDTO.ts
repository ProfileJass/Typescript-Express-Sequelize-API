class CreateProductRequestDTO {
    constructor(
        public name: string,
        public price: number,
        public quantity: number
    ) {}
}

export default CreateProductRequestDTO;