import { styled } from 'styled-components/native';
import { colors } from '../../../constants/colors';

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

export const ImageInputButton = styled.TouchableOpacity``;

export const ProductImage = styled.Image`
  margin: 20px;
  width: 250px;
  height: 250px;
  align-self: center;
`;

export const HiddenInput = styled.TextInput`
  display: none;
`;

export const Button = styled.TouchableOpacity`
  margin-bottom: 40px;
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
