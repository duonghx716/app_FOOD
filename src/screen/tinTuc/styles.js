import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profile_header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  logo_point: {
    width: 15,
    height: '100%',
  },
  text_frontWeight_bold: {
    fontWeight: 'bold',
  },
  view_lua_chon: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
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
