import React from 'react';
import {View, Text} from 'react-native';

const ProfileItem = ({title, value}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 15,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
      }}>
      <Text style={{color: 'gray', fontSize: 15}}>{title}</Text>
      <Text style={{color: 'black', fontSize: 15}}>{value}</Text>
    </View>
  );
};

export default ProfileItem;
