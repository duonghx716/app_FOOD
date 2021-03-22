import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainCuaHang from '../screen/cuaHang/MainCuaHang';

import MainDatHang from '../screen/datHang/MainDatHang';
import MainTaiKhoan from '../screen/taiKhoan/MainTaiKhoan';
import MainTinTuc from '../screen/tinTuc/MainTinTuc';

import Intro from '../screen/welcome/introSlider/index';
import Login from '../screen/welcome/login/index';
import Registration from '../screen/welcome/registration/index';
import WebView from '../screen/tinTuc/component/WebView/webView';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="TinTuc" component={MainTinTuc} />
    <HomeStack.Screen name="WebView" component={WebView} />
  </HomeStack.Navigator>
);

const BottomTabNavigator = createBottomTabNavigator();
const BottomTabNavigatorScreen = () => (
  <BottomTabNavigator.Navigator
    initialRouteName="TinTuc"
    tabBarOptions={{
      showLabel: true,
      labelStyle: {
        fontSize: 10,
        justifyContent: 'center',
        marginVertical: 5,
      },
      activeTintColor: '#ea8027',
      inactiveTintColor: '#666666',
    }}>
    <BottomTabNavigator.Screen
      name="TinTuc"
      component={HomeStackScreen}
      options={{
        tabBarAccessibilityLabel: 'cuahang',
        tabBarLabel: 'Tin Tức',
        tabBarIcon: ({color}) => (
          <FontAwesome name="align-justify" size={20} color={color} />
        ),
      }}
    />
    <BottomTabNavigator.Screen
      name="DatHang"
      component={MainDatHang}
      options={{
        tabBarLabel: 'Đăt Hàng',
        tabBarIcon: ({color}) => (
          <FontAwesome name="motorcycle" size={20} color={color} />
        ),
      }}
    />
    <BottomTabNavigator.Screen
      name="CuaHang"
      component={MainCuaHang}
      options={{
        tabBarLabel: 'Cửa Hàng',
        tabBarIcon: ({color}) => (
          <FontAwesome name="home" size={20} color={color} />
        ),
      }}
    />
    <BottomTabNavigator.Screen
      name="TaiKhoan"
      component={MainTaiKhoan}
      options={{
        tabBarLabel: 'Tài Khoản',
        tabBarIcon: ({color}) => (
          <FontAwesome name="user" size={20} color={color} />
        ),
      }}
    />
  </BottomTabNavigator.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Registration" component={Registration} />
  </AuthStack.Navigator>
  
);
const IntroStack = createStackNavigator();
const IntroStackScreen = () => (
  <IntroStack.Navigator screenOptions={{headerShown: false}}>
    <IntroStack.Screen name="Intro" component={Intro} />
    <IntroStack.Screen name="Login" component={Login} />
    <IntroStack.Screen name="Registration" component={Registration} />
  </IntroStack.Navigator>
);
const RootStack = createStackNavigator();
const RootStackScreen = ({userToken, checkIntro}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    {userToken ? (
      <RootStack.Screen name="App" component={BottomTabNavigatorScreen} />
    ) : checkIntro ? (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    ) : (
      <RootStack.Screen name="Intro" component={IntroStackScreen} />
    )}
  </RootStack.Navigator>
);

export default RootStackScreen;
