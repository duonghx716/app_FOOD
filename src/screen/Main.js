import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

import MainTinTuc from './tinTuc/MainTinTuc';
import MainTaiKhoan from './taiKhoan/MainTaiKhoan';
import MainDatHang from './datHang/MainDatHang';
import MainCuaHang from './cuaHang/MainCuaHang';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TinTuc" component={MainTinTuc} />
        <Stack.Screen name="DatHang" component={MainDatHang} />
        <Stack.Screen name="CuaHang" component={MainCuaHang} />
        <Stack.Screen name="TaiKhoan" component={MainTaiKhoan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
