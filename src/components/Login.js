import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getCredentials, logIn} from '../api/AuthenticationApi';
import {useDispatch, useSelector} from 'react-redux';


import { getHomePosts } from '../api/PostsApi';
import { setCredentials } from '../redux/slices/User';

export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  

  const logInButtonHandler = () => {
    logIn(dispatch, {userName, password} , (accessToken) => {
    
        getCredentials(accessToken , data => {
    
          dispatch(setCredentials(data))
        })
        
    });

  
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={value => setUserName(value)}
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"></TextInput>
      <TextInput
        onChangeText={value => setPassword(value)}
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"></TextInput>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordTxt}> Forgot password ? </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => logInButtonHandler()}
        style={styles.loginButton}>
        <Text style={styles.loginButtonTxt}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginWithFacebook}>
        <Text style={styles.loginWithFacebookTxt}>
          <Image
            source={require('../assets/facebookLogo.png')}
            style={{width: 20, height: 20}}></Image>{' '}
          Log in with Facebook{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    margin: 5,
    width: 343,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 6,
    marginBottom: 6,
    height: 44,
    width: 343,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    paddingLeft: 15,
    color: '#262626',
  },

  forgotPassword: {
    marginTop: 19,
    marginLeft: '60%',
  },
  forgotPasswordTxt: {
    color: '#3797EF',
  },
  loginButton: {
    borderRadius: 5,
    backgroundColor: 'rgba(55, 151, 239, 0.5)',
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  loginButtonTxt: {
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  loginWithFacebook: {
    marginTop: 37,
    width: 170,
    alignSelf: 'center',
  },
  loginWithFacebookTxt: {
    color: '#3797EF',
    fontWeight: 'bold',
  },
});
