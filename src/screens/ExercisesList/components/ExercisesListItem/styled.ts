import { styled } from 'styled-components/native';

import { colors } from '../../../../constants/colors';

interface TileProps {
  backgroundColor?: string;
}

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
