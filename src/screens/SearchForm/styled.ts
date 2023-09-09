import { styled } from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 40px;
  padding-horizontal: 20px;
  background-color: ${mainColors.white};
`;

export const Form = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.jeffHardy};
`;

export const Input = styled.TextInput`
  padding: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  border-bottom-width: 1px;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding-vertical: 15px;
  padding-horizontal: 100px;
  background-color: ${colors.jeffHardy};
  border-radius: 10px;
  opacity: ${props => (props.disabled ? 0.8 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.marlboro};
`;
