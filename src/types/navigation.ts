import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { Exercise, Exercises } from './data';

export enum Screens {
  SearchForm = 'SearchForm',
  ExercisesList = 'ExercisesList',
  Exercise = 'Exercise',
}

export type ScreensNavigationList = {
  SearchForm: undefined;
  ExercisesList: { exercises: Exercises };
  Exercise: { exercise: Exercise; color: string };
};

export type SearchFormScreenNavigationProp = NativeStackNavigationProp<
  ScreensNavigationList,
  Screens.SearchForm
>;

export type ExercisesListScreenNavigationProp = NativeStackNavigationProp<
  ScreensNavigationList,
  Screens.ExercisesList
>;

export type ExercisesListScreenRouteProp = RouteProp<
  ScreensNavigationList,
  Screens.ExercisesList
>;

export type ExerciseScreenNavigationProp = NativeStackNavigationProp<
  ScreensNavigationList,
  Screens.Exercise
>;

export type ExerciseScreenRouteProp = RouteProp<
  ScreensNavigationList,
  Screens.Exercise
>;
