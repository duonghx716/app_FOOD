import Geolocation from '@react-native-community/geolocation';
import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';

const MainCuaHang = () => {
  const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const markers = [
    {
      id: 1,
      title: '183F Trần Quốc Thảo',
      description: '183F Trần Quốc Thảo, Quận 3, Hồ Chí Minh, Việt Nam',
      image:
        'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
      coordinates: {
        latitude: 10.785546,
        longitude: 106.681859,
      },
    },
    {
      id: 2,
      title: '223 Võ Văn Tần',
      description: '223 Võ Văn Tần, Quận 3, Hồ Chí Minh, Việt Nam',
      image:
        'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
      coordinates: {
        latitude: 10.773043,
        longitude: 106.687147,
      },
    },
    {
      id: 3,
      title: '86 Cao Thắng',
      description: '86 Cao Thắng, Quận 3, Hồ Chí Minh, Việt Nam',
      image:
        'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
      coordinates: {
        latitude: 10.7710635,
        longitude: 106.6811101,
      },
    },
    {
      id: 4,
      title: '6A Ngô Thời Nhiệm',
      description: '6A Ngô Thời Nhiệm, Quận 3, Hồ Chí Minh, Việt Nam',
      image:
        'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
      coordinates: {
        latitude: 10.780716,
        longitude: 106.690051,
      },
    },
    {
      id: 5,
      title: '63 Rạch Bùng Binh',
      description: '63 Rạch Bùng Binh, Quận 3, Hồ Chí Minh, Việt Nam',
      image:
        'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
      coordinates: {
        latitude: 10.782484,
        longitude: 106.6801536,
      },
    },
    {
      id: 6,
      title: 'TCH Signature 19B Phạm Ngọc Thạch',
      description:
        'TCH Signature 19B Phạm Ngọc Thạch, Quận 3, Hồ Chí Minh, Việt Nam',
      image:
        'https://i1-dulich.vnecdn.net/2019/10/25/ca-phe-sua-da-1.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Pz1LOVOSdhgRnj1mj4nZpg',
      coordinates: {
        latitude: 10.783696,
        longitude: 106.694513,
      },
    },
  ];
  const [selectedValue, setSelectedValue] = useState('java');
  const [curentPosition, setCurentPosition] = useState(initialState);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurentPosition({
          ...curentPosition,
          latitude: latitude,
          longitude: longitude,
        });
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return curentPosition.latitude ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Store</Text>
      </View>
      <MapView
        showsUserLocation
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.container}
        region={curentPosition}>
        {markers.map((item, index) => (
          <Marker
            key={item.id}
            coordinate={item.coordinates}
            title={item.title}
            description={item.title}>
            <Image
              source={require('../../assets/logoTCH.jpg')}
              style={styles.image_Marker}
            />
          </Marker>
        ))}
      </MapView>
      <View style={styles.view_picker}>
        <Picker
          mode={'dropdown'}
          selectedValue={selectedValue}
          style={{color: '#000'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript1" value="js1" />
          <Picker.Item label="JavaScript2" value="js2" />
          <Picker.Item label="JavaScript3" value="js3" />
          <Picker.Item label="JavaScript4" value="js4" />
        </Picker>
      </View>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}>
        {markers.map((marker, index) => (
          <TouchableOpacity
            key={index}
            style={styles.touchableOpacity_In_Scrollview}>
            <Image
              source={{uri: marker.image}}
              resizeMode="cover"
              style={styles.image_In_TouchableOpacity}
            />
            <View style={{flex: 1, padding: 10}}>
              <Text numberOfLines={1} style={styles.text_Title}>
                {marker.title}
              </Text>
              <Text numberOfLines={1} style={styles.text_Description}>
                {marker.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};

export default MainCuaHang;
