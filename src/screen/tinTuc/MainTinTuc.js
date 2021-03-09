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
import {coupon, datHang, logo_point, Rewards, tichDiem} from '../../assets';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import List from './component/List/List';
import NotificationModal from './component/NotificationModal';
import ProfileModal from './component/ProfileModal';

// import {DATA} from './data/Data.js';
import styles from './styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
// import WebView from './component/WebView/webView';
import axios from 'axios';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
// import {set} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');
const point = 1000;

const MainTinTuc = ({navigation}) => {
  const [isNotificationShow, setIsNotificationShow] = useState(false);
  const [isProfileShow, setIsProfileShow] = useState(false);
  const [user, setUser] = useState({
    avatar:
      'https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg',
    name: 'User Name',
  });

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(true);

  const Lua_chon = ({image, title, name}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 10,
      }}
      onPress={() => (name ? navigation.navigate({name}) : alert(title))}>
      <Image
        source={image}
        resizeMode="contain"
        style={{width: width * 0.25, height: height * 0.05}}
      />
      <Text style={{textAlign: 'center', fontSize: 11}}>{title}</Text>
    </TouchableOpacity>
  );
  const userAuth = auth().currentUser;
  const getUser = async () => {
    await database()
      .ref(`/users/${userAuth.uid}`)
      .on('value', (snapshot) => {
        setUser(snapshot.val());
      });
  };
  const getData = async () => {
    await axios
      .all([
        axios.get(
          'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1cc6aa66026149dbbf8ec19d5f5f14c2',
        ),
        axios.get(
          'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=1cc6aa66026149dbbf8ec19d5f5f14c2',
        ),
        axios.get(
          'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1cc6aa66026149dbbf8ec19d5f5f14c2',
        ),
      ])
      .then(
        axios.spread((data1, data2, data3) => {
          const DATA1 = data1.data.articles;
          setData1(DATA1);
          const DATA2 = data2.data.articles;
          setData2(DATA2);
          const DATA3 = data3.data.articles;
          setData3(DATA3);
        }),
      )
      .then(() => setIsShowLoading(false));
  };
  useEffect(() => {
    getUser().catch((e) => {
      console.log(e);
    });
    getData().catch((e) => {
      console.log(e);
    });
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
          <Lua_chon image={coupon} title="Khuyến mãi" />
          <Lua_chon image={Rewards} title="Đổi quà" />
        </View>
        <View style={{height: 10}} />

        <View>
          <List DATA={data1} title={'Ưu đãi đặc biệt'} />
          <List DATA={data2} title={'Cập nhật từ Nhà'} />
          <List DATA={data3} title={'CoffeeLover'} />
        </View>
      </ScrollView>

      <OrientationLoadingOverlay
        visible={isShowLoading}
        color="white"
        indicatorSize="large"
        messageFontSize={24}
        message="Loading..."
      />

      <NotificationModal
        isVisible={isNotificationShow}
        onHideModal={() => setIsNotificationShow(false)}
      />
      <ProfileModal
        isVisible={isProfileShow}
        onHideModal={() => setIsProfileShow(false)}
      />
      {/* <WebView /> */}
    </View>
  );
};

export default MainTinTuc;
