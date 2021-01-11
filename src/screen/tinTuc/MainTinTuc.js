import React from 'react';
import {FlatList, Image, StatusBar, Text, View, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  const Item = ({item}) => (
    <View style={styles.view_item}>
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

        <View style={styles.uu_Dai_Dac_Biet}>
          <View>
            <Text style={styles.text_title_luachon}>Ưu đãi đặc biệt</Text>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
          <View>
            <Text style={styles.text_title_luachon}>Cập nhật từ Nhà</Text>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
          <View>
            <Text style={styles.text_title_luachon}>#CoffeeLover</Text>
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

export default MainTinTuc;
