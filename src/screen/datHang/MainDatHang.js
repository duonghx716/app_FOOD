import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import DoAn from './DoAn';
import PhoBien from './PhoBien';
import ThucAn from './ThucAn';
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
        // component={DoAn}
        children={() => <PhoBien propName={0} />}
      />
      <Tab.Screen
        name="DoAn"
        component={DoAn}
        options={{tabBarLabel: 'Đồ ăn'}}
      />
      <Tab.Screen
        name="ThucAn"
        component={ThucAn}
        options={{tabBarLabel: 'Thức ăn'}}
      />
    </Tab.Navigator>
  );
};

export default MainDatHang;
