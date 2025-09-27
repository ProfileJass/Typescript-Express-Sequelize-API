export interface CreateOrderRequest {
  userId: number;
  total: number;
  orderDetails: CreateOrderDetailItem[];
}

export interface CreateOrderDetailItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface OrderResponse {
  id: number;
  userId: number;
  total: number;
  fecha: Date;
  orderDetails?: OrderDetailResponse[];
}

export interface OrderDetailResponse {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}