import {setTokens} from '../redux/slices/User';
import EncryptedStorage from 'react-native-encrypted-storage';

export const logIn = async (dispatch, {password, userName} , callback) => {
  let tokens = await fetch('http://192.168.20.107:8000/api/token/', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      password,
      username: userName,
    }),
  });

  tokens = await tokens.json();
  dispatch(
    setTokens({accessToken: tokens.access, refreshToken: tokens.refresh}),
  );
  setTokensToEncrypetStorage(tokens.access, tokens.refresh);
  callback(tokens.access)
};

export const getTokensFromEncryptedStorage = async (dispatch, callback) => {
  try {
    let session = await EncryptedStorage.getItem('user_session');
    session = JSON.parse(session);
    if (session.accessToken !== undefined) {
      dispatch(
        setTokens({
          accessToken: session.accessToken,
          refreshToken: session.refresh,
        }),
      );
      callback(session.accessToken)
      return
    }
    callback()
    
  } catch (error) {
  }
  
};

export const setTokensToEncrypetStorage = async (access, refresh) => {
  try {
    await EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        accessToken: access,
        refreshToken: refresh,
      }),
    );
  } catch (error) {}
};


export const getCredentials = async (accessToken , callback) => {
  let data = await fetch("http://192.168.20.107:8000/api/user/credentials/" , {headers : {Authorization: `Bearer ${accessToken}`}})
  data = await data.json();
  callback(data)
}