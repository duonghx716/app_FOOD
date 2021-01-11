import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity_item}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="stretch"
        style={styles.image_item}
      />
      <View>
        <Text numberOfLines={2} style={styles.text_name_item}>
          {item.name}
        </Text>
        <View style={styles.view_In_touchableOpacity}>
          <Text style={styles.text_gia_item}>{item.gia}</Text>
          <MaterialIcons name="loupe" size={20} color="#ea8027" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
