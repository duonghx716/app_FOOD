import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Animated,
  View,
  Text,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const {width, height} = Dimensions.get('screen');

const CREAD_HEIGHT = height * 0.24;
const CREAD_WIDTH = width * 0.4;
const SAPSING_FOR_CARD_INSET = width * 0.1 - 10;
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
        <Text
          style={{
            width: '100%',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Store
        </Text>
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
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
            />
          </Marker>
        ))}
      </MapView>
      <View
        style={{
          height: 50,
          width: width * 0.96,
          borderRadius: 10,
          backgroundColor: '#fff',
          position: 'absolute',
          top: 50,
          justifyContent: 'center',
          margin: width * 0.02,
        }}>
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
        style={{
          position: 'absolute',
          padding: width * 0.02,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        {markers.map((marker, index) => (
          <TouchableOpacity
            key={index}
            style={{
              elevation: 2,
              backgroundColor: '#fff',
              borderRadius: 7,
              marginHorizontal: 7,
              shadowColor: '#000000',
              shadowOpacity: 0.3,
              shadowOffset: {x: 2, y: -2},
              height: CREAD_HEIGHT,
              width: CREAD_WIDTH,
              overflow: 'hidden',
            }}>
            <Image
              source={{uri: marker.image}}
              resizeMode="cover"
              style={{
                flex: 3,
                alignSelf: 'center',
                width: '100%',
                height: '100%',
              }}
            />
            <View style={{flex: 1, padding: 10}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 12, fontWeight: 'bold'}}>
                {marker.title}
              </Text>
              <Text numberOfLines={1} style={{fontSize: 12, color: '#444'}}>
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
const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
});
export default MainCuaHang;
