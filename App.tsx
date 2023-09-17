import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/screens';
import { StatusBar } from 'react-native';
import { mainColors } from './src/constants/colors';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={mainColors.white} barStyle="dark-content" />
    <Navigation />
  </Provider>
);

export default App;
