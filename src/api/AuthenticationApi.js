import {setTokens} from '../redux/slices/User';
import EncryptedStorage from 'react-native-encrypted-storage';

export const logIn = async (dispatch, {password, userName}) => {
  let tokens = await fetch('http://192.168.20.107:8000/api/token/', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      password,
      username: userName,
    }),
  })
 
  tokens = await tokens.json();
  dispatch(
    setTokens({accessToken: tokens.access, refreshToken: tokens.refresh})
  );
  setTokensToEncrypetStorage(tokens.access , tokens.refresh)
};

export const getTokensFromEncryptedStorage = async (dispatch , setIsLoading) => {
  try {   
    let session = await EncryptedStorage.getItem("user_session");
    session = JSON.parse(session)
    if (session.accessToken !== undefined) {
      console.log("asd")
      
      dispatch(setTokens({accessToken : session.accessToken , refreshToken: session.refresh}))
        
    }
    setIsLoading(false)
} catch (error) {
    console.log(error)
}
}

export const setTokensToEncrypetStorage = async (access , refresh) => {
  try {
    await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
            accessToken : access,
            refreshToken : refresh
        })
    );

  
} catch (error) {
   
}
}
