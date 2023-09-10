import styled from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

interface ColorProp {
  color: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  background-color: ${mainColors.white};
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${colors.marlboro};
  border-radius: 5px;
  align-self: flex-start;
`;

export const Header = styled.Text`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: ${colors.jeffHardy};
`;

export const ContentWrapper = styled.View<ColorProp>`
  padding: 16px;
  background-color: ${props => props.color};
  border-radius: 15px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Label = styled.Text<ColorProp>`
  font-size: 18px;
  font-weight: 900;
  color: ${props =>
    props.color === '#363636' ? colors.marlboro : colors.jeffHardy};
`;

export const Text = styled.Text<ColorProp>`
  font-size: 18px;
  font-weight: 500;
  color: ${props =>
    props.color === '#363636' ? colors.marlboro : colors.jeffHardy};
`;

export const WrappedLabel = styled.Text<ColorProp>`
  font-size: 18px;
  font-weight: 900;
  line-height: 24px;
  text-align: justify;
  color: ${props =>
    props.color === '#363636' ? colors.marlboro : colors.jeffHardy};
`;

export const WrappedText = styled.Text<ColorProp>`
  font-weight: 500;
  line-height: 24px;
  text-align: justify;
`;
