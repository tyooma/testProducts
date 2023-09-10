import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  ExerciseScreenNavigationProp,
  ExerciseScreenRouteProp,
} from '../../types/navigation';
import { colors } from '../../constants/colors';
import {
  Container,
  ContentRow,
  ContentWrapper,
  GoBackButton,
  Header,
  Label,
  Text,
  WrappedLabel,
  WrappedText,
} from './styled';

const Exercise: FC = () => {
  const { goBack } = useNavigation<ExerciseScreenNavigationProp>();
  const route = useRoute<ExerciseScreenRouteProp>();
  const { exercise, color } = route.params;

  return (
    <Container>
      <GoBackButton onPress={goBack}>
        <Icon name="chevron-left" size={30} color={colors.jeffHardy} />
      </GoBackButton>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header children={exercise.name} />
        <ContentWrapper color={color}>
          <ContentRow>
            <Label children="Type: " color={color} />
            <Text children={exercise.type} color={color} />
          </ContentRow>
          <ContentRow>
            <Label children="Muscle: " color={color} />
            <Text children={exercise.muscle} color={color} />
          </ContentRow>
          <ContentRow>
            <Label children="Difficulty: " color={color} />
            <Text children={exercise.difficulty} color={color} />
          </ContentRow>
          <ContentRow>
            <Label children="Equipment: " color={color} />
            <Text children={exercise.equipment} color={color} />
          </ContentRow>
          <ContentRow>
            <WrappedLabel color={color}>
              Instructions:
              <WrappedText
                children={` ${exercise.instructions}`}
                color={color}
              />
            </WrappedLabel>
          </ContentRow>
        </ContentWrapper>
      </ScrollView>
    </Container>
  );
};

export default Exercise;
