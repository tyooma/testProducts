import React from 'react';

import Navigation from './src/screens';
import { StatusBar } from 'react-native';
import { mainColors } from './src/constants/colors';

const App = () => (
  <>
    <StatusBar backgroundColor={mainColors.white} barStyle="dark-content" />
    <Navigation />
  </>
);

export default App;
