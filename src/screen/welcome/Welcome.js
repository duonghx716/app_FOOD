import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Welcome = () => {
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
