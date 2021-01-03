import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

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
                source={require('../../assets/moto_logo.png')}
                style={styles.images}
              />
              <Text>Giao tận nơi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.touchableOpacity}>
              <Image
                resizeMode="contain"
                source={require('../../assets/moto_logo.png')}
                style={{width: 70, height: 70, borderRadius: 35}}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainerModal: {
    backgroundColor: '#fff',
    width: width - 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  touchableOpacity: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {width: 70, height: 70, borderRadius: 35},
});

export default MainDatHang;
