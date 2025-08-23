import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import CreateProductRequestDTO from '../dtos/CreateProductRequestDTO';
import CreateProductResponseDTO from '../dtos/CreateProductResponseDTO';
import GetProductsResponseDTO from '../dtos/GetProductsResponseDTO';
import { ApiResponseDTO } from '../dtos/ApiResponseDTO';

class ProductController {
    static async createProduct(req: Request, res: Response) {
        try {
            const { name, price, quantity } = req.body;
            const dto = new CreateProductRequestDTO(name, price, quantity);
            
            const product = await ProductService.createProduct(dto);
            
            if (product) {
                const response = ApiResponseDTO.builder<CreateProductResponseDTO>()
                    .success(true)
                    .message("Product successfully created")
                    .data(CreateProductResponseDTO.fromProduct(product))
                    .build();
                
                return res.status(201).json(response);
            } else {
                const response = ApiResponseDTO.builder<CreateProductResponseDTO>()
                    .success(false)
                    .message("Error al crear el producto. Verifique los datos proporcionados")
                    .build();
                
                return res.status(400).json(response);
            }

        } catch (error) {
            if (error instanceof Error && error.message.includes('Datos inválidos')) {
                const response = ApiResponseDTO.builder<CreateProductResponseDTO>()
                    .success(false)
                    .message(error.message)
                    .build();
                
                return res.status(400).json(response);
            }
            
            const response = ApiResponseDTO.builder<CreateProductResponseDTO>()
                .success(false)
                .message('Error interno del servidor')
                .build();
            
            return res.status(500).json(response);
        }
    }

    static async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductService.getAllProducts();
            
            const response = ApiResponseDTO.builder<GetProductsResponseDTO[]>()
                .success(true)
                .message("Products successfully retrieved")
                .data(GetProductsResponseDTO.fromProductList(products))
                .build();
            
            return res.status(200).json(response);

        } catch (error) {
            const response = ApiResponseDTO.builder<GetProductsResponseDTO[]>()
                .success(false)
                .message('Error interno del servidor')
                .build();
            
            return res.status(500).json(response);
        }
    }
}

export default ProductController;