import React, {useState, useEffect} from 'react';

import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  coupon,
  datHang,
  logo_point,
  profile_source,
  Rewards,
  tichDiem,
} from '../../assets';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import List from './component/List/List';
import NotificationModal from './component/NotificationModal';
import ProfileModal from './component/ProfileModal';

import {DATA} from './data/Data.js';
import styles from './styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('screen');
const user_name = 'Dương Hà';
const point = 0;

const MainTinTuc = ({navigation}) => {
  const [isNotificationShow, setIsNotificationShow] = useState(false);
  const [isProfileShow, setIsProfileShow] = useState(false);
  const [user, setUser] = useState([]);

  const Lua_chon = ({image, title, name}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 10,
      }}
      onPress={() => (name ? navigation.navigate({name}) : alert({title}))}>
      <Image
        source={image}
        resizeMode="contain"
        style={{width: width * 0.25, height: height * 0.05}}
      />
      <Text style={{textAlign: 'center', fontSize: 11}}>{title}</Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    const userAuth = auth().currentUser;
    const userName = userAuth.name;
    const getUser = async () => {
      await database()
        .ref(`/users/${userAuth.uid}`)
        .on('value', (snapshot) => {
          setUser(snapshot.val());
          userName ? null : setIsProfileShow(true);
          console.log('A new node has been added', snapshot.val());
        });
    };
    getUser();
    console.log('userAuth: ', user);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EEEEEE" barStyle="dark-content" />
      <View style={styles.header_container}>
        <TouchableOpacity
          style={styles.profile_header}
          onPress={() => {
            setIsProfileShow(true);
          }}>
          <Image source={{uri: user.avatar}} style={styles.imageProfile} />
          <View style={{marginLeft: 7}}>
            <Text numberOfLines={1} style={styles.text_frontWeight_bold}>
              {user.name || 'ten cua ban'}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text>Khách hàng mới</Text>
              <Text style={styles.text_frontWeight_bold}> | {point}</Text>
              <Image source={logo_point} style={styles.logo_point}></Image>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsNotificationShow(true)}>
          <MaterialIcons name="notifications" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} />
      <ScrollView>
        <View style={styles.view_lua_chon}>
          <Lua_chon image={tichDiem} title="Tích Điểm" />
          <Lua_chon image={datHang} title="Đặt Hàng" name="DatHang" />
          <Lua_chon image={coupon} title="Coupon" />
          <Lua_chon image={Rewards} title="Rewards" />
        </View>
        <View style={{height: 10}} />

        <View>
          <List DATA={DATA} title1={'Ưu đãi đặc biệt'} />
          <List DATA={DATA} title1={'Cập nhật từ Nhà'} />
          <List DATA={DATA} title1={'#CoffeeLover'} />
        </View>
      </ScrollView>
      <NotificationModal
        isVisible={isNotificationShow}
        onHideModal={() => setIsNotificationShow(false)}
      />
      <ProfileModal
        isVisible={isProfileShow}
        onHideModal={() => setIsProfileShow(false)}
      />
    </View>
  );
};

export default MainTinTuc;
