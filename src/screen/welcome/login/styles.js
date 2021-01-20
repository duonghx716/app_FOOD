import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  logo: {
    width: 23,
    height: 23,
  },
  abc: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: width * 0.8,
    height: 105,
    overflow: 'hidden',
  },
  ImageStyle: {
    width: 150,
    height: 150,
  },
  viewTextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    flex: 1,
  },
  TextinputStyle: {
    width: '100%',
    height: 49,
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
  },
  ViewStyle: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  TextStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    paddingBottom: 1,
    borderColor: '#FFFFFF',
  },
  ImageBackgroundStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgColor: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    opacity: 0.6,
  },
  TouchableHighlightStyle: {
    width: width * 0.8,
    height: 50,
    elevation: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#F9671E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    margin: 10,
  },
});
export default styles;
