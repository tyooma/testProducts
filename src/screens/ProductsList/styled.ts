import { styled } from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: 16px;
  background-color: ${mainColors.white};
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  padding: 16px;
  font-size: 24px;
  font-weight: 700;
  align-self: center;
  color: ${colors.jeffHardy};
  border-bottom-width: 1px;
`;

export const LikesCounterWrapper = styled.View`
  position: absolute;
  right: 60px;
  bottom: 16px;
  width: 22px;
  height: 22px;
  border-radius: 50px;
  background-color: ${colors.please};
`;

export const LikesCounter = styled.Text`
  font-size: 14px;
  font-weight: 700;
  align-self: center;
  color: ${colors.marlboro};
`;

export const NoResult = styled.Text`
  font-size: 18px;
  font-weight: 700;
  align-self: center;
  color: ${colors.jeffHardy};
`;
