import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
const ChangeAvatarModal = ({isVisitable1, onHideModal1}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={isVisitable1}>
      <TouchableOpacity onPress={onHideModal1} style={styles.containerModal}>
        <View style={styles.childContainerModal}>
          <Text style={{marginBottom: 20}}>Chọn nguồn ảnh</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => alert('camera')}
              style={styles.touchableOpacity}>
              <MaterialIcons name={'camera'} size={50} color="gray" />
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('album')}
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
