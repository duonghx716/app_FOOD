import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainCuaHang from './cuaHang/MainCuaHang';
import MainDatHang from './datHang/MainDatHang';
import MainTaiKhoan from './taiKhoan/MainTaiKhoan';
import MainTinTuc from './tinTuc/MainTinTuc';
// import WebView from '../screen/tinTuc/component/WebView/webView';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="TinTuc"
      tabBarOptions={{
        showLabel: true,
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
          tabBarAccessibilityLabel: 'cuahang',
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
      {/* <Tab.Screen name="WebView" component={WebView} /> */}
    </Tab.Navigator>
  );
};

export default Main;
