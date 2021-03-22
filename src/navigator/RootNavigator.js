import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

import RootStackScreen from './RootStackScreen';
import Welcome from '../screen/welcome/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {user, setUser} = useContext(AuthContext);
  const [checkIntro, setCheckIntro] = React.useState(null);

  const onAuthStateChanged = async (user) => {
    await setUser(user);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('checkIntro');
      if (value !== null) {
        setCheckIntro(value);
      }
    } catch (e) {
      console.log('get AsyncStorage error', e);
    }
  };
  console.log('get checkIntro: ', checkIntro);
  useEffect(() => {
    getData();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return subscriber;
  }, []);

  if (isLoading) {
    return <Welcome />;
  }

  return (
    <NavigationContainer>
      <RootStackScreen userToken={user} checkIntro={null} />
    </NavigationContainer>
  );
};

export default RootNavigator;
