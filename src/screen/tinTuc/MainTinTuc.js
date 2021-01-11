import React from 'react';
import {Dimensions, Image, StatusBar, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import List from './component/List';
import {DATA} from './data/Data.js';
import styles from './styles';
const {width, height} = Dimensions.get('screen');
const MainTinTuc = ({navigation}) => {
  const profile_source = require('../../assets/profile.jpg');
  const logo_point = require('../../assets/logo_point.png');
  const tichDiem = require('../../assets/tichDiem.png');
  const coupon = require('../../assets/coupon.png');
  const datHang = require('../../assets/datHang.png');
  const Rewards = require('../../assets/Rewards.png');
  const user_name = 'Dương Hà';
  const point = 0;

  const Lua_chon = ({image, title}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 10,
      }}>
      <Image
        source={image}
        resizeMode="contain"
        style={{width: width * 0.25, height: height * 0.05}}
      />
      <Text style={{textAlign: 'center', fontSize: 11}}>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EEEEEE" barStyle="dark-content" />
      <View style={styles.header_container}>
        <TouchableOpacity style={styles.profile_header}>
          <Image source={profile_source} style={styles.imageProfile} />
          <View style={{marginLeft: 7}}>
            <Text numberOfLines={1} style={styles.text_frontWeight_bold}>
              {user_name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text>Khách hàng mới</Text>
              <Text style={styles.text_frontWeight_bold}> | {point}</Text>
              <Image source={logo_point} style={styles.logo_point}></Image>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} />
      <ScrollView>
        <View style={styles.view_lua_chon}>
          <Lua_chon image={tichDiem} title="Tích Điểm" />
          <Lua_chon image={datHang} title="Đặt Hàng" />
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
    </View>
  );
};

export default MainTinTuc;
