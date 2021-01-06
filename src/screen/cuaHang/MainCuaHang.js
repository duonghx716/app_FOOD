import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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
      coordinates: {
        latitude: 10.785546,
        longitude: 106.681859,
      },
    },
    {
      id: 2,
      title: 'hello',
      coordinates: {
        latitude: 3.149771,
        longitude: 101.655449,
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
            backgroundColor: '#ffff',
            width: '100%',
            paddingVertical: 15,
            textAlign: 'center',
            fontWeight: '600',
          }}>
          Store
        </Text>
      </View>
      <MapView
        showsUserLocation
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.container}
        region={curentPosition}>
        {markers.map((item) => (
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

      {/* <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 150,
          borderRadius: 20,
          backgroundColor: '#ffff',
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: 'red',
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
export default MainCuaHang;
