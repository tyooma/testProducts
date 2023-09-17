import { ActivityIndicator, FlatList } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ProductsListScreenNavigationProp,
  Screens,
} from '../../types/navigation';
import { colors } from '../../constants/colors';
import {
  Container,
  Header,
  HeaderTitle,
  LikesCounter,
  LikesCounterWrapper,
  NoResult,
} from './styled';
import ProductsListItem from './components/ProductsListItem/ProductsListItem';
import {
  loadProductsFromStorage,
  saveProductsToStorage,
} from '../../helpers/asyncStorage';
import { setProducts } from '../../store/products';
import AddButton from './components/AddButton/AddButton';
import { RootState } from '../../store/products';
import { getProducts } from '../../services/api';
import { calculateLikesSum } from '../../helpers/calculates';

const MemoizedProductsListItem = React.memo(ProductsListItem);

const ProductsList: FC = () => {
  const { navigate } = useNavigation<ProductsListScreenNavigationProp>();
  const dispatch = useDispatch();
  const updatedProducts = useSelector(
    (state: RootState) => state.products.products,
  );
  const [likes, setLikes] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const loadProducts = async () => {
    try {
      const productsFromAsyncStorage = await loadProductsFromStorage();

      if (!productsFromAsyncStorage.length) {
        const products = await getProducts();

        saveProductsToStorage(products);
        dispatch(setProducts(products));
      } else {
        dispatch(setProducts(productsFromAsyncStorage));
      }

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setLikes(calculateLikesSum(updatedProducts));
  }, [updatedProducts]);

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size={30} color={colors.jeffHardy} />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <NoResult children="Something went wrong, please try again ;(" />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderTitle children="List of products" />
        <Icon name="heart" size={30} color={colors.jeffHardy} />
        {likes > 0 && (
          <LikesCounterWrapper>
            <LikesCounter children={likes.toString()} />
          </LikesCounterWrapper>
        )}
      </Header>
      <FlatList
        data={updatedProducts}
        renderItem={({ item }) => <MemoizedProductsListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <AddButton onPress={() => navigate(Screens.AddProduct)} />
    </Container>
  );
};

export default ProductsList;
