import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ChangeAvatarModal = ({isVisitableChange, onHideModalChange}) => {
  const userAuth = auth().currentUser;

  const Camera = () => {
    launchCamera(
      {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        {
          database()
            .ref(`/users/${userAuth.uid}`)
            .update({
              avatar: response.uri,
            })
            .then(onHideModalChange)
            .catch((e) => {
              console.error('error set avatar: ', e);
            });
        }
      },
    );
  };

  const Album = () => {
    launchImageLibrary({}, (response) => {
      {
        database()
          .ref(`/users/${userAuth.uid}`)
          .update({
            avatar: response.uri,
          })
          .then(onHideModalChange)
          .catch((e) => {
            console.error('error set avatar: ', e);
          });
      }
    });
    alert('Album');
  };
  return (
    <Modal transparent={true} animationType="slide" visible={isVisitableChange}>
      <TouchableOpacity
        onPress={onHideModalChange}
        style={styles.containerModal}>
        <View style={styles.childContainerModal}>
          <Text style={{marginBottom: 20}}>Chọn phương thức</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                Camera(), onHideModalChange;
              }}
              style={styles.touchableOpacity}>
              <MaterialIcons name={'camera'} size={50} color="gray" />
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Album()}
              style={styles.touchableOpacity}>
              <MaterialIcons name={'collections'} size={50} color="gray" />
              <Text>Album</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ChangeAvatarModal;
