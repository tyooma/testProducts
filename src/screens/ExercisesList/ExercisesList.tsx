import { FlatList } from 'react-native';
import React, { FC } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  ExercisesListScreenNavigationProp,
  ExercisesListScreenRouteProp,
} from '../../types/navigation';
import { colors } from '../../constants/colors';
import { Container, GoBackButton, NoResultText } from './styled';
import ExercisesListItem from './components/ExercisesListItem/ExercisesListItem';

const ExercisesList: FC = () => {
  const { goBack } = useNavigation<ExercisesListScreenNavigationProp>();
  const route = useRoute<ExercisesListScreenRouteProp>();
  const { exercises } = route.params;

  return (
    <Container>
      <GoBackButton onPress={goBack}>
        <Icon name="chevron-left" size={30} color={colors.jeffHardy} />
      </GoBackButton>
      {exercises.length ? (
        <FlatList
          data={exercises}
          renderItem={({ item, index }) => (
            <ExercisesListItem item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <NoResultText children="Sorry, nothing was found for your query;(" />
      )}
    </Container>
  );
};

export default ExercisesList;
