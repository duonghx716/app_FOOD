import React, {useState, useEffect} from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {logo_point} from '../../../../assets';
import ChangeAvatarModal from '../ChangeAvataModal';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const ProfileModal = ({isVisible, onHideModal}) => {
  const [isVisibleChangeAvatarModal, setIsVisibleChangeAvatarModal] = useState(
    false,
  );
  const [name, setName] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [gender, setGender] = useState(null);
  const [numberPhone, setNumberPhone] = useState(null);
  const [user, setUser] = useState([]);
  const userAuth = auth().currentUser;
  const click = () => {
    database().ref(`/users/${userAuth.uid}`).update({
      name: name,
      gender: gender,
      numberPhone: numberPhone,
      birthDay: birthDay,
    });
    alert('thành công');
  };
  useEffect(() => {
    const getUser = async () => {
      await database()
        .ref(`/users/${userAuth.uid}`)
        .on('value', (snapshot) => {
          setUser(snapshot.val());
          console.log('user hien tai', snapshot.val());
        });
    };
    getUser();
    console.log('user: ', user);
  }, []);
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <View style={[{...styles.container}, {backgroundColor: '#fff'}]}>
        <View
          style={[{...styles.container}, {flexDirection: 'row', padding: 15}]}>
          <View style={styles.container_in_modal_profile}>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleChangeAvatarModal(true);
              }}>
              <Image
                source={{uri: user.avatar || null}}
                style={styles.image_in_modal_profile}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
            <Text style={styles.text_size}>Dương Hà</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text_size}>29</Text>
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
                click();
              }}>
              <Text style={{color: 'blue', fontSize: 18}}>
                Cập nhật thông tin
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Tên</Text>
              <TextInput
                style={styles.textInput_view_item}
                onChangeText={(name) => setName(name)}
                value={name == null ? user.name : name}></TextInput>
            </View>
            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Sinh nhật</Text>
              <TextInput
                style={styles.textInput_view_item}
                onChangeText={(birthDay) => setBirthDay(birthDay)}
                value={birthDay == null ? user.birthDay : birthDay}
              />
            </View>
            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Số Điện Thoại</Text>
              <TextInput
                style={styles.textInput_view_item}
                keyboardType="numeric"
                onChangeText={(numberPhone) => {
                  setNumberPhone(numberPhone);
                }}
                value={numberPhone == null ? user.numberPhone : numberPhone}
              />
            </View>
            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Giới Tính</Text>

              <TextInput
                style={styles.textInput_view_item}
                onChangeText={(gender) => {
                  setGender(gender);
                }}
                value={gender == null ? user.gender : gender}
              />
            </View>
          </View>
        </View>
      </View>
      <ChangeAvatarModal
        isVisitableChange={isVisibleChangeAvatarModal}
        onHideModalChange={() => {
          setIsVisibleChangeAvatarModal(false);
        }}
        // onChangeAvatar={setAvatar}
      />
    </Modal>
  );
};

export default ProfileModal;
