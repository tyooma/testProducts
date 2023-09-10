import { styled } from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 16px;
  padding-horizontal: 16px;
  background-color: ${mainColors.white};
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-bottom: 8px;
`;

export const NoResultText = styled.Text`
  padding-top: 20px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  align-self: center;
  color: ${colors.jeffHardy};
`;
