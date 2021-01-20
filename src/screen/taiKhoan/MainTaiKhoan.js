import React, {useContext} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../navigator/AuthProvider';
import {styles} from './styles';
const user_name = 'Dương Hà';
const point = 0;
const logo_point = require('../../assets/logo_point.png');
const profile_source = require('../../assets/profile.jpg');
const Selector = ({icon, title}) => (
  <TouchableOpacity style={styles.selector_container}>
    <MaterialIcons name={icon} size={25} color="gray" />
    <Text style={styles.text_title}>{title}</Text>
  </TouchableOpacity>
);
const MainTaiKhoan = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity style={styles.header_container}>
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
        <View style={styles.view_point}>
          <Text style={styles.text_frontWeight_bold}>{point}</Text>
          <Image source={logo_point} style={styles.logo_point}></Image>
        </View>
      </TouchableOpacity>
      <View style={{height: 10}} />
      <Selector icon="stars" title="The Coffee House Rewards" />
      <Selector icon="portrait" title="Thông tin tài khoản" />
      <Selector icon="hearing" title="Nhạc đang phát" />
      <Selector icon="receipt" title="Lịch sử" />
      <Selector icon="support" title="Giúp đỡ" />
      <Selector icon="settings" title="Cài đặt" />
      <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={styles.TouchableOpacity}
        onPress={() => logout()}>
        <Text style={styles.text_dangxuat}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainTaiKhoan;
