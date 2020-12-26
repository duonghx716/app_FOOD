import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const user_name = 'Dương Hà';
const point = 0;
const logo_point = require('../../assets/logo_point.png');
const profile_source = require('../../assets/profile.jpg');
const Selector = ({icon, title}) => (
  <TouchableOpacity style={styles.selector_container}>
    <MaterialIcons name={icon} size={25} color="gray" />
    <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '200'}}>
      {title}
    </Text>
  </TouchableOpacity>
);
const MainTaiKhoan = () => {
  return (
    <View>
      <View style={styles.header_container}>
        <View style={styles.profile_header}>
          <Image source={profile_source} style={styles.imageProfile} />
          <View style={{marginLeft: 7}}>
            <Text numberOfLines={1} style={styles.text_frontWeight_bold}>
              {user_name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text>Khách hàng mới</Text>
            </View>
          </View>
        </View>
        <View style={{width: 30, height: 30, flexDirection: 'row'}}>
          <Text style={styles.text_frontWeight_bold}>{point}</Text>
          <Image source={logo_point} style={styles.logo_point}></Image>
        </View>
      </View>
      <View style={{height: 10}} />
      <Selector icon="stars" title="The Coffee House Rewards" />
      <Selector icon="portrait" title="Thông tin tài khoản" />
      <Selector icon="hearing" title="Nhạc đang phát" />
      <Selector icon="receipt" title="Lịch sử" />
      <Selector icon="support" title="Giúp đỡ" />
      <Selector icon="settings" title="Cài đặt" />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{marginLeft: 15, marginTop: 15}}>
        <Text style={{fontSize: 15, color: 'gray', fontWeight: '400'}}>
          Đăng xuất
        </Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  profile_header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  logo_point: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  text_frontWeight_bold: {
    fontWeight: '300',
    fontSize: 20,
  },
  selector_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
});
export default MainTaiKhoan;
