import { Product } from './product.entity';

export interface ProductResponse {
  id: string;
  name: string;
  photo: string;
  price?: number;
}

export function productToProductResponse(product: Product): ProductResponse {
  return { id: product.id, name: product.name, photo: product.photo };
}
