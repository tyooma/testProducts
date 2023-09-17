import AsyncStorage from '@react-native-async-storage/async-storage';

import { Product, Products } from '../types/data';

export const addProductToStorage = async (product: Product) => {
  try {
    const existingProductsJson = await AsyncStorage.getItem('products');
    let existingProducts = existingProductsJson
      ? JSON.parse(existingProductsJson)
      : [];

    existingProducts.unshift(product);

    await AsyncStorage.setItem('products', JSON.stringify(existingProducts));
  } catch (error) {
    console.error('Error', error);
  }
};

export const saveProductsToStorage = async (products: Products) => {
  try {
    const jsonProducts = JSON.stringify(products);

    await AsyncStorage.setItem('products', jsonProducts);
  } catch (error) {
    console.error('Error', error);
  }
};

export const loadProductsFromStorage = async () => {
  try {
    const jsonProducts = await AsyncStorage.getItem('products');

    return jsonProducts != null ? JSON.parse(jsonProducts) : [];
  } catch (error) {
    console.error('Error', error);
    return [];
  }
};
