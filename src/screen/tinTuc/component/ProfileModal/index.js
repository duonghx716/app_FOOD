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
  const [isAvatarLink, setIsAvatarLink] = useState(null);
  const [isVisibleChangeAvatarModal, setIsVisibleChangeAvatarModal] = useState(
    false,
  );

  const [name, setName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [gender, setGender] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [avatar, setAvatar] = useState(
    'https://reactnative.dev/img/tiny_logo.png',
  );

  const [user, setUser] = useState([]);

  const userAuth = auth().currentUser;

  const click = () => {
    // setUser({name, birthDay, gender, numberPhone, avatar});
    database().ref(`/users/${userAuth.uid}`).update({
      name: name,
      gender: gender,
      numberPhone: numberPhone,
      birthDay: birthDay,
    });
    alert('thanh cong');
  };
  useEffect(() => {
    database().ref(`/users/${userAuth.uid}`).update({
      avatar: avatar,
    });
  }, [avatar]);
  useEffect(() => {
    // const userAuth = auth().currentUser;
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
                source={{uri: user.avatar || avatar}}
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
              <Text style={styles.textInput_view_item}>{user.name}</Text>
              {/* <TextInput
                style={styles.textInput_view_item}
                onChangeText={(name) => setName(name)}
                value={user.name}></TextInput> */}
            </View>

            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Sinh nhật</Text>
              <Text style={styles.textInput_view_item}>{user.birthDay}</Text>

              {/* <TextInput
                style={styles.textInput_view_item}
                onChangeText={(birthDay) => setBirthDay(birthDay)}
                value={birthDay}
              /> */}
            </View>

            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Số Điện Thoại</Text>
              <Text style={styles.textInput_view_item}>{user.numberPhone}</Text>

              {/* <TextInput
                style={styles.textInput_view_item}
                onChangeText={(numberPhone) => {
                  setNumberPhone(numberPhone);
                }}
                value={numberPhone}
              /> */}
            </View>

            <View style={styles.view_item}>
              <Text style={styles.text_view_item}>Giới Tính</Text>
              <Text style={styles.textInput_view_item}>{user.gender}</Text>

              {/* <TextInput
                style={styles.textInput_view_item}
                onChangeText={(gender) => {
                  setGender(gender);
                }}
                value={gender}
              /> */}
            </View>

            {/* <ProfileItem title="Tên" value={user.name} />
            <ProfileItem title="Sinh nhật" value={user.birthday} />
            <ProfileItem title="Số Điện Thoại" value={user.phoneNumber} />
            <ProfileItem title="Giới Tính" value={user.gender} /> */}
          </View>
        </View>
      </View>
      <ChangeAvatarModal
        isVisitableChange={isVisibleChangeAvatarModal}
        onHideModalChange={() => {
          setIsVisibleChangeAvatarModal(false);
        }}
        onChangeAvatar={setAvatar}
      />
    </Modal>
  );
};

export default ProfileModal;
