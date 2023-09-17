import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreensNavigationList, Screens } from '../types/navigation';
import ProductsList from './ProductsList/ProductsList';
import Product from './Product/Product';
import AddProduct from './AddProduct/AddProduct';

const Stack = createNativeStackNavigator<ScreensNavigationList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name={Screens.ProductsList} component={ProductsList} />
        <Stack.Screen name={Screens.Product} component={Product} />
        <Stack.Screen name={Screens.AddProduct} component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
