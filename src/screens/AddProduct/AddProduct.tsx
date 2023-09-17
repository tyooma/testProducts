import React, { FC } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import 'react-native-get-random-values';

import {
  Screens,
  AddProductScreenNavigationProp,
} from '../../types/navigation';
import { Container, GoBackButton, Header, HeaderTitle } from './styled';
import { useAddProductMutation } from '../../services/productsAPI';
import { colors } from '../../constants/colors';
import AddProductForm from './components/AddProductForm';
import { addProductToStorage } from '../../helpers/asyncStorage';
import { setProduct } from '../../store/products';

const { v4: uuidv4 } = require('uuid');

const AddProduct: FC = () => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation<AddProductScreenNavigationProp>();
  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async (values: {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }) => {
    try {
      await addProduct(values)
        .unwrap()
        .then(response => {
          const newId = uuidv4();
          const { title, price, description, category, image } = response;
          const newProduct = {
            id: newId,
            title,
            price,
            description,
            category,
            image,
          };

          dispatch(setProduct(newProduct));
          addProductToStorage(newProduct);
        });
      navigate(Screens.ProductsList);
    } catch (error) {
      console.log('Error', error);
      Alert.alert('Something went wrong, please try again');
    }
  };

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} color={colors.jeffHardy} />
        </GoBackButton>
        <HeaderTitle children="New product" />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AddProductForm onSubmit={handleAddProduct} />
      </ScrollView>
    </Container>
  );
};

export default AddProduct;
