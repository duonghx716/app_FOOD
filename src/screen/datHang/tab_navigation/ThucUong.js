import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Item from '../Item';
import ListVertical from '../component/ListVertical';
let DATA = [
  {
    id: 1,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
    name: 'Streptopus amplexifolius (L.) DC. var. chalazatus Fassett',
    gia: 128738,
  },
  {
    id: 2,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-cot-dua-4.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=6FwxM3ZvFYs5ois71cdBdA',
    name: 'Dactylospora attendenda (Nyl.) Arnold',
    gia: 786719,
  },
  {
    id: 3,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/25/Espresso.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BD65A0WNFcSErc-ubj9ixQ',
    name: 'Scleranthus L.',
    gia: 198462,
  },
  {
    id: 4,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/25/Cortado-2.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=t4Dr5hFRGjrFAlDd1mJr3g',
    name: 'Erysimum odoratum Ehrh.',
    gia: 899974,
  },
  {
    id: 5,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/24/global-coffee-turkish-coffee-turkey-1571911997.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=sNdrb3wOaMcy9WpSJoIh_Q',
    name: 'Cyrtosperma chamissonis (Schott) Merr.',
    gia: 8174,
  },
  {
    id: 6,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/25/Coffee-Essaouira-Morocco-KAC2344.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=lB2Sgt4r1oIoj1jsKuqw0Q',
    name: 'Lathyrus ochroleucus Hook.',
    gia: 890571,
  },
  {
    id: 7,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/24/kinto-slow-coffee-brewer-stand-set-1-1024x1024-1571913686.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=sU_EpdsgW8SRdFL9k9_oug',
    name: 'Sidalcea sparsifolia (C.L. Hitchc.) S.R. Hill',
    gia: 303163,
  },
  {
    id: 8,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/24/Ya-Kun-Koya-toast-eggs-and-coffee-1571914042.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=TTdXOc67ZaBxuB-eB8-mrA',
    name: 'Fingerhuthia sesleriiformis Nees',
    gia: 944885,
  },
  {
    id: 9,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/24/global-coffee-ethiopian-coffee-ceremony-1571914216.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=ZDHnpKJTLiWqcCiFiJq6UA',
    name: 'Rorippa indica (L.) Hiern.',
    gia: 471297,
  },
  {
    id: 10,
    image:
      'https://i1-dulich.vnecdn.net/2019/10/24/Stockholm-Fika-Love-Fabrique-Fika-1571914388.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=8_7Vjs3SXrxYcetDRgOoQA',
    name: 'Pedicularis sudetica Willd. ssp. pacifica Hultén',
    gia: 3168,
  },
];

const ThucUong = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ListVertical title={'Cà phê'} DATA={DATA} />
        <ListVertical title={'Trà trái cây'} DATA={DATA} />
        <ListVertical title={'Macchiato'} DATA={DATA} />
        <ListVertical title={'Ca phê gói'} DATA={DATA} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThucUong;
