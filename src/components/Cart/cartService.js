import { apiService } from '../../service/apiService';
import { API_URLS } from '../../config/config';

export const checkoutProduct = async (to, cart) => {
  try {
    console.log(to, cart, 'thieeeeeeeeeeeeee')

    const updatedCart = cart.map(item => ({
      price: item.price,
      qty: item.qty,
      name: item.name,
      id: item.id
    }));
    console.log(updatedCart, 'uo')

    const products = await apiService.post(API_URLS.chekoutCart, { to, cart: updatedCart }, false);
    return products.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const checkoutCart = async (formData, totalAmount) => {
  try {
    const obj = {
      ...formData,
      totalAmount
    };
    const response = await apiService.post(API_URLS.chekoutOnlyCart, obj, false);
    return response.data;
  } catch (error) {
    throw new Error(error)
  }
};