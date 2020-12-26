import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Modal} from 'react-native';

const MainDatHang = () => {
  const [visible, setVisible] = useState(false);
  const modal = (
    <Modal visible={visible}>
      <View style={{width: 150, height: 150}}>
        <Text>modal test</Text>
      </View>
    </Modal>
  );
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {modal}
    </View>
  );
};

export default MainDatHang;
