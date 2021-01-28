// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AuthContext} from '../../navigator/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Welcome = ({navigation}) => {
  const {user} = React.useContext(AuthContext);
  //  const [isCheck, setIsCheck] = useState(null);
  // storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('isCheck', 'true');
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  // getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('isCheck').then();
  //     console.log('value: ', value);
  //     if (value !== null) {
  //       setIsCheck(value);
  //     }
  //   } catch (e) {
  //     console.log('get data welcome: ', e);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      // console.log('isCheck: ', isCheck);
      // {
      //   isCheck ? navigation.navigate('Login') : navigation.navigate('Intro');
      // }
      // setIsCheck('false');
      console.log('user in welcome: ', user);
      {
        user ? navigation.navigate('Login') : navigation.navigate('Intro');
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{resizeMode: 'cover', width: '100%', height: '100%'}}
        source={require('../../assets/wellcome.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default Welcome;
