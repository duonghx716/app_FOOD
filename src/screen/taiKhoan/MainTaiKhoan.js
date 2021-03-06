import React, {useContext, useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../navigator/AuthProvider';
import Selector from './Selector';

import {styles} from './styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {
  TCH_Rewards,
  ThongTinTaiKhoan,
  NhacDangPhat,
  LichSu,
  GiupDo,
  CaiDat,
} from '../../assets/string';

const point = 0;
const logo_point = require('../../assets/logo_point.png');

const MainTaiKhoan = () => {
  const {logout} = useContext(AuthContext);
  const [user, setUser] = useState([]);

  React.useEffect(() => {
    const userAuth = auth().currentUser;
    const getUser = async () => {
      await database()
        .ref(`/users/${userAuth.uid}`)
        .on('value', (snapshot) => {
          setUser(snapshot.val());
          console.log('user hien tai', snapshot.val());
        });
    };
    getUser();
    console.log('user: ', user);
  }, []);
  return (
    <View>
      <View style={styles.header_container}>
        <View style={styles.profile_header}>
          <Image
            source={{
              uri:
                user.avatar ||
                'https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg',
            }}
            style={styles.imageProfile}
          />
          <View style={{marginLeft: 7}}>
            <Text numberOfLines={1} style={styles.text_frontWeight_bold}>
              {user.name || 'User Name'}
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
      </View>

      <View style={{height: 10}} />

      <Selector
        icon="stars"
        title="The Coffee House Rewards"
        chose={TCH_Rewards}
      />
      <Selector
        icon="portrait"
        title="Thông tin tài khoản"
        chose={ThongTinTaiKhoan}
      />
      <Selector icon="hearing" title="Nhạc đang phát" chose={NhacDangPhat} />
      <Selector icon="receipt" title="Lịch sử" chose={LichSu} />
      <Selector icon="support" title="Giúp đỡ" chose={GiupDo} />
      <Selector icon="settings" title="Cài đặt" chose={CaiDat} />

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
