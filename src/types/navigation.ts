import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { Product, Products } from './data';

export enum Screens {
  ProductsList = 'ProductsList',
  Product = 'Product',
  AddProduct = 'AddProduct',
}

export type ScreensNavigationList = {
  ProductsList: { Products: Products };
  Product: { product: Product };
  AddProduct: undefined;
};

export type ProductsListScreenNavigationProp = NativeStackNavigationProp<
  ScreensNavigationList,
  Screens.ProductsList
>;

export type ProductsListScreenRouteProp = RouteProp<
  ScreensNavigationList,
  Screens.ProductsList
>;

export type ProductScreenNavigationProp = NativeStackNavigationProp<
  ScreensNavigationList,
  Screens.Product
>;

export type ProductScreenRouteProp = RouteProp<
  ScreensNavigationList,
  Screens.Product
>;

export type AddProductScreenNavigationProp = NativeStackNavigationProp<
  ScreensNavigationList,
  Screens.AddProduct
>;
