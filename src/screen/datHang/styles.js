import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainerModal: {
    backgroundColor: '#fff',
    width: width - 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  touchableOpacity: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {width: 70, height: 70, borderRadius: 35},
  // Item
  touchableOpacity_item: {
    flex: 0.5,
    margin: 10,
    backgroundColor: '#ffff',
    borderRadius: 7,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  image_item: {width: 220, height: 120},
  text_name_item: {
    height: 50,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    lineHeight: 25,
    fontWeight: '800',
  },
  view_In_touchableOpacity: {
    flex: 1,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  text_gia_item: {
    flex: 1,
    fontSize: 16,
  },
  // list Vertival
  flex: {flex: 1},
  text_title_listVertical: {marginLeft: 15, marginVertical: 15},
});
