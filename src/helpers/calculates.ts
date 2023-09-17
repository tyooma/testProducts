import { Products } from '../types/data';

export const calculateLikesSum = (products: Products) => {
  return products.reduce((sum, product) => sum + (product.liked ? 1 : 0), 0);
};
