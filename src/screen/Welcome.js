// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{resizeMode: 'cover'}}
        source={require('../assets/wellcome.jpg')}
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
