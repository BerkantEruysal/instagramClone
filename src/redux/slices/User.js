import {createSlice} from '@reduxjs/toolkit';
import {logInApi} from '../../api/AuthenticationApi';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  profilePicture: null,
  username : null,
  isAnyStory : null
};

const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setTokens : (state , {payload}) => {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
      state.isLoggedIn = true
    },
    setCredentials : (state , {payload}) => {
      state.profilePicture = payload[0].profilePhoto;
      state.username = payload[0].username;
      state.isAnyStory = payload[0].isAnyStory
    }
  },
});

export const {setTokens , setCredentials} = User.actions;

export default User.reducer;
