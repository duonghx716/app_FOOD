import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import styles from './styles';
const {width} = Dimensions.get('screen');

const NotificationItem = ({item}) => {
  return (
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
};

export default NotificationItem;
