import { styled } from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

interface TileProps {
  backgroundColor?: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 16px;
  padding-horizontal: 16px;
  background-color: ${mainColors.white};
`;

export const Tile = styled.TouchableOpacity<TileProps>`
  flex: 1;
  justify-content: space-between;
  margin: 8px;
  padding: 24px;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
`;

export const TileInfoWrapper = styled.View``;

export const TileText = styled.Text<TileProps>`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${props =>
    props.backgroundColor === '#363636' ? colors.marlboro : colors.jeffHardy};
`;

export const TileTextSmall = styled.Text<TileProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${props =>
    props.backgroundColor === '#363636' ? colors.marlboro : colors.jeffHardy};
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-bottom: 8px;
`;
