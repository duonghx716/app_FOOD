import React from 'react';
import {Modal, Text, TouchableOpacity, View, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const ChangeAvatarModal = ({isVisitableChange, onHideModalChange}) => {
  const userAuth = auth().currentUser;

  const updating = async (response) => {
    let avatarContent = response.uri;
    let FileName = avatarContent.substring(avatarContent.lastIndexOf('/') + 1);
    const task = storage().ref(FileName).putFile(avatarContent);

    // task.on('state_changed', (taskSnapshot) => {
    //   console.log(
    //     'state_changed',
    //     `${taskSnapshot.bytesTransferred} transferred of ${taskSnapshot.totalBytes}`,
    //   );
    //   // setTransferred(
    //   //   Math.round(
    //   //     (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
    //   //   ),
    //   // );
    // });

    try {
      await task;
      task.then((url) => {
        storage()
          .ref(url.metadata.fullPath)
          .getDownloadURL()
          .then((DownloadURL) => {
            // console.log(DownloadURL);
            database()
              .ref(`/users/${userAuth.uid}`)
              .update({
                avatar: DownloadURL,
              })
              .then(onHideModalChange)
              .catch((e) => {
                console.error('error set avatar: ', e);
              });
          });
      });
    } catch (error) {
      console.log(error);
    }
  };
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
        updating(response);
      },
    );
  };
  const Album = () => {
    launchImageLibrary({}, (response) => {
      updating(response);
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
                Camera();
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
