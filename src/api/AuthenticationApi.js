import {setTokens} from '../redux/slices/User';

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
    setTokens({accessToken: tokens.access, refreshToken: tokens.refresh}),
  );
};
