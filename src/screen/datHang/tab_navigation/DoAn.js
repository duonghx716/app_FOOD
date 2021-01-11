import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListVertical from '../component/ListVertical';
import {DATA} from '../data/DATA';
import {styles} from '../styles';
const DoAn = () => {
  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
        <ListVertical title={'Thức ăn nhẹ'} DATA={DATA} />
        <ListVertical title={'Thức uống đá xay'} DATA={DATA} />
        <ListVertical title={'Bánh ngọt'} DATA={DATA} />
        <ListVertical title={'Bánh mặn'} DATA={DATA} />
      </ScrollView>
    </View>
  );
};

export default DoAn;
