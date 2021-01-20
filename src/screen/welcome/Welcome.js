// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AuthContext} from '../../navigator/AuthProvider';

const Welcome = ({navigation}) => {
  const {user} = React.useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
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
