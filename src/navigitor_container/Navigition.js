import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screen/Main';
import Welcome from '../screen/Welcome';
const Stack = createStackNavigator();
const Navigition = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigition;
