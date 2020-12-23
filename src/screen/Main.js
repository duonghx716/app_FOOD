import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MainTinTuc from './tinTuc/MainTinTuc';
import MainTaiKhoan from './taiKhoan/MainTaiKhoan';
import MainDatHang from './datHang/MainDatHang';
import MainCuaHang from './cuaHang/MainCuaHang';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 11,
            justifyContent: 'center',
            marginBottom: 5,
          },
          activeTintColor: '#ea8027',
          inactiveTintColor: '#666666',
        }}>
        <Tab.Screen
          name="TinTuc"
          component={MainTinTuc}
          options={{
            tabBarLabel: 'Tin Tức',
            tabBarIcon: ({color}) => (
              <FontAwesome name="align-justify" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="DatHang"
          component={MainDatHang}
          options={{
            tabBarLabel: 'Đăt Hàng',
            tabBarIcon: ({color}) => (
              <FontAwesome name="motorcycle" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CuaHang"
          component={MainCuaHang}
          options={{
            tabBarLabel: 'Cửa Hàng',
            tabBarIcon: ({color}) => (
              <FontAwesome name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TaiKhoan"
          component={MainTaiKhoan}
          options={{
            tabBarLabel: 'Tài Khoản',
            tabBarIcon: ({color}) => (
              <FontAwesome name="user" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
