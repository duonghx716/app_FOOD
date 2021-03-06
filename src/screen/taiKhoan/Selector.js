import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import ProfileModal from '../tinTuc/component/ProfileModal';
import {
  TCH_Rewards,
  ThongTinTaiKhoan,
  NhacDangPhat,
  LichSu,
  GiupDo,
  CaiDat,
} from '../../assets/string';
const Selector = ({icon, title, chose}) => {
  const [isProfileShow, setIsProfileShow] = React.useState(false);

  const Chose = () => {
    switch (chose) {
      case TCH_Rewards:
        alert('TCH_Rewards');
        break;
      case ThongTinTaiKhoan:
        setIsProfileShow(true);
        break;
      case NhacDangPhat:
        alert('NhacDangPhat');
        break;
      case LichSu:
        alert('LichSu');
        break;
      case GiupDo:
        alert('GiupDo');
        break;
      case CaiDat:
        alert('CaiDat');
        break;

      default:
        break;
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.selector_container}
        onPress={() => Chose()}>
        <MaterialIcons name={icon} size={25} color="gray" />
        <Text style={styles.text_title}>{title}</Text>
      </TouchableOpacity>
      <ProfileModal
        isVisible={isProfileShow}
        onHideModal={() => setIsProfileShow(false)}
      />
    </View>
  );
};

export default Selector;
