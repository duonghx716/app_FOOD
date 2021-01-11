import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from '../styles';
const List = React.memo((props) => {
  const Item = ({item}) => (
    <View style={styles.view_item}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="stretch"
        style={{width: 220, height: 120}}
      />
      <View style={{}}>
        <Text numberOfLines={2} style={styles.text_title}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={styles.text_content}>
          {item.content}
        </Text>

        <TouchableOpacity style={styles.TouchableOpacity_item}>
          <Text style={styles.text_item}>Order Ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      <Text style={styles.text_title_luachon}>{props.title1}</Text>
      <FlatList
        data={props.DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
});

export default List;
