import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  ProductScreenNavigationProp,
  ProductScreenRouteProp,
} from '../../types/navigation';
import { colors } from '../../constants/colors';
import {
  Container,
  ContentWrapper,
  GoBackButton,
  Header,
  Text,
  Image,
  Title,
  LikeButton,
} from './styled';
import { likeProduct } from '../../store/products';

const Product: FC = () => {
  const { goBack } = useNavigation<ProductScreenNavigationProp>();
  const dispatch = useDispatch();
  const route = useRoute<ProductScreenRouteProp>();
  const { product } = route.params;
  const [liked, setLiked] = useState<boolean | any>(product.liked);

  const like = () => {
    const payload = {
      productId: product.id,
      liked: !liked,
    };

    dispatch(likeProduct(payload));
    setLiked(!liked);
  };

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" size={30} color={colors.jeffHardy} />
        </GoBackButton>
        <LikeButton onPress={like}>
          <Icon
            name={liked ? 'heart' : 'heart-o'}
            size={30}
            color={colors.please}
            style={{ alignSelf: 'flex-end', marginTop: 8 }}
          />
        </LikeButton>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          fontSize="16px"
          alignSelf="center"
          color={colors.drain}
          children={product.category}
        />
        <Title children={product.title} />
        <ContentWrapper>
          <Image resizeMode="contain" source={{ uri: product.image }} />
          <Text
            fontSize="20px"
            fontWeight="700"
            children={`${product.price} $`}
          />
          <Text children={product.description} />
        </ContentWrapper>
      </ScrollView>
    </Container>
  );
};

export default Product;
