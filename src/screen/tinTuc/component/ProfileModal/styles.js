import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
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
  view_item: {
    flexDirection: 'column',
    padding: 15,
    // borderBottomColor: '#EEEEEE',
    // borderBottomWidth: 1,
  },
  text_view_item: {color: 'gray', fontSize: 15},
  textInput_view_item: {
    color: 'black',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    fontSize: 15,
    padding: 10,
  },
});
