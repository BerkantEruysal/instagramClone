import {createSlice} from '@reduxjs/toolkit';
import {logInApi} from '../../api/AuthenticationApi';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
};

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens : (state , {payload}) => {
      state.accessToken = payload.accessToken,
      state.refreshToken = payload.refreshToken
      console.log(state)
    }
  },
});

export const {setTokens} = User.actions;

export default User.reducer;
