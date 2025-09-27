import { Router } from 'express';
import { productRepository } from '../repositories/product.repository';
import ProductService from '../../application/product.service';
import ProductController from '../controllers/product.controller';

const router = Router();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.post('/createProducts', productController.createProduct);
router.put('/updateProducts/:id', productController.updateProduct);
router.get('/getAllProducts', productController.getAllProducts);

export default router;