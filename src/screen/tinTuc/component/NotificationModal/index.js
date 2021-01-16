import React from 'react';
import {Modal, Text, TouchableOpacity, View, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DATA_notification} from '../../data/Data.js';
import styles from './styles';
import NotificationItem from './NotificationItem';

const NotificationModal = ({isVisible, onHideModal}) => {
  const _onPressReadAll = () => {
    alert('Bạn có chắc chắn đánh dấu đã xem tất cả các thông báo?');
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType={'slide'}>
      <View style={styles.container}>
        <View style={styles.container_modal_notification}>
          <TouchableOpacity style={styles.container} onPress={onHideModal}>
            <MaterialIcons name="close" size={30} color="gray" />
          </TouchableOpacity>
          <Text style={styles.text_thongbao}>Thông Báo</Text>
          <TouchableOpacity style={styles.container} onPress={_onPressReadAll}>
            <MaterialIcons name="grading" size={30} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.view_margin} />
        <View style={styles.view_FlatList}>
          <FlatList
            data={DATA_notification}
            horizontal={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
