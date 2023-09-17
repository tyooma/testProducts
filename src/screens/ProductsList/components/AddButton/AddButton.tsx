import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { colors } from '../../../../constants/colors';
import { Button } from './styled';

interface ButtonProps {
  onPress: () => void;
}

const AddButton: FC<ButtonProps> = ({ onPress }) => (
  <Button onPress={onPress}>
    <Icon name="circle-plus" size={70} color={colors.jeffHardy} />
  </Button>
);

export default AddButton;
