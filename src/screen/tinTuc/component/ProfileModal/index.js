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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';

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
  const [checkUpdateData, setCheckUpdateData] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    console.log(`ngay ${day} thang ${month} nam ${year}`);
    setBirthDay(`${day}-${month}-${year}`);
    hideDatePicker();
  };

  const click = () => {
    database()
      .ref(`/users/${userAuth.uid}`)
      .update({
        name: name || user.name,
        gender: gender || user.gender,
        numberPhone: numberPhone || user.numberPhone,
        birthDay: birthDay || user.birthDay,
      })
      .then(() => {
        setCheckUpdateData(!checkUpdateData);
      });
    alert('thành công');
  };
  const getUser = async () => {
    try {
      await database()
        .ref(`/users/${userAuth.uid}`)
        .on('value', (snapshot) => {
          setUser(snapshot.val());
          console.log('user hien tai', snapshot.val());
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
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
                source={{
                  uri:
                    user.avatar ||
                    'https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg',
                }}
                style={styles.image_in_modal_profile}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
            <Text style={styles.text_size}>{user.name}</Text>
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
              <Text style={styles.text_cap_Nhap}>Cập nhật</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view_item}>
            <Text style={styles.text_view_item}>Tên</Text>
            <TextInput
              style={styles.textInput_view_item}
              onChangeText={(name) => setName(name)}
              value={name == null ? user.name : name}
            />
          </View>
          <View style={styles.view_item}>
            <Text style={styles.text_view_item}>Sinh nhật</Text>
            <TouchableOpacity
              style={styles.textInput_view_item}
              onPress={showDatePicker}>
              <Text>{birthDay == null ? user.birthDay : birthDay}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
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

            <Picker
              style={styles.textInput_view_item}
              selectedValue={gender == null ? user.gender : gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
              <Picker.Item label="Nam" value="Nam" />
              <Picker.Item label="Nữ" value="Nu" />
            </Picker>
          </View>
        </View>
      </View>
      <ChangeAvatarModal
        isVisitableChange={isVisibleChangeAvatarModal}
        onHideModalChange={() => {
          setIsVisibleChangeAvatarModal(false);
        }}
      />
    </Modal>
  );
};

export default ProfileModal;
