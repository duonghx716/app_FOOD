import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const user_name = 'Dương Hà';
const point = 0;
const logo_point = require('../assets/logo_point.png');
const profile_source = require('../assets/profile.jpg');

const header_container = () => {
  return (
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
  );
};
const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profile_header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  logo_point: {
    width: 15,
    height: '100%',
  },
  text_frontWeight_bold: {
    fontWeight: 'bold',
  },
});
export default header_container;
