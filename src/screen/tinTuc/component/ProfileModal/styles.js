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
  image_in_modal_profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
  },
  text_size: {fontSize: 20},
  TouchableOpacity_chang_profile: {
    backgroundColor: 'gray',
    height: 30,
    borderRadius: 15,
  },
  view_thongtin: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text_in_viewThongtin: {
    padding: 10,
    marginLeft: 15,
    justifyContent: 'flex-start',
    flex: 1,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
  },
  text_cap_Nhap: {
    padding: 10,
    marginHorizontal: 15,
    color: '#ffb042',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 5,
    borderColor: '#ffb042',
    borderWidth: 1,
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
  view_item: {
    flexDirection: 'column',
    padding: 15,
  },
  text_view_item: {color: 'gray', fontSize: 15, marginBottom: 3},
  textInput_view_item: {
    color: 'black',
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    fontSize: 15,
    padding: 10,
  },
});
