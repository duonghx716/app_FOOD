import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main from '../screen/Main';
import Welcome from '../screen/welcome/Welcome';
import Intro from '../screen/welcome/introSlider';
import Login from '../screen/welcome/login';
import Registration from '../screen/welcome/registration';
import MainTaiKhoan from '../screen/taiKhoan/MainTaiKhoan';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
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
        name="Intro"
        component={Intro}
      />
      <Stack.Screen
        options={({}) => ({
          headerShown: false,
        })}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={({}) => ({
          headerShown: false,
        })}
        name="Registration"
        component={Registration}
      />
      <Stack.Screen
        options={({}) => ({
          headerShown: false,
        })}
        name="MainTaiKhoan"
        component={MainTaiKhoan}
      />
      <Stack.Screen
        options={({}) => ({
          headerShown: false,
        })}
        name="Main"
        component={Main}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
