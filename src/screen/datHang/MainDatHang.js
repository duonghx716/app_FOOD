import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DoAn from './tab_navigation/DoAn';
import PhoBien from './tab_navigation/PhoBien';
import ThucUong from './tab_navigation/ThucUong';

const Tab = createMaterialTopTabNavigator();
const MainDatHang = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  useEffect(
    () =>
      navigation.addListener('focus', () =>
        setTimeout(() => {
          setVisible(true);
        }, 200),
      ),
    [],
  );
  const modal = (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <TouchableOpacity
        onPress={() => setVisible(false)}
        style={styles.containerModal}>
        <View style={styles.childContainerModal}>
          <Text style={{marginBottom: 20}}>
            Vui lòng chọn hình thức giao hàng
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.touchableOpacity}>
              <Image
                resizeMode="contain"
                source={require('../../assets/GiaoTanNoi.png')}
                style={styles.images}
              />
              <Text>Giao tận nơi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.touchableOpacity}>
              <Image
                resizeMode="contain"
                source={require('../../assets/TuDenLay.png')}
                style={styles.images}
              />
              <Text>Tự đến lấy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="PhoBien"
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          labelStyle: {fontSize: 12},
          style: {backgroundColor: '#fff'},
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
      {modal}
    </View>
  );
};

export default MainDatHang;
