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
  },
  profile_header: {
    flex: 1,
    width: width * 0.9,
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  uu_Dai_Dac_Biet: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
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
});
export default styles;
