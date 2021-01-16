import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  // modal_notifications
  container_modal_notification: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_thongbao: {
    flex: 8,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  view_margin: {backgroundColor: '#EEEEEE', width: width, height: 10},
  viewFlatList: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Item_Notification
  container_Item_Notification: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: '#ffff',
  },
});
