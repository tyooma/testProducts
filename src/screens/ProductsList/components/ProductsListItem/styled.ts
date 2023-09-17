import { styled } from 'styled-components/native';

import { colors } from '../../../../constants/colors';

export const Tile = styled.TouchableOpacity`
  margin: 8px;
  padding: 24px;
  border-radius: 15px;
  shadow-color: ${colors.slay};
  elevation: 6;
`;

export const TileInfoWrapper = styled.View`
  padding-top: 24px;
  align-items: center;
`;

export const Image = styled.Image`
  margin-bottom: 20px;
  width: 250px;
  height: 250px;
`;

export const TileText = styled.Text`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.jeffHardy};
`;

export const TileTextSmall = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.drain};
`;

export const LikeButton = styled.TouchableOpacity``;
