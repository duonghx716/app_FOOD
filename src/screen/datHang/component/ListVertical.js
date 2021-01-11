import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Item from '../Item';
import {styles} from '../styles';

const ListVertical = React.memo((props) => {
  return (
    <View>
      <Text style={styles.text_title_listVertical}>{props.title}</Text>
      <View style={styles.flex}>
        <FlatList
          data={props.DATA}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Item item={item} />}
          //Setting the number of column
          numColumns={2}
        />
      </View>
    </View>
  );
});

export default ListVertical;
