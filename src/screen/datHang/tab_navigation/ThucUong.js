import React from 'react';
import {ScrollView, View} from 'react-native';
import ListVertical from '../component/ListVertical';
import {DATA} from '../data/DATA';
import {styles} from '../styles';

const ThucUong = () => {
  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
        <ListVertical title={'Cà phê'} DATA={DATA} />
        <ListVertical title={'Trà trái cây'} DATA={DATA} />
        <ListVertical title={'Macchiato'} DATA={DATA} />
        <ListVertical title={'Ca phê gói'} DATA={DATA} />
      </ScrollView>
    </View>
  );
};

export default ThucUong;
