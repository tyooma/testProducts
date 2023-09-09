import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { searchExercises } from '../../api/requests';
import {
  Screens,
  SearchFormScreenNavigationProp,
} from '../../types/navigation';
import { Container, Form, Input, Label, Button, ButtonText } from './styled';

const SearchForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [muscle, setMuscle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const { navigate } = useNavigation<SearchFormScreenNavigationProp>();

  const searchExercisesHandler = async () => {
    try {
      const exercises = await searchExercises(name, type, muscle, difficulty);

      navigate(Screens.ExercisesList, { exercises });
    } catch (error) {
      Alert.alert('Something went wrong, please try again');
    }

    setName('');
    setType('');
    setMuscle('');
    setDifficulty('');
  };

  return (
    <Container>
      <Form>
        <Label children="Name" />
        <Input placeholder="Enter name" value={name} onChangeText={setName} />
        <Label children="Type" />
        <Input placeholder="Enter type" value={type} onChangeText={setType} />
        <Label children="Muscle" />
        <Input
          placeholder="Enter muscle"
          value={muscle}
          onChangeText={setMuscle}
        />
        <Label children="Difficulty" />
        <Input
          placeholder="Enter difficulty"
          value={difficulty}
          onChangeText={setDifficulty}
        />
      </Form>
      <Button
        onPress={searchExercisesHandler}
        disabled={!name && !type && !muscle && !difficulty}>
        <ButtonText children="Search" />
      </Button>
    </Container>
  );
};

export default SearchForm;
