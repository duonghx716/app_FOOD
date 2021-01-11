import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  profile_header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  logo_point: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  text_frontWeight_bold: {
    fontWeight: '300',
    fontSize: 20,
  },
  selector_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  text_dangxuat: {fontSize: 15, color: 'gray', fontWeight: '400'},
  text_title: {marginLeft: 10, fontSize: 15, fontWeight: '200'},
  TouchableOpacity: {
    marginLeft: 15,
    marginTop: 15,
    width: 80,
  },
  view_point: {width: 30, height: 30, flexDirection: 'row'},
});
