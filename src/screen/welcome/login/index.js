import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../../navigator/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = React.useContext(AuthContext);
  const ClickLogin = (e, p) => {
    login(e, p);
    ToastAndroid.show('Đăng nhập thành công', ToastAndroid.LONG);
  };
  return (
    <ImageBackground
      source={require('../../../assets/hinh1.jpg')}
      style={styles.ImageBackgroundStyle}>
      <View style={styles.bgColor} />
      <View style={styles.ViewStyle}>
        <Image
          style={styles.ImageStyle}
          source={require('../../../assets/The_Coffee_House_Logo.png')}
          resizeMode="contain"
        />
        <KeyboardAvoidingView behavior="padding" style={styles.abc}>
          <View style={styles.abc}>
            <View style={[styles.viewTextinput, {borderBottomWidth: 0.5}]}>
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
            <View style={styles.viewTextinput}>
              <Image
                style={styles.logo}
                source={require('../../../assets/password.png')}
                resizeMode="contain"
              />
              <TextInput
                style={styles.TextinputStyle}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                placeholder="Your Password"
              />
            </View>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={() => ClickLogin(email, password)}
          style={[styles.TouchableHighlightStyle, {marginTop: 7}]}>
          <Text style={[styles.TextStyle, {fontSize: 17}]}>Sign in</Text>
        </TouchableOpacity>
        <View
          style={{backgroundColor: 'black', width: '50%', height: 1, top: 25}}
        />
        <TouchableOpacity
          style={[
            styles.TouchableHighlightStyle,
            {backgroundColor: '#3B5997', marginTop: 60},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/logofacebook.png')}
              style={{width: 23, height: 23}}
              resizeMode="contain"
            />
            <Text style={[styles.TextStyle, {fontSize: 17}]}>
              Sign in with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.TouchableHighlightStyle,
            {backgroundColor: '#1BB2E9', marginTop: 5},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/logotwitter.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={[styles.TextStyle, {fontSize: 17}]}>
              Sign in with Twitter
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
          <Text
            style={[
              styles.TextStyle,
              {
                fontSize: 15,
                marginRight: 70,
                fontWeight: 'normal',
                color: '#111111',
              },
            ]}>
            {' '}
            Forgot password?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text
              style={[
                styles.TextStyle,
                {
                  fontSize: 15,
                  left: 0,
                  borderBottomWidth: 0.5,
                  fontWeight: 'normal',
                  color: '#111111',
                },
              ]}>
              New here? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
