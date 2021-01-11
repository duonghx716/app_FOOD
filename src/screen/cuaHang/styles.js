import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const CREAD_HEIGHT = height * 0.24;
const CREAD_WIDTH = width * 0.4;
export const styles = StyleSheet.create({
  container: {flex: 1},
  text_header: {
    width: '100%',
    fontWeight: '600',
    textAlign: 'center',
  },
  image_Marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  view_picker: {
    height: 50,
    width: width * 0.96,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    margin: width * 0.02,
  },
  scrollview: {
    position: 'absolute',
    padding: width * 0.02,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image_In_TouchableOpacity: {
    flex: 3,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  touchableOpacity_In_Scrollview: {
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginHorizontal: 7,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CREAD_HEIGHT,
    width: CREAD_WIDTH,
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  text_Description: {fontSize: 12, color: '#444'},
  text_Title: {fontSize: 12, fontWeight: 'bold'},
});
