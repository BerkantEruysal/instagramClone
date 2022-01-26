import {View, Text, Dimensions, Image, StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';
import Login from '../components/Login';
export default function Authentication() {
  return (
    <View style={styles.screen}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/textLogo.png')}
          style={styles.logo}></Image>
      </View>
      <Login></Login>
      <View style={styles.lineOrWrapper}>
        <View style={styles.lineOr}></View>
        <Text style={styles.lineOrTxt}>OR</Text>
        <View style={styles.lineOr}></View>
      </View>
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUpTxtGrey}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpTxtBlue}> Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
  logoWrapper: {
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  logo: {
    width: 182,
    height: 55,
  },
  lineOrWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
  },
  lineOr: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 1,
    flex: 1,
  },
  lineOrTxt: {paddingHorizontal: 20, color: 'rgba(0,0,0,0.4)'},
  signUpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 45,
  },
  signUpTxtGrey: {
    color: 'rgba(0 , 0 , 0 , 0.4)',
  },
  signUpTxtBlue: {
    color: '#3797EF',
  },
});
