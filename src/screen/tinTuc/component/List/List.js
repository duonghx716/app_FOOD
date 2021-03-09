import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles';
// import WebView from '../WebView/webView';
import {useNavigation} from '@react-navigation/native';
const List = (props) => {
  const navigation = useNavigation();

  const Item = React.memo(({item}) => {
    const click = (items) => {
      // navigation.navigate('WebView');
      // navigation.navigate('WebView', {screen: 'TinTuc'});
      alert(items.url);
    };
    return (
      <View style={styles.view_item}>
        <Image
          source={{
            uri: item.urlToImage,
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
          <TouchableOpacity
            style={styles.TouchableOpacity_item}
            onPress={() => click(item)}>
            <Text style={styles.text_item}>Xem ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, areEqual);

  const areEqual = (prev, next) => {
    console.log({prev, next});
    return false;
  };

  return (
    <View>
      <Text style={styles.text_title_luachon}>{props.title}</Text>
      <FlatList
        data={props.DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

export default List;
