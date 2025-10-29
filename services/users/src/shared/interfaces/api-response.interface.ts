export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface ApiError {
  success: false;
  message: string;
  error: string;
  timestamp: string;
  code?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface ApiValidationError extends ApiError {
  validationErrors: ValidationError[];
}

export interface UserResponse {
  id: number;
  name: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  id: number;
  name: string;
  price: string;
  quantity: number;
  status: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  category?: {
    id: number;
    name: string;
    description: string;
  };
}

export interface OrderResponse {
  id: number;
  userId: number;
  total: string;
  fecha: string;
  createdAt: string;
  updatedAt: string;
  orderDetails?: OrderDetailResponse[];
}

export interface OrderDetailResponse {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: string;
  createdAt: string;
  updatedAt: string;
  product?: {
    id: number;
    name: string;
    price: string;
  };
}