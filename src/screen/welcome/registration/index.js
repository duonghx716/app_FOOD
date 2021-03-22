import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../login/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {AuthContext} from '../../../navigator/AuthProvider';

const Registration = ({navigation}) => {
  const ClickCancel = () => {
    navigation.navigate('Login');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = React.useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../../../assets/hinh1.jpg')}
      style={styles.ImageBackgroundStyle}>
      <View style={styles.bgColor} />
      <View style={styles.ViewStyle}>
        <Image
          style={[styles.ImageStyle, {marginBottom: -20}]}
          source={require('../../../assets/The_Coffee_House_Logo.png')}
          resizeMode="contain"
        />
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[styles.abc, {height: 150, marginTop: 50}]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomWidth: 0.5,
                  paddingLeft: 10,
                  flex: 1,
                }}>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/email.png')}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.TextinputStyle}
                  placeholder="Your Email"
                  onChangeText={(email) => setEmail(email)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomWidth: 0.5,
                  paddingLeft: 10,
                  flex: 1,
                }}>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/password.png')}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.TextinputStyle}
                  placeholder="Your Password"
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                  flex: 1,
                }}>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/password.png')}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.TextinputStyle}
                  placeholder="Confluent Password"
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <TouchableOpacity
            style={[
              styles.TouchableHighlightStyle,
              {marginTop: 10, width: '40%', marginRight: 30},
            ]}
            onPress={() => register(email, password)}>
            <Text style={[styles.TextStyle, {fontSize: 17}]}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.TouchableHighlightStyle,
              {marginTop: 10, width: '40%'},
            ]}
            onPress={ClickCancel}>
            <Text style={[styles.TextStyle, {fontSize: 17}]}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{backgroundColor: 'black', width: '50%', height: 1, top: 25}}
        />
      </View>
    </ImageBackground>
  );
};

export default Registration;
