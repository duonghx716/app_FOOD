import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainTinTuc = () => {
  const profile_source = require('../../assets/profile.jpg');
  const logo_point = require('../../assets/logo_point.png');
  const logo_lua_chon = require('../../assets/moto_logo.png');
  const user_name = 'Dương Hà';
  const rank_user = 'Khách hàng mới';
  const point = 0;
  const DATA = [
    {
      id: 1,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 2,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 3,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 4,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 5,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 6,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 7,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 8,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 9,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
    {
      id: 10,
      title:
        'Ông già Noel mỉm cười và bảo Gia Hân nhắm mắt lại đếm 1-2-3, sau đó mở mắt ra xem điều ước về món quà giáng sinh của Gia Hân có trở thành hiện thực không nhé! ',
      content:
        'Đứng từ cửa phòng bệnh nhìn vào, thấy con gái vui vẻ, hạnh phúc khi nhận được món quà từ ông già Noel, chị Nguyễn Thị Mỹ Lan, 37 tuổi, mẹ của Gia Hân, mừng rơi nước mắt. Chị Lan kể mấy ngày nay, ngày nào con cũng hỏi chị: "Mẹ thấy ông già Noel đến chưa mẹ?".',
      image:
        'https://www.designbold.com/academy/wp-content/uploads/2018/09/10-trang-web-c%C3%B3-ngu%E1%BB%93n-h%C3%ACnh-%E1%BA%A3nh-mi%E1%BB%85n-ph%C3%AD-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-3.jpeg',
    },
  ];
  const Lua_chon = ({image, title}) => (
    <TouchableOpacity style={{flex: 1, marginHorizontal: 10}}>
      <Image
        source={image}
        resizeMode="contain"
        style={{width: 80, height: 80}}
      />
      <Text style={{textAlign: 'center', fontSize: 11}}>{title}</Text>
    </TouchableOpacity>
  );
  const Item = ({item}) => (
    <View
      style={{
        margin: 10,
        backgroundColor: '#ffff',
        borderRadius: 7,
        overflow: 'hidden',
      }}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="stretch"
        style={{width: 220, height: 120}}
      />
      <View style={{}}>
        <Text numberOfLines={2} style={styles.text_title}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={styles.text_content}>
          {item.content}
        </Text>

        <TouchableOpacity style={styles.TouchableOpacity_item}>
          <Text style={styles.text_item}>Order Ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  // mat tieng r
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EEEEEE" barStyle="dark-content" />
      <View style={styles.header_container}>
        <View style={styles.profile_header}>
          <Image source={profile_source} style={styles.imageProfile} />
          <View style={{marginLeft: 7}}>
            <Text numberOfLines={1} style={styles.text_frontWeight_bold}>
              {user_name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text>Khach hanh moi</Text>
              <Text style={styles.text_frontWeight_bold}> | {point}</Text>
              <Image source={logo_point} style={styles.logo_point}></Image>
            </View>
          </View>
        </View>
        <View>
          <MaterialIcons name="notifications" size={25} color="gray" />
        </View>
      </View>
      <View style={{height: 10}} />
      <ScrollView>
        <View style={styles.view_lua_chon}>
          <Lua_chon image={logo_lua_chon} title="Tích Điểm" />
          <Lua_chon image={logo_lua_chon} title="Đặt Hàng" />
          <Lua_chon image={logo_lua_chon} title="Coupon" />
          <Lua_chon image={logo_lua_chon} title="Rewards" />
        </View>
        <View style={{height: 10}} />

        <View style={styles.uu_Dai_Dac_Biet}>
          <View>
            <Text style={{marginLeft: 10}}>Ưu đãi đặc biệt</Text>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
          <View>
            <Text style={{marginLeft: 10}}>Cập nhật từ Nhà</Text>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
          <View>
            <Text style={{marginLeft: 10}}>#CoffeeLover</Text>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 40,
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
  logo_point: {
    width: 15,
    height: '100%',
  },
  text_frontWeight_bold: {
    fontWeight: 'bold',
  },
  view_lua_chon: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  uu_Dai_Dac_Biet: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text_item: {textAlign: 'center', color: '#ffb042'},
  text_content: {
    width: 220,
    fontSize: 13,
    paddingBottom: 15,
    paddingHorizontal: 15,
    lineHeight: 20,
  },
  text_title: {
    width: 220,
    fontSize: 16,
    paddingTop: 15,
    paddingHorizontal: 15,
    lineHeight: 25,
    fontWeight: '800',
  },
  TouchableOpacity_item: {
    flex: 1,
    paddingVertical: 7,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 40,
    width: 120,
    borderWidth: 1,
    borderColor: '#ffb042',
  },
});

export default MainTinTuc;
