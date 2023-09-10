import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Tile, TileText, TileTextSmall, TileInfoWrapper } from './styled';
import { Exercise } from '../../../../types/data';
import {
  ExercisesListScreenNavigationProp,
  Screens,
} from '../../../../types/navigation';
import { getColor } from '../../../../helpers/helpers';
import { colors } from '../../../../constants/colors';
import { useNavigation } from '@react-navigation/native';

interface ExercisesListItemProps {
  item: Exercise;
  index: number;
}

const ExercisesListItem: React.FC<ExercisesListItemProps> = ({
  item,
  index,
}) => {
  const { navigate } = useNavigation<ExercisesListScreenNavigationProp>();
  const backgroundColor = getColor(colors, index);

  return (
    <Tile
      backgroundColor={backgroundColor}
      onPress={() =>
        navigate(Screens.Exercise, { exercise: item, color: backgroundColor })
      }>
      <TileText backgroundColor={backgroundColor} children={item.name} />
      <TileInfoWrapper>
        <TileTextSmall
          backgroundColor={backgroundColor}
          children={`🏋️ ${item.type}`}
        />
        <TileTextSmall
          backgroundColor={backgroundColor}
          children={`💪 ${item.muscle}`}
        />
        <TileTextSmall
          backgroundColor={backgroundColor}
          children={`🔥 ${item.difficulty}`}
        />
      </TileInfoWrapper>
      <Icon
        name="arrow-down-right"
        size={30}
        color={
          backgroundColor === '#363636' ? colors.marlboro : colors.jeffHardy
        }
        style={{ alignSelf: 'flex-end', marginTop: 8 }}
      />
    </Tile>
  );
};

export default ExercisesListItem;
