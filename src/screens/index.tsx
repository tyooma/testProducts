import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreensNavigationList, Screens } from '../types/navigation';
import SearchForm from './SearchForm/SearchForm';
import ExercisesList from './ExercisesList/ExercisesList';
import Exercise from './Exercise/Exercise';

const Stack = createNativeStackNavigator<ScreensNavigationList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name={Screens.SearchForm} component={SearchForm} />
        <Stack.Screen name={Screens.ExercisesList} component={ExercisesList} />
        <Stack.Screen name={Screens.Exercise} component={Exercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
