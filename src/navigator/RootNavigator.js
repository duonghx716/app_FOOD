import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import Main from '../screen/Main';
import MainNavigation from './MainNavigation';

const RootNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  const onAuthStateChanged = (user) => {
    console.log('set user: ', user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log('user: ', user);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <Main /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigator;
