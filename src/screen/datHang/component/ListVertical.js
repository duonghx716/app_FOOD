import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Item from '../Item';

const ListVertical = React.memo((props) => {
  return (
    <View>
      <Text style={{marginLeft: 15, marginVertical: 15}}>{props.title}</Text>
      <View style={{flex: 1}}>
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
