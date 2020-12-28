import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import DoAn from './tab_navigation/DoAn';
import PhoBien from './tab_navigation/PhoBien';
import ThucUong from './tab_navigation/ThucUong';
const Tab = createMaterialTopTabNavigator();
const MainDatHang = () => {
  return (
    <Tab.Navigator
      initialRouteName="PhoBien"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: '#fff'},
        pressColor: '#ffb042',
      }}>
      <Tab.Screen
        options={{tabBarLabel: 'Phổ Biến'}}
        name="PhoBien"
        component={PhoBien}
      />

      <Tab.Screen
        name="ThucUong"
        component={ThucUong}
        options={{tabBarLabel: 'Thức uống'}}
      />
      <Tab.Screen
        name="DoAn"
        component={DoAn}
        options={{tabBarLabel: 'Đồ ăn'}}
      />
    </Tab.Navigator>
  );
};

export default MainDatHang;
