import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
const PhoBien = ({propName}) => {
  const [active, setActive] = useState(1);
  {
    !propName ? null : setActive(0);
  }
  console.log('active ', active);
  console.log('dung de check visibale ', propName);
  const [visible, setVisible] = useState(false);
  const modal = (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <TouchableOpacity
        onPress={() => setVisible(false)}
        style={styles.containerModal}>
        <View style={styles.childContainerModal}>
          <Text style={{marginBottom: 20}}>
            Vui lòng chọn hình thức giao hàng
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.touchableOpacity}>
              <Image
                resizeMode="contain"
                source={require('../../assets/moto_logo.png')}
                style={styles.images}
              />
              <Text>Giao tận nơi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.touchableOpacity}>
              <Image
                resizeMode="contain"
                source={require('../../assets/moto_logo.png')}
                style={{width: 70, height: 70, borderRadius: 35}}
              />
              <Text>Tự đến lấy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  useEffect(() => {
    setVisible(true);
  }, [active]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {modal}
        <View style={{marginHorizontal: 15}}>
          <Text>Món được yêu thích</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainerModal: {
    backgroundColor: '#fff',
    width: width - 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  touchableOpacity: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {width: 70, height: 70, borderRadius: 35},
});

export default PhoBien;
