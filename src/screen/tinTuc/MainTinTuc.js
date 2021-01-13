import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import List from './component/List';
import {DATA, DATA_notification} from './data/Data.js';
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
  const [
    modal_Notifications_Visible,
    set_Modal_Notifications_Visible,
  ] = useState(false);
  const [modal_profile_Visible, set_Modal_profile_Visible] = useState(false);
  const user = {
    id: 1,
    name: 'Dương Hà',
    phoneNumber: '0967884135',
    birthday: '12/02/1996',
    gender: 'Nam',
  };

  const Item_Notification = ({item}) => (
    <View style={styles.container_Item_Notification}>
      <Image
        source={{uri: item.image}}
        style={{width: 100, height: 100}}
        resizeMode={'cover'}
      />
      <View style={{alignItems: 'flex-start', marginLeft: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            width: width * 0.71,
            lineHeight: 25,
          }}
          numberOfLines={2}>
          {item.description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 10}}>{item.date}</Text>
          <Text>{item.time}</Text>
        </View>
      </View>
    </View>
  );
  const Item_Profile = ({title, value}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          padding: 15,
          borderBottomColor: '#EEEEEE',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: 'gray', fontSize: 15}}>{title}</Text>
        <Text style={{color: 'black', fontSize: 15}}>{value}</Text>
      </View>
    );
  };
  const modal_profile = (
    <Modal
      visible={modal_profile_Visible}
      animationType={'slide'}
      transparent={true}>
      <View style={[{...styles.container}, {backgroundColor: '#fff'}]}>
        <View
          style={[{...styles.container}, {flexDirection: 'row', padding: 15}]}>
          <View style={styles.container_in_modal_profile}>
            <TouchableOpacity
              onPress={() => {
                alert('thay doi avatar profile');
              }}>
              <Image
                source={require('../../assets/profile.jpg')}
                style={styles.image_in_modal_profile}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Text style={styles.text_size}>Dương Hà</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text_size}>29</Text>
              <Image source={logo_point} style={{width: 30, height: 30}} />
              <Text style={styles.text_size}> | Khách hàng mới</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_chang_profile}
            onPress={() => {
              set_Modal_profile_Visible(false);
            }}>
            <MaterialIcons name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2, flexDirection: 'column'}}>
          <View style={styles.view_thongtin}>
            <Text style={styles.text_in_viewThongtin}>Thông Tin cá nhân</Text>
            <TouchableOpacity
              onPress={() => {
                alert('doi thong tin');
              }}>
              <Text style={{color: 'blue', fontSize: 18}}>Đổi</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Item_Profile title="Tên" value={user.name} />
            <Item_Profile title="Sinh nhật" value={user.birthday} />
            <Item_Profile title="Số Điện Thoại" value={user.phoneNumber} />
            <Item_Profile title="Giới Tính" value={user.gender} />
          </View>
        </View>
      </View>
    </Modal>
  );
  const modal_notifications = (
    <Modal
      visible={modal_Notifications_Visible}
      transparent={true}
      animationType={'slide'}>
      <View style={styles.container}>
        <View style={styles.container_modal_notification}>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              set_Modal_Notifications_Visible(false);
            }}>
            <MaterialIcons name="close" size={30} color="gray" />
          </TouchableOpacity>
          <Text style={styles.text_thongbao}>Thông Báo</Text>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              alert('Bạn có chắc chắn đánh dấu đã xem tất cả các thông báo?');
            }}>
            <MaterialIcons name="grading" size={30} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.view_margin} />
        <View style={styles.view_FlatList}>
          <FlatList
            data={DATA_notification}
            horizontal={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Item_Notification item={item} />}
          />
        </View>
      </View>
    </Modal>
  );
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
        <TouchableOpacity
          style={styles.profile_header}
          onPress={() => {
            set_Modal_profile_Visible(true);
          }}>
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
        <TouchableOpacity
          onPress={() => {
            set_Modal_Notifications_Visible(true);
          }}>
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
      {modal_notifications}
      {modal_profile}
    </View>
  );
};

export default MainTinTuc;
