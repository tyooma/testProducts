import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  Tile,
  TileText,
  TileTextSmall,
  TileInfoWrapper,
  Image,
  LikeButton,
} from './styled';
import { Product } from '../../../../types/data';
import {
  ProductsListScreenNavigationProp,
  Screens,
} from '../../../../types/navigation';
import { colors } from '../../../../constants/colors';
import { cutString } from '../../../../helpers/typography';
import { likeProduct } from '../../../../store/products';

interface ProductsListItemProps {
  item: Product;
}

const ProductsListItem: React.FC<ProductsListItemProps> = ({ item }) => {
  const { navigate } = useNavigation<ProductsListScreenNavigationProp>();
  const dispatch = useDispatch();

  const like = () => {
    const payload = {
      productId: item.id,
      liked: !item.liked,
    };

    dispatch(likeProduct(payload));
  };

  return (
    <Tile onPress={() => navigate(Screens.Product, { product: item })}>
      <TileInfoWrapper>
        <Image resizeMode="contain" source={{ uri: item.image }} />
        <TileText children={cutString(item.title, 60)} />
        <TileTextSmall children={`${item.price} $`} />
      </TileInfoWrapper>
      <LikeButton onPress={like}>
        <Icon
          name={item.liked ? 'heart' : 'heart-o'}
          size={30}
          color={colors.please}
          style={{ alignSelf: 'flex-end', marginTop: 8 }}
        />
      </LikeButton>
    </Tile>
  );
};

export default ProductsListItem;
