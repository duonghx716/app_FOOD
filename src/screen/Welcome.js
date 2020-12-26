// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {View, Text, Image, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  // const [alignsecond, setAlignsecond] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setAlignsecond(false);
      navigation.navigate('Main');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{resizeMode: 'center'}}
        source={require('../assets/The_Coffee_House_Logo.png')}
      />
      {/* {alignsecond ? null : navigation.navigate('Main')} */}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
