/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/navigator/AuthProvider';
import RootNavigator from './src/navigator/RootNavigator';

const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;
