import { styled } from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  background-color: ${mainColors.white};
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  padding: 16px;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.jeffHardy};
  border-bottom-width: 1px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  background-color: ${colors.marlboro};
  border-radius: 5px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const InputWrapper = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.jeffHardy};
`;

export const Input = styled.TextInput`
  padding: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-radius: 10px;
`;

export const Validator = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.redDress};
`;

export const Button = styled.TouchableOpacity`
  padding-vertical: 15px;
  padding-horizontal: 100px;
  margin-top: 10px;
  background-color: ${colors.jeffHardy};
  border-radius: 10px;
  opacity: ${props => (props.disabled ? 0.8 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  align-self: center;
  color: ${colors.marlboro};
`;
