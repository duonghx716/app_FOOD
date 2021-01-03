import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Item = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 0.5,
        margin: 10,
        backgroundColor: '#ffff',
        borderRadius: 7,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: 'gray',
      }}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="stretch"
        style={{width: 220, height: 120}}
      />
      <View>
        <Text
          numberOfLines={2}
          style={{
            height: 50,
            fontSize: 16,
            paddingVertical: 10,
            paddingHorizontal: 10,
            lineHeight: 25,
            fontWeight: '800',
          }}>
          {item.name}
        </Text>

        <View
          style={{
            flex: 1,
            borderTopColor: 'gray',
            borderTopWidth: 0.5,
            flexDirection: 'row',
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
            }}>
            {item.gia}
          </Text>
          <MaterialIcons name="loupe" size={20} color="#ea8027" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
