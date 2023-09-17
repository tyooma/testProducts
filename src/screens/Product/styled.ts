import styled from 'styled-components/native';

import { colors, mainColors } from '../../constants/colors';

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  alignSelf?: string;
  color?: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  background-color: ${mainColors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity`
  padding: 8px;
  background-color: ${colors.marlboro};
  border-radius: 5px;
  align-self: flex-start;
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: ${colors.jeffHardy};
`;

export const ContentWrapper = styled.View`
  align-items: center;
  padding: 16px;
  border-radius: 15px;
`;

export const Image = styled.Image`
  margin-bottom: 20px;
  width: 300px;
  height: 300px;
`;

export const Text = styled.Text<TextProps>`
  margin-bottom: 10px;
  font-size: ${props => (props.fontSize ? props.fontSize : '18px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'flex-start')};
  color: ${props => (props.color ? props.color : colors.jeffHardy)};
`;

export const LikeButton = styled.TouchableOpacity``;
