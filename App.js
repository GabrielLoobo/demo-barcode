

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { HomeScreen } from './src/modules/HomeScreen';

const App = () =>{
  return (
    <HomeScreen />
  );
};

export default App;