export { Product } from './domain/model/product.model';
export { Category } from './domain/model/category.model';
export { ProductService } from './application/product.service';
export { ProductController } from './infrastructure/controllers/product.controller';
export { default as productRouter } from './infrastructure/routers/product.router';
export { ProductRequest } from './application/dto/product.request';
export { ProductRepositoryInterface } from './domain/ports/product.repository.interface';
