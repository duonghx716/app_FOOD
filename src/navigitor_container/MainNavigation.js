import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main from '../screen/Main';
import Welcome from '../screen/Welcome';
const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({}) => ({
            headerShown: false,
          })}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={({}) => ({
            headerShown: false,
          })}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;