import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {logo_point, profile_source} from '../../../../assets';
import styles from './styles';
import ProfileItem from './ProfileItem';
import ChangeAvatarModal from '../ChangeAvataModal';

const user = {
  id: 1,
  name: 'Dương Hà',
  phoneNumber: '0967884135',
  birthday: '12/02/1996',
  gender: 'Nam',
};
const ProfileModal = ({isVisible, onHideModal}) => {
  const [isVisibleChangeAvatarModal, setIsVisibleChangeAvatarModal] = useState(
    false,
  );
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <View style={[{...styles.container}, {backgroundColor: '#fff'}]}>
        <View
          style={[{...styles.container}, {flexDirection: 'row', padding: 15}]}>
          <View style={styles.container_in_modal_profile}>
            <TouchableOpacity
              onPress={() => setIsVisibleChangeAvatarModal(true)}>
              <Image
                source={profile_source}
                style={styles.image_in_modal_profile}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Text style={styles.text_size}>Dương Hà</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text_size}>29</Text>zlll
              <Image source={logo_point} style={{width: 30, height: 30}} />
              <Text style={styles.text_size}> | Khách hàng mới</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_chang_profile}
            onPress={onHideModal}>
            <MaterialIcons name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2, flexDirection: 'column'}}>
          <View style={styles.view_thongtin}>
            <Text style={styles.text_in_viewThongtin}>Thông Tin cá nhân</Text>
            <TouchableOpacity
              onPress={() => {
                alert('doi thong tin');
              }}>
              <Text style={{color: 'blue', fontSize: 18}}>Đổi</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
            <ProfileItem title="Tên" value={user.name} />
            <ProfileItem title="Sinh nhật" value={user.birthday} />
            <ProfileItem title="Số Điện Thoại" value={user.phoneNumber} />
            <ProfileItem title="Giới Tính" value={user.gender} />
          </View>
        </View>
      </View>
      <ChangeAvatarModal
        isVisitable1={isVisibleChangeAvatarModal}
        onHideModal1={() => {
          setIsVisibleChangeAvatarModal(false);
        }}
      />
    </Modal>
  );
};

export default ProfileModal;
