import { FlatList, View } from 'react-native';
import React, { FC, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  ExercisesListScreenNavigationProp,
  ExercisesListScreenRouteProp,
  Screens,
} from '../../types/navigation';
import { Exercise } from '../../types/data';
import { colors } from '../../constants/colors';
import {
  Container,
  Tile,
  GoBackButton,
  TileText,
  TileTextSmall,
  TileInfoWrapper,
} from './styled';
import { getColor } from '../../helpers/helpers';

const ExercisesList: FC = () => {
  const { navigate, goBack } =
    useNavigation<ExercisesListScreenNavigationProp>();
  const route = useRoute<ExercisesListScreenRouteProp>();
  const { exercises } = route.params;

  const renderExercise = ({
    item,
    index,
  }: {
    item: Exercise;
    index: number;
  }) => {
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

  return (
    <Container>
      <GoBackButton onPress={goBack}>
        <Icon name="chevron-left" size={30} color={colors.jeffHardy} />
      </GoBackButton>
      {exercises.length ? (
        <FlatList
          data={exercises}
          renderItem={renderExercise}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={{ paddingTop: 20, alignSelf: 'center' }}>
          <TileText children="Sorry, nothing was found for your query;(" />
        </View>
      )}
    </Container>
  );
};

export default ExercisesList;
