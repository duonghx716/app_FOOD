import React from 'react';
import {ScrollView, View} from 'react-native';
import ListVertical from '../component/ListVertical';
import {DATA} from '../data/DATA';
import {styles} from '../styles';
const PhoBien = () => {
  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
        <ListVertical title={'Món được yêu thích'} DATA={DATA} />
      </ScrollView>
    </View>
  );
};

export default PhoBien;
