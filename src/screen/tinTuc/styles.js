import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  header_container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingRight: 10,
  },
  profile_header: {
    flex: 1,
    width: width * 0.9,
    height: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  logo_point: {
    width: 15,
    height: '100%',
  },
  text_frontWeight_bold: {
    fontWeight: 'bold',
  },
  view_lua_chon: {
    flex: 1,
    backgroundColor: '#ffff',
    flexDirection: 'row',
  },
  uu_Dai_Dac_Biet: {},
  text_item: {textAlign: 'center', color: '#ffb042'},
  text_content: {
    width: 220,
    fontSize: 13,
    paddingBottom: 15,
    paddingHorizontal: 15,
    lineHeight: 20,
  },
  text_title: {
    width: 220,
    fontSize: 16,
    paddingTop: 15,
    paddingHorizontal: 15,
    lineHeight: 25,
    fontWeight: '800',
  },
  TouchableOpacity_item: {
    flex: 1,
    paddingVertical: 7,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 40,
    width: 120,
    borderWidth: 1,
    borderColor: '#ffb042',
  },
  text_title_luachon: {marginLeft: 10, fontWeight: '600'},
  view_item: {
    margin: 10,
    backgroundColor: '#ffff',
    borderRadius: 7,
    overflow: 'hidden',
  },
  // Item_Notification
  container_Item_Notification: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: '#ffff',
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
  // modal_profile
  container_in_modal_profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  image_in_modal_profile: {width: 120, height: 120, borderRadius: 60},
  text_size: {fontSize: 20},
  TouchableOpacity_chang_profile: {
    backgroundColor: 'gray',
    height: 30,
    borderRadius: 15,
  },
  view_thongtin: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    padding: 15,
  },
  text_in_viewThongtin: {justifyContent: 'flex-start', flex: 1, fontSize: 18},
});
export default styles;
