import { apiService } from '../../service/apiService';
import { API_URLS } from '../../config/config';

export const getProducts = async () => {
  try {
    const products = await apiService.get(API_URLS.getProducts, false);
    return products.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};